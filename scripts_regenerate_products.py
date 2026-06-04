import json
import re
import os

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text) # Remove non-alphanumeric chars
    text = re.sub(r'\s+', '-', text) # Replace spaces with - 
    text = re.sub(r'-+', '-', text) # Replace multiple - with single -
    return text.strip('-')

def generate_products_from_series():
    inventory_path = "/tmp/webp_series_inventory.json"
    products_output_path = "/home/ubuntu/berco-ph-website/client/src/data/products.json"
    
    with open(inventory_path, 'r') as f:
        inventory = json.load(f)
        
    new_products = []
    product_id_counter = 1
    
    # Keywords for description generation
    description_keywords = {
        "kitchens": "A contemporary kitchen concept with a focus on modern design and functional elegance. The gallery presents one cohesive kitchen series, so the cabinetry style, palette, island planning, and storage details remain visually consistent throughout.",
        "wardrobes": "An elegant wardrobe solution designed for modern living, offering ample storage and sophisticated aesthetics. The gallery presents one cohesive wardrobe series, so the design, materials, and organizational features remain visually consistent throughout.",
        "vanities": "A luxurious bathroom vanity design, combining sleek aesthetics with practical storage solutions. The gallery presents one cohesive vanity series, so the style, finishes, and functional elements remain visually consistent throughout.",
        "tv-units": "A stylish and functional TV and living unit, perfect for contemporary entertainment spaces. The gallery presents one cohesive series, ensuring visual consistency in design and material across all images.",
        "laundry": "An efficient and modern laundry room design, optimizing space and functionality. The gallery presents one cohesive series, ensuring visual consistency in design and material across all images.",
        "doors-windows": "Premium aluminum doors and windows, combining durability, security, and modern aesthetics. The gallery presents one cohesive series, ensuring visual consistency in design and material across all images.",
        "aluminum-doors-windows": "Premium aluminum doors and windows, combining durability, security, and modern aesthetics. The gallery presents one cohesive series, ensuring visual consistency in design and material across all images.",
        "bedrooms": "A serene and stylish bedroom design, focusing on comfort and modern aesthetics. The gallery presents one cohesive series, ensuring visual consistency in design and material across all images.",
        "complete-home-interiors": "A comprehensive whole-home interior design package, offering a cohesive aesthetic across multiple living spaces. The gallery showcases a single design series, ensuring continuity in style, materials, and finishes throughout the home.",
        "2026-collection": "A curated selection from our newest and most premium 2026 collection, showcasing cutting-edge design and luxurious finishes. The gallery features a single design series, highlighting its unique aesthetic and innovative features."
    }

    # Whole home series for 'Complete Home Interiors'
    whole_home_series_keywords = ["alice", "como", "cybel", "erian", "huaqi", "lanxu", "monica", "monet", "renaut", "puffy", "minimalist-elegance"]
    
    # 2026 Collection series (based on keywords or implied newness)
    # Prioritize series with 'ob25' or '2025/2026' in filename for 2026 Collection
    collection_2026_keywords = ["monica", "monet", "renaut", "puffy", "minimalist-elegance", "ob25", "2025", "2026"]

    # Process regular categories first
    for category_folder, series_dict in inventory.items():
        if category_folder in ["complete-home-interiors", "2026-collection"]:
            continue # Handle these separately

        for series_prefix, files in series_dict.items():
            # Skip if it's a single image that is part of a whole home series, to avoid duplication
            # This is a heuristic, adjust if needed
            if len(files) == 1 and any(keyword in series_prefix for keyword in whole_home_series_keywords):
                continue

            # Derive title from series_prefix
            title = series_prefix.replace('-', ' ').replace('_', ' ').title()
            # Clean up common suffixes/codes
            title = re.sub(r'Obk\d{2}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Obw\d{2}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Obv\d{2}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Esd\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Eow\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Esr\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Cow\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Eod\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Egb\d{2}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Nc\d{5}', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Na\d{5}', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Ny\d{5}', '', title, flags=re.IGNORECASE)
            title = re.sub(r'Series', '', title, flags=re.IGNORECASE)
            title = re.sub(r'\s+', ' ', title).strip()
            
            # Add category to title for clarity
            if category_folder == "kitchens":
                title = f"{title} Kitchen"
            elif category_folder == "wardrobes":
                title = f"{title} Wardrobe"
            elif category_folder == "vanities":
                title = f"{title} Vanity"
            elif category_folder == "tv-units":
                title = f"{title} TV Unit"
            elif category_folder == "laundry":
                title = f"{title} Laundry Cabinet"
            elif category_folder == "doors-windows" or category_folder == "aluminum-doors-windows":
                title = f"{title} Aluminum Doors & Windows"
            elif category_folder == "bedrooms":
                title = f"{title} Bedroom"

            # Generate description
            description = description_keywords.get(category_folder, "A beautifully designed product with a focus on quality and modern aesthetics.")

            new_products.append({
                "id": f"p{product_id_counter}",
                "title": title,
                "category": category_folder,
                "gallery": [f"/oppolia/{category_folder}/{f}" for f in files],
                "description": description
            })
            product_id_counter += 1

    # Handle 'Complete Home Interiors' and '2026 Collection' separately
    complete_home_interiors_products = []
    collection_2026_products = []

    # Collect all series that qualify for whole home or 2026 collection
    all_series_prefixes = set()
    for category_folder, series_dict in inventory.items():
        for series_prefix in series_dict.keys():
            all_series_prefixes.add(series_prefix)

    for series_prefix in sorted(list(all_series_prefixes)):
        is_whole_home = any(keyword in series_prefix for keyword in whole_home_series_keywords)
        is_2026_collection = any(keyword in series_prefix for keyword in collection_2026_keywords)

        # Collect all images for this series across all categories
        series_all_images = []
        for category_folder, series_dict in inventory.items():
            if series_prefix in series_dict:
                series_all_images.extend([f"/oppolia/{category_folder}/{f}" for f in series_dict[series_prefix]])
        
        if not series_all_images:
            continue

        # Derive title for these special categories
        title = series_prefix.replace('-', ' ').replace('_', ' ').title()
        title = re.sub(r'Obk\d{2}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Obw\d{2}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Obv\d{2}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Esd\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Eow\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Esr\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Cow\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Eod\d{3}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Egb\d{2}[a-zA-Z0-9]+', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Nc\d{5}', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Na\d{5}', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Ny\d{5}', '', title, flags=re.IGNORECASE)
        title = re.sub(r'Series', '', title, flags=re.IGNORECASE)
        title = re.sub(r'\s+', ' ', title).strip()

        if is_whole_home and len(series_all_images) > 3: # Heuristic: require more than 3 images to be considered 'whole home'
            complete_home_interiors_products.append({
                "id": f"chi{product_id_counter}",
                "title": f"{title} Whole Home Interior",
                "category": "complete-home-interiors",
                "gallery": series_all_images,
                "description": description_keywords["complete-home-interiors"]
            })
            product_id_counter += 1
        
        if is_2026_collection:
            collection_2026_products.append({
                "id": f"c26{product_id_counter}",
                "title": f"{title} 2026 Collection",
                "category": "2026-collection",
                "gallery": series_all_images,
                "description": description_keywords["2026-collection"]
            })
            product_id_counter += 1

    # Add special categories to the main list
    new_products.extend(complete_home_interiors_products)
    new_products.extend(collection_2026_products)

    # Write to products.json
    with open(products_output_path, 'w') as f:
        json.dump(new_products, f, indent=2)
        
    print(f"Generated {len(new_products)} products in {products_output_path}")
    return new_products

if __name__ == "__main__":
    generate_products_from_series()
