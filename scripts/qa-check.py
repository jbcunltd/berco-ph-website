#!/usr/bin/env python3
"""Comprehensive BERCO website QA checker.

This script is intentionally dependency-light and reusable. It validates product
image references, public-facing brand cleanliness, navigation/category alignment,
product data quality, thumbnail watermark OCR, and production build health.

Usage:
    python3 scripts/qa-check.py
    python3 scripts/qa-check.py --skip-build
    python3 scripts/qa-check.py --json qa-report.json
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable

try:
    from PIL import Image, ImageFilter, ImageOps
except Exception:  # pragma: no cover - handled at runtime
    Image = None
    ImageFilter = None
    ImageOps = None


REPO_ROOT = Path(__file__).resolve().parents[1]
PRODUCTS_JSON = REPO_ROOT / "client/src/data/products.json"
CATEGORY_CONFIG = REPO_ROOT / "client/src/data/categoryConfig.ts"
HEADER_TSX = REPO_ROOT / "client/src/components/Header.tsx"
PUBLIC_DIR = REPO_ROOT / "client/public"
BERCO_PUBLIC_DIR = PUBLIC_DIR / "berco"
CLIENT_SRC_DIR = REPO_ROOT / "client/src"

SUPPLIER_BRAND_TERMS = ["oppolia", "oppein", "oppoliahome"]
WATERMARK_TERMS = ["oppoliahome", "oppolia", "www."]
SOURCE_EXTENSIONS = {".json", ".tsx", ".ts"}


@dataclass
class Finding:
    check: str
    severity: str
    message: str
    details: dict[str, Any] = field(default_factory=dict)


class QARunner:
    def __init__(self, *, skip_build: bool = False, verbose: bool = False) -> None:
        self.skip_build = skip_build
        self.verbose = verbose
        self.findings: list[Finding] = []
        self.metrics: dict[str, Any] = {}
        self.products: list[dict[str, Any]] = []
        self.category_slugs: set[str] = set()
        self.category_hrefs: dict[str, str] = {}
        self.nav_items: list[dict[str, str]] = []

    def add(self, check: str, severity: str, message: str, **details: Any) -> None:
        self.findings.append(Finding(check, severity, message, details))

    def pass_metric(self, key: str, value: Any) -> None:
        self.metrics[key] = value

    def run(self) -> int:
        self.load_data()
        self.check_image_integrity()
        self.check_thumbnail_watermarks()
        self.check_brand_contamination()
        self.check_navigation_consistency()
        self.check_product_data_quality()
        self.check_category_alignment()
        self.check_build()
        self.print_report()
        return 1 if any(f.severity == "ERROR" for f in self.findings) else 0

    def load_data(self) -> None:
        if not PRODUCTS_JSON.exists():
            self.add("data-load", "ERROR", f"Missing products catalog: {PRODUCTS_JSON}")
            return
        try:
            self.products = json.loads(PRODUCTS_JSON.read_text(encoding="utf-8"))
        except Exception as exc:
            self.add("data-load", "ERROR", f"Unable to parse products.json: {exc}")
            self.products = []
        self.pass_metric("products_total", len(self.products))
        self.category_slugs, self.category_hrefs = parse_category_config(CATEGORY_CONFIG)
        self.nav_items = parse_product_nav_items(HEADER_TSX)
        self.pass_metric("category_config_slugs", sorted(self.category_slugs))
        self.pass_metric("product_dropdown_items", self.nav_items)

    def iter_product_image_refs(self, product: dict[str, Any]) -> Iterable[tuple[str, str]]:
        gallery = product.get("gallery")
        if isinstance(gallery, list):
            for idx, ref in enumerate(gallery):
                yield f"gallery[{idx}]", ref
        image = product.get("image")
        if image:
            yield "image", image

    def path_for_public_ref(self, ref: str) -> Path | None:
        if not isinstance(ref, str) or not ref.strip():
            return None
        ref = ref.strip()
        if ref.startswith("http://") or ref.startswith("https://"):
            return None
        if ref.startswith("/"):
            return PUBLIC_DIR / ref.lstrip("/")
        return PUBLIC_DIR / ref

    def check_image_integrity(self) -> None:
        check = "image-integrity"
        total_refs = 0
        missing: list[dict[str, str]] = []
        outside_berco: list[dict[str, str]] = []
        invalid: list[dict[str, str]] = []
        for product in self.products:
            product_title = str(product.get("title") or product.get("id") or "<untitled>")
            for field, ref in self.iter_product_image_refs(product):
                total_refs += 1
                if not isinstance(ref, str) or not ref.strip():
                    invalid.append({"product": product_title, "field": field, "path": str(ref)})
                    continue
                if not ref.startswith("/berco/"):
                    outside_berco.append({"product": product_title, "field": field, "path": ref})
                public_path = self.path_for_public_ref(ref)
                if public_path is None or not public_path.exists():
                    missing.append({"product": product_title, "field": field, "path": ref})
        self.pass_metric("image_references_total", total_refs)
        self.pass_metric("missing_image_references", len(missing))
        self.pass_metric("non_berco_image_references", len(outside_berco))
        if invalid:
            self.add(check, "ERROR", f"Found {len(invalid)} invalid image references.", examples=invalid[:25])
        if missing:
            self.add(check, "ERROR", f"Found {len(missing)} image references that do not exist in client/public.", examples=missing[:50])
        if outside_berco:
            self.add(check, "ERROR", f"Found {len(outside_berco)} product image references outside /berco/.", examples=outside_berco[:50])
        if not invalid and not missing and not outside_berco:
            self.add(check, "PASS", f"All {total_refs} product image references resolve under client/public/berco/.")

    def check_thumbnail_watermarks(self) -> None:
        check = "watermark-ocr"
        tesseract = shutil.which("tesseract")
        if Image is None or ImageOps is None or ImageFilter is None:
            self.add(check, "WARN", "Pillow is unavailable; skipping OCR watermark detection.")
            return
        if not tesseract:
            self.add(check, "WARN", "Tesseract OCR is unavailable; skipping watermark detection. Install tesseract to enable this check.")
            return
        # Sample-based OCR: check only 1 image per category to speed up QA runs
        scanned = 0
        detections: list[dict[str, str]] = []
        errors: list[dict[str, str]] = []
        by_category: dict[str, list[dict[str, Any]]] = defaultdict(list)
        for product in self.products:
            cat = str(product.get("category") or "")
            by_category[cat].append(product)
        for category, products_in_cat in sorted(by_category.items()):
            product = products_in_cat[0]  # Sample first product in each category
            gallery = product.get("gallery")
            if not isinstance(gallery, list) or not gallery:
                continue
            ref = gallery[0]
            public_path = self.path_for_public_ref(ref)
            if public_path is None or not public_path.exists():
                continue
            scanned += 1
            try:
                text = ocr_image(public_path, tesseract)
                normalized = normalize_ocr_text(text)
                matched = [term for term in WATERMARK_TERMS if term.replace(".", "") in normalized or term in text.lower()]
                if matched:
                    detections.append({
                        "product": str(product.get("title") or product.get("id") or "<untitled>"),
                        "category": category,
                        "path": str(ref),
                        "matched_terms": ", ".join(sorted(set(matched))),
                        "ocr_excerpt": " ".join(text.split())[:240],
                    })
            except Exception as exc:
                errors.append({
                    "product": str(product.get("title") or product.get("id") or "<untitled>"),
                    "category": category,
                    "path": str(ref),
                    "error": str(exc),
                })
        self.pass_metric("thumbnail_ocr_categories_sampled", scanned)
        self.pass_metric("thumbnail_ocr_watermark_detections", len(detections))
        if errors:
            self.add(check, "ERROR", f"OCR failed on {len(errors)} sampled thumbnail images.", examples=errors[:25])
        if detections:
            self.add(check, "ERROR", f"Detected possible supplier watermark text on {len(detections)} sampled thumbnail images.", examples=detections[:50])
        if not detections and not errors:
            self.add(check, "PASS", f"OCR sampled {scanned} category thumbnails with no Oppolia/www watermark detections.")

    def check_brand_contamination(self) -> None:
        check = "brand-contamination"
        matches: list[dict[str, Any]] = []
        files_scanned = 0
        paths: list[Path] = []
        if CLIENT_SRC_DIR.exists():
            paths.extend(p for p in CLIENT_SRC_DIR.rglob("*") if p.is_file() and p.suffix in SOURCE_EXTENSIONS)
        if PRODUCTS_JSON.exists() and PRODUCTS_JSON not in paths:
            paths.append(PRODUCTS_JSON)
        for path in sorted(set(paths)):
            files_scanned += 1
            try:
                text = path.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue
            for line_no, line in enumerate(text.splitlines(), start=1):
                lower = line.lower()
                for term in SUPPLIER_BRAND_TERMS:
                    if term in lower:
                        matches.append({
                            "file": str(path.relative_to(REPO_ROOT)),
                            "line": line_no,
                            "term": term,
                            "excerpt": line.strip()[:220],
                        })
        self.pass_metric("source_files_scanned_for_brand_terms", files_scanned)
        self.pass_metric("brand_contamination_matches", len(matches))
        if matches:
            self.add(check, "ERROR", f"Found {len(matches)} supplier-brand references in website-facing source files.", examples=matches[:50])
        else:
            self.add(check, "PASS", f"No supplier-brand references found across {files_scanned} website-facing source files.")

    def check_navigation_consistency(self) -> None:
        check = "navigation-consistency"
        nav_hrefs = [item.get("href", "") for item in self.nav_items]
        nav_slugs = [href_to_slug(href) for href in nav_hrefs]
        product_categories = Counter(str(p.get("category", "")) for p in self.products)

        missing_in_config = sorted(slug for slug in nav_slugs if slug not in self.category_slugs)
        missing_in_nav = sorted(slug for slug in self.category_slugs if slug not in nav_slugs)
        empty_categories = sorted(slug for slug in self.category_slugs if product_categories.get(slug, 0) == 0)
        duplicate_nav = sorted([href for href, count in Counter(nav_hrefs).items() if count > 1])
        configured_without_href = sorted(slug for slug, href in self.category_hrefs.items() if href and href_to_slug(href) != slug)

        self.pass_metric("product_dropdown_slugs", nav_slugs)
        self.pass_metric("category_product_counts", dict(sorted(product_categories.items())))
        if missing_in_config:
            self.add(check, "ERROR", "Products dropdown includes categories missing from categoryConfig.ts.", slugs=missing_in_config)
        if missing_in_nav:
            self.add(check, "ERROR", "categoryConfig.ts includes categories missing from the Products dropdown.", slugs=missing_in_nav)
        if empty_categories:
            self.add(check, "ERROR", "Configured categories with no products in products.json.", slugs=empty_categories)
        if duplicate_nav:
            self.add(check, "ERROR", "Duplicate hrefs found in Products dropdown.", hrefs=duplicate_nav)
        if configured_without_href:
            self.add(check, "ERROR", "Category config href values do not match their slugs.", slugs=configured_without_href)
        if not any(f.check == check and f.severity == "ERROR" for f in self.findings):
            self.add(check, "PASS", "Products dropdown categories, categoryConfig slugs, and product category coverage are aligned.")

    def check_product_data_quality(self) -> None:
        check = "product-data-quality"
        empty_titles: list[str] = []
        missing_descriptions: list[str] = []
        empty_galleries: list[str] = []
        slug_counts: Counter[str] = Counter()
        id_counts: Counter[str] = Counter()
        for idx, product in enumerate(self.products):
            title = str(product.get("title") or "").strip()
            pid = str(product.get("id") or f"index-{idx}")
            if not title:
                empty_titles.append(pid)
            if not str(product.get("description") or "").strip():
                missing_descriptions.append(title or pid)
            gallery = product.get("gallery")
            if not isinstance(gallery, list) or not gallery:
                empty_galleries.append(title or pid)
            slug_counts[slugify(title)] += 1
            id_counts[pid] += 1
        duplicate_slugs = sorted(slug for slug, count in slug_counts.items() if slug and count > 1)
        duplicate_ids = sorted(pid for pid, count in id_counts.items() if pid and count > 1)
        self.pass_metric("duplicate_title_slugs", len(duplicate_slugs))
        self.pass_metric("duplicate_product_ids", len(duplicate_ids))
        if empty_titles:
            self.add(check, "ERROR", "Products with empty titles found.", products=empty_titles[:50])
        if missing_descriptions:
            self.add(check, "ERROR", "Products with missing descriptions found.", products=missing_descriptions[:50])
        if empty_galleries:
            self.add(check, "ERROR", "Products with empty or missing gallery arrays found.", products=empty_galleries[:50])
        if duplicate_slugs:
            self.add(check, "ERROR", "Duplicate title-derived product slugs found.", slugs=duplicate_slugs[:50])
        if duplicate_ids:
            self.add(check, "ERROR", "Duplicate product IDs found.", ids=duplicate_ids[:50])
        if not any(f.check == check and f.severity == "ERROR" for f in self.findings):
            self.add(check, "PASS", "Product titles, descriptions, galleries, IDs, and title-derived slugs are clean.")

    def check_category_alignment(self) -> None:
        check = "category-alignment"
        invalid: list[dict[str, str]] = []
        for product in self.products:
            category = str(product.get("category") or "").strip()
            if category not in self.category_slugs:
                invalid.append({
                    "product": str(product.get("title") or product.get("id") or "<untitled>"),
                    "category": category,
                })
        self.pass_metric("invalid_product_categories", len(invalid))
        if invalid:
            self.add(check, "ERROR", f"Found {len(invalid)} products whose category is not present in categoryConfig.ts.", examples=invalid[:75])
        else:
            self.add(check, "PASS", "Every product category matches a valid categoryConfig slug.")

    def check_build(self) -> None:
        check = "build-verification"
        if self.skip_build:
            self.add(check, "WARN", "Build verification skipped by --skip-build.")
            return
        try:
            result = subprocess.run(
                ["pnpm", "build"],
                cwd=REPO_ROOT,
                text=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                timeout=300,
            )
        except subprocess.TimeoutExpired:
            self.add(check, "ERROR", "pnpm build timed out after 300 seconds.")
            return
        except FileNotFoundError:
            self.add(check, "ERROR", "pnpm is unavailable; cannot run production build.")
            return
        output = result.stdout or ""
        self.pass_metric("build_exit_code", result.returncode)
        self.pass_metric("build_output_tail", "\n".join(output.splitlines()[-30:]))
        if result.returncode != 0:
            self.add(check, "ERROR", "pnpm build failed.", exit_code=result.returncode, output_tail=self.metrics["build_output_tail"])
        else:
            self.add(check, "PASS", "pnpm build completed successfully.", output_tail=self.metrics["build_output_tail"])

    def report_data(self) -> dict[str, Any]:
        counts = Counter(f.severity for f in self.findings)
        return {
            "status": "FAIL" if counts.get("ERROR", 0) else "PASS",
            "summary": dict(sorted(counts.items())),
            "metrics": self.metrics,
            "findings": [
                {"check": f.check, "severity": f.severity, "message": f.message, "details": f.details}
                for f in self.findings
            ],
        }

    def print_report(self) -> None:
        data = self.report_data()
        print("\nBERCO Website QA Report")
        print("=" * 24)
        print(f"Status: {data['status']}")
        print("Summary:", ", ".join(f"{k}={v}" for k, v in data["summary"].items()) or "no findings")
        print("\nMetrics:")
        for key, value in sorted(self.metrics.items()):
            if key == "build_output_tail":
                continue
            print(f"  - {key}: {value}")
        print("\nFindings:")
        for finding in self.findings:
            print(f"[{finding.severity}] {finding.check}: {finding.message}")
            if finding.details:
                detail_text = json.dumps(finding.details, ensure_ascii=False, indent=2)
                if len(detail_text) > 5000:
                    detail_text = detail_text[:5000] + "\n... <truncated>"
                print(indent(detail_text, "    "))


def parse_category_config(path: Path) -> tuple[set[str], dict[str, str]]:
    if not path.exists():
        return set(), {}
    text = path.read_text(encoding="utf-8", errors="ignore")
    slugs = set(re.findall(r"slug\s*:\s*[\"']([^\"']+)[\"']", text))
    hrefs: dict[str, str] = {}
    # Good enough for this static config shape: object blocks containing slug and href.
    for match in re.finditer(r"([\"']?[-a-zA-Z0-9]+[\"']?)\s*:\s*\{(?P<body>.*?)(?=\n\s*[\"']?[-a-zA-Z0-9]+[\"']?\s*:\s*\{|\n\s*\};)", text, re.S):
        body = match.group("body")
        slug_match = re.search(r"slug\s*:\s*[\"']([^\"']+)[\"']", body)
        href_match = re.search(r"href\s*:\s*[\"']([^\"']+)[\"']", body)
        if slug_match:
            hrefs[slug_match.group(1)] = href_match.group(1) if href_match else ""
    return slugs, hrefs


def parse_product_nav_items(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    text = path.read_text(encoding="utf-8", errors="ignore")
    block_match = re.search(r"const\s+PRODUCT_ITEMS\s*=\s*\[(?P<body>.*?)\];", text, re.S)
    if not block_match:
        return []
    body = block_match.group("body")
    items: list[dict[str, str]] = []
    for obj in re.finditer(r"\{(?P<body>.*?)\}", body, re.S):
        item_body = obj.group("body")
        label = re.search(r"label\s*:\s*[\"']([^\"']+)[\"']", item_body)
        href = re.search(r"href\s*:\s*[\"']([^\"']+)[\"']", item_body)
        if label and href:
            items.append({"label": label.group(1), "href": href.group(1), "slug": href_to_slug(href.group(1))})
    return items


def href_to_slug(href: str) -> str:
    href = href.strip().split("?")[0].split("#")[0].strip("/")
    return href or "home"


def slugify(value: str) -> str:
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", value.lower()))


def normalize_ocr_text(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", text.lower())


def ocr_image(path: Path, tesseract_bin: str) -> str:
    assert Image is not None and ImageOps is not None and ImageFilter is not None
    with Image.open(path) as img:
        img = img.convert("RGB")
        w, h = img.size
        variants = []
        variants.append(prep_for_ocr(img))
        bottom_crop = img.crop((0, max(0, int(h * 0.72)), w, h))
        variants.append(prep_for_ocr(bottom_crop))
        all_text: list[str] = []
        with tempfile.TemporaryDirectory(prefix="berco-ocr-") as tmp:
            tmp_path = Path(tmp)
            for idx, variant in enumerate(variants):
                image_path = tmp_path / f"variant-{idx}.png"
                out_base = tmp_path / f"out-{idx}"
                variant.save(image_path)
                cmd = [tesseract_bin, str(image_path), str(out_base), "--psm", "6"]
                subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=30)
                out_txt = out_base.with_suffix(".txt")
                if out_txt.exists():
                    all_text.append(out_txt.read_text(encoding="utf-8", errors="ignore"))
        return "\n".join(all_text)


def prep_for_ocr(img: Any) -> Any:
    w, h = img.size
    scale = max(1, min(4, int(1600 / max(1, max(w, h))) + 1))
    if scale > 1:
        img = img.resize((w * scale, h * scale))
    gray = ImageOps.grayscale(img)
    gray = ImageOps.autocontrast(gray)
    gray = gray.filter(ImageFilter.SHARPEN)
    return gray


def indent(text: str, prefix: str) -> str:
    return "\n".join(prefix + line for line in text.splitlines())


def main() -> int:
    parser = argparse.ArgumentParser(description="Run comprehensive BERCO website QA checks.")
    parser.add_argument("--skip-build", action="store_true", help="Skip pnpm build verification.")
    parser.add_argument("--json", dest="json_path", help="Write a machine-readable QA report to this path.")
    parser.add_argument("--verbose", action="store_true", help="Print additional diagnostic details.")
    args = parser.parse_args()

    runner = QARunner(skip_build=args.skip_build, verbose=args.verbose)
    exit_code = runner.run()
    if args.json_path:
        out = Path(args.json_path)
        if not out.is_absolute():
            out = REPO_ROOT / out
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(json.dumps(runner.report_data(), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"\nWrote JSON report: {out}")
    return exit_code


if __name__ == "__main__":
    raise SystemExit(main())
