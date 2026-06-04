import json
import os
import re

def validate_products():
    products_path = "/home/ubuntu/berco-ph-website/client/src/data/products.json"
    base_image_path = "/home/ubuntu/berco-ph-website/client/public/oppolia/"

    with open(products_path, 'r') as f:
        products = json.load(f)

    print("Starting product validation...")
    errors = []

    for product in products:
        product_id = product.get('id', 'N/A')
        title = product.get('title', 'N/A')
        category = product.get('category', 'N/A')
        gallery = product.get('gallery', [])

        if not gallery:
            errors.append(f"Product {product_id} ({title}): No images in gallery.")
            continue

        # Check if all image paths exist and are .webp
        for img_path in gallery:
            full_img_path = os.path.join(base_image_path, img_path.replace('/oppolia/', ''))
            if not os.path.exists(full_img_path):
                errors.append(f"Product {product_id} ({title}): Image path does not exist: {img_path}")
            if not img_path.endswith('.webp'):
                errors.append(f"Product {product_id} ({title}): Image is not .webp: {img_path}")

        # Check for single series consistency (by filename prefix)
        if len(gallery) > 0:
            first_image_filename = os.path.basename(gallery[0])
            match = re.match(r"(.+?)-\d+\.webp$", first_image_filename)
            if match:
                expected_prefix = match.group(1)
                for img_path in gallery:
                    current_filename = os.path.basename(img_path)
                    current_match = re.match(r"(.+?)-\d+\.webp$", current_filename)
                    if not current_match or current_match.group(1) != expected_prefix:
                        errors.append(f"Product {product_id} ({title}): Gallery contains mixed series. Expected prefix: {expected_prefix}, found: {current_match.group(1) if current_match else current_filename}")
                        break
            else:
                errors.append(f"Product {product_id} ({title}): Could not determine series prefix for {first_image_filename}")

        # Check title-to-filename consistency (basic keyword check)
        # Extract meaningful words from the first image's filename (excluding numbers and extensions)
        if len(gallery) > 0:
            first_image_filename_base = os.path.basename(gallery[0]).replace('.webp', '')
            filename_words = set(re.findall(r'[a-zA-Z]+', first_image_filename_base.lower()))
            title_words = set(re.findall(r'[a-zA-Z]+', title.lower()))
            
            # Check for significant overlap or key terms
            common_words = filename_words.intersection(title_words)
            if not common_words and len(filename_words) > 2:
                errors.append(f"Product {product_id} ({title}): Title does not seem to match filename keywords. Filename words: {filename_words}, Title words: {title_words}")

    if errors:
        print("Validation completed with errors:")
        for error in errors:
            print(f"- {error}")
        return False
    else:
        print("Validation completed successfully: All products are consistent.")
        return True

if __name__ == "__main__":
    validate_products()
