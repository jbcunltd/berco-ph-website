import os
from PIL import Image

targets = [
    "aluminum-casement-window-eow100b-01.webp",
    "aluminum-sunroom-all-seasons-esr130n-01.webp",
    "aluminum-double-glazed-sliding-door-esd175m-01.webp",
    "aluminum-exterior-sliding-glass-door-esd185a-01.webp",
    "aluminum-slim-patio-door-esd175l-01.webp"
]

dir_path = "/home/ubuntu/berco-ph-website/client/public/oppolia/doors-windows/"

for filename in targets:
    path = os.path.join(dir_path, filename)
    try:
        img = Image.open(path)
        width, height = img.size
        # Crop the bottom 8% where the watermark is located
        crop_height = int(height * 0.92)
        cropped_img = img.crop((0, 0, width, crop_height))
        cropped_img.save(path, "WEBP", quality=95)
        print(f"Cropped and cleaned: {filename}")
    except Exception as e:
        print(f"Error cropping {filename}: {e}")
