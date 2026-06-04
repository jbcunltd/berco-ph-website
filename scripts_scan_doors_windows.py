import os
import pytesseract
from PIL import Image, ImageOps, ImageFilter

def check_watermark(image_path):
    try:
        img = Image.open(image_path)
        width, height = img.size
        
        # Define corner regions to check (top-right and bottom-right are most common)
        # Check roughly 15% of the image from each corner
        crop_w = int(width * 0.25)
        crop_h = int(height * 0.15)
        
        corners = [
            (width - crop_w, 0, width, crop_h), # top-right
            (width - crop_w, height - crop_h, width, height) # bottom-right
        ]
        
        for i, box in enumerate(corners):
            crop = img.crop(box)
            
            # Preprocess for better OCR: grayscale, invert (for white text on dark), threshold
            gray = ImageOps.grayscale(crop)
            
            # Try normal and inverted
            variants = [gray, ImageOps.invert(gray)]
            
            for variant in variants:
                # Apply threshold
                thresh = variant.point(lambda p: 255 if p > 128 else 0)
                text = pytesseract.image_to_string(thresh).lower()
                
                if "oppolia" in text or "www." in text or ".com" in text:
                    return True, text.strip()
                    
        return False, ""
    except Exception as e:
        print(f"Error scanning {image_path}: {e}")
        return False, ""

dir_path = "/home/ubuntu/berco-ph-website/client/public/oppolia/doors-windows/"
files = [f for f in os.listdir(dir_path) if f.endswith(".webp")]

print(f"Scanning {len(files)} images for watermarks...")
for f in files:
    path = os.path.join(dir_path, f)
    is_watermarked, text = check_watermark(path)
    if is_watermarked:
        print(f"WATERMARK DETECTED in {f}: '{text}'")
    else:
        print(f"Clean: {f}")
