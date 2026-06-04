#!/usr/bin/env python3
"""Fast OCR scan/fix/verify for Oppolia watermarks in local .webp images.

For every .webp in the requested /oppolia/ folders, the scanner checks:
- bottom 15% of the image
- top-right corner
- normal and inverted color modes

To keep the full 1,148-image pass practical, the initial OCR combines required
regions and modes into a compact contact strip per image. Positives are then
region-classified so cropping can target bottom and/or top-right areas.
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import re
import sys
import time
from concurrent.futures import ProcessPoolExecutor, as_completed
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import List, Tuple

from PIL import Image, ImageOps, ImageFilter, ImageDraw
import pytesseract

ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT / "client" / "public"
TARGET_FOLDERS = ["kitchens", "bedrooms", "bathrooms", "wardrobes", "vanities", "tv-units", "laundry", "doors-windows"]
KEYWORDS = ("oppolia", "www.", "oppoliahome")


@dataclass
class Detection:
    path: str
    width: int
    height: int
    regions: str
    matched_text: str


def list_images() -> List[Path]:
    images: List[Path] = []
    for folder in TARGET_FOLDERS:
        base = PUBLIC / "oppolia" / folder
        if base.exists():
            images.extend(sorted(base.glob("*.webp")))
    return sorted(images)


def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text.strip().lower())


def has_watermark(text: str) -> bool:
    text = clean_text(text)
    compact = re.sub(r"[^a-z0-9.]+", "", text)
    fuzzy = compact.replace("0", "o").replace("1", "l")
    return any(k in text or k.replace(".", "") in compact or k.replace(".", "") in fuzzy for k in KEYWORDS)


def prepare_region(region: Image.Image, max_width: int = 1200) -> Image.Image:
    region = region.convert("RGB")
    if region.width > max_width:
        new_h = max(24, int(region.height * (max_width / region.width)))
        region = region.resize((max_width, new_h), Image.Resampling.LANCZOS)
    elif region.width < 700:
        scale = 2
        region = region.resize((region.width * scale, region.height * scale), Image.Resampling.LANCZOS)
    gray = ImageOps.grayscale(region).filter(ImageFilter.SHARPEN)
    return gray


def combined_required_ocr_image(im: Image.Image) -> Image.Image:
    w, h = im.size
    bottom = prepare_region(im.crop((0, int(h * 0.85), w, h)))
    top_right = prepare_region(im.crop((int(w * 0.55), 0, w, int(h * 0.25))))
    pieces = [bottom, ImageOps.invert(bottom), top_right, ImageOps.invert(top_right)]
    pad = 12
    canvas_w = max(p.width for p in pieces) + pad * 2
    canvas_h = sum(p.height for p in pieces) + pad * (len(pieces) + 1)
    canvas = Image.new("L", (canvas_w, canvas_h), 255)
    y = pad
    for p in pieces:
        canvas.paste(p, (pad, y))
        y += p.height + pad
    return canvas


def ocr_image(img: Image.Image, timeout: int = 6) -> str:
    try:
        return clean_text(pytesseract.image_to_string(img, config="--oem 1 --psm 6", timeout=timeout))
    except RuntimeError:
        return ""


def scan_region(region: Image.Image) -> Tuple[bool, str]:
    gray = prepare_region(region)
    texts = []
    for variant in (gray, ImageOps.invert(gray)):
        text = ocr_image(variant, timeout=5)
        if text:
            texts.append(text)
            if has_watermark(text):
                return True, " | ".join(texts)
    return False, " | ".join(texts)


def scan_one(path: Path) -> Detection | None:
    try:
        with Image.open(path) as im:
            im = im.convert("RGB")
            w, h = im.size
            combined = combined_required_ocr_image(im)
            combined_text = ocr_image(combined, timeout=8)
            if not has_watermark(combined_text):
                return None
            regions = []
            matched = [f"combined={combined_text}"]
            bottom_hit, bottom_text = scan_region(im.crop((0, int(h * 0.85), w, h)))
            if bottom_hit:
                regions.append("bottom")
                matched.append(f"bottom={bottom_text}")
            top_hit, top_text = scan_region(im.crop((int(w * 0.55), 0, w, int(h * 0.25))))
            if top_hit:
                regions.append("top_right")
                matched.append(f"top_right={top_text}")
            if not regions:
                # If the combined OCR hit but classification failed, default to bottom,
                # because the visible URL watermark strip is overwhelmingly bottom-based.
                regions.append("bottom")
            return Detection(str(path.relative_to(ROOT)), w, h, ",".join(regions), " || ".join(matched))
    except Exception as exc:
        return Detection(str(path.relative_to(ROOT)), 0, 0, "ERROR", str(exc))


def scan_all(workers: int) -> List[Detection]:
    images = list_images()
    detections: List[Detection] = []
    start = time.time()
    print(f"Scanning {len(images)} .webp images with {workers} workers...", flush=True)
    with ProcessPoolExecutor(max_workers=workers) as executor:
        futures = {executor.submit(scan_one, p): p for p in images}
        for i, future in enumerate(as_completed(futures), 1):
            result = future.result()
            if result:
                detections.append(result)
                print(f"[{i}/{len(images)}] WATERMARK {result.regions}: {result.path}", flush=True)
            if i % 50 == 0 or i == len(images):
                print(f"[{i}/{len(images)}] scanned; detections={len(detections)}; elapsed={time.time()-start:.1f}s", flush=True)
    return sorted(detections, key=lambda d: d.path)


def write_reports(detections: List[Detection], stem: str) -> None:
    (ROOT / f"{stem}.json").write_text(json.dumps([asdict(d) for d in detections], indent=2), encoding="utf-8")
    with (ROOT / f"{stem}.csv").open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["path", "width", "height", "regions", "matched_text"])
        writer.writeheader()
        writer.writerows(asdict(d) for d in detections)
    print(f"Wrote {stem}.json and {stem}.csv", flush=True)


def crop_image_for_detection(det: Detection) -> bool:
    path = ROOT / det.path
    if not path.exists() or det.regions == "ERROR":
        return False
    with Image.open(path) as im:
        im = im.convert("RGB")
        w, h = im.size
        left, top, right, bottom = 0, 0, w, h
        regions = set(det.regions.split(","))
        if "bottom" in regions:
            bottom = int(h * 0.92)
        if "top_right" in regions:
            top = max(top, int(h * 0.08))
            right = min(right, int(w * 0.96))
        if right - left < 100 or bottom - top < 100:
            print(f"Unsafe crop skipped: {det.path}", file=sys.stderr, flush=True)
            return False
        cropped = im.crop((left, top, right, bottom))
        cropped.save(path, "WEBP", quality=92, method=6)
    return True


def load_detections(report: str) -> List[Detection]:
    data = json.loads((ROOT / report).read_text(encoding="utf-8"))
    return [Detection(**row) for row in data]


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=["scan", "fix", "verify"])
    parser.add_argument("--workers", type=int, default=max(1, min(8, os.cpu_count() or 2)))
    parser.add_argument("--stem", default="watermark_scan_initial")
    parser.add_argument("--report", default="watermark_scan_initial.json")
    args = parser.parse_args()

    if args.command in {"scan", "verify"}:
        detections = scan_all(args.workers)
        stem = "watermark_scan_verify" if args.command == "verify" else args.stem
        write_reports(detections, stem)
        print(f"DETECTIONS={len(detections)}", flush=True)
        if args.command == "verify" and detections:
            sys.exit(2)
        return

    detections = load_detections(args.report)
    fixed = 0
    for det in detections:
        if crop_image_for_detection(det):
            fixed += 1
    print(f"FIXED={fixed}", flush=True)


if __name__ == "__main__":
    main()
