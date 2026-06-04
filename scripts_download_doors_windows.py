import requests
import os
import re

# List of target images from the Oppolia Aluminum Doors & Windows page
# Prioritizing .webp where possible, otherwise downloading high-quality versions
# I will use the product names as prefixes to maintain the series-based naming convention

targets = [
    {
        "url": "https://www.oppoliahome.com/wp-content/uploads/2025/08/corner-sliding-aluminium-windows.webp",
        "prefix": "aluminum-corner-sliding-windows-premium"
    },
    {
        "url": "https://www.oppoliahome.com/wp-content/uploads/2022/09/custom-grey-casement-window-eow100b-1.jpg",
        "prefix": "aluminum-casement-window-eow100b"
    },
    {
        "url": "https://www.oppoliahome.com/wp-content/uploads/2022/09/sunroom-for-all-seasons-esr130n.jpg",
        "prefix": "aluminum-sunroom-all-seasons-esr130n"
    },
    {
        "url": "https://www.oppoliahome.com/wp-content/uploads/2022/09/aluminium-double-glazed-sliding-doors-esd175m-1.jpg",
        "prefix": "aluminum-double-glazed-sliding-door-esd175m"
    },
    {
        "url": "https://www.oppoliahome.com/wp-content/uploads/2022/08/aluminium-flush-casement-window-cow88d.jpg",
        "prefix": "aluminum-flush-casement-window-cow88d"
    },
    {
        "url": "https://www.oppoliahome.com/wp-content/uploads/2022/08/exterior-sliding-glass-door-esd185a-1.jpg",
        "prefix": "aluminum-exterior-sliding-glass-door-esd185a"
    },
    {
        "url": "https://www.oppoliahome.com/wp-content/uploads/2022/08/slim-patio-doors-with-screens-esd175l-1.jpg",
        "prefix": "aluminum-slim-patio-door-esd175l"
    },
    {
        "url": "https://www.oppoliahome.com/wp-content/uploads/2021/02/broken-bridge-sliding-window-nc19050-2-1-1.jpg",
        "prefix": "aluminum-black-frame-sliding-door-nc19050"
    }
]

save_dir = "/home/ubuntu/berco-ph-website/client/public/oppolia/doors-windows/"

def download_and_convert(url, prefix):
    try:
        response = requests.get(url, stream=True, timeout=30)
        if response.status_code == 200:
            # We want to save as .webp
            filename = f"{prefix}-01.webp"
            save_path = os.path.join(save_dir, filename)
            
            # If it's already webp, just save it
            if url.endswith(".webp"):
                with open(save_path, 'wb') as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        f.write(chunk)
                print(f"Downloaded: {filename}")
            else:
                # Download temporary file
                temp_path = os.path.join(save_dir, "temp_img")
                with open(temp_path, 'wb') as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        f.write(chunk)
                
                # Convert to webp using PIL
                from PIL import Image
                img = Image.open(temp_path)
                img.save(save_path, "WEBP", quality=90)
                os.remove(temp_path)
                print(f"Downloaded and converted: {filename}")
        else:
            print(f"Failed to download {url}: {response.status_code}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

for target in targets:
    download_and_convert(target["url"], target["prefix"])
