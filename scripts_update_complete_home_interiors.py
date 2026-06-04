
import json
from collections import defaultdict

# Load products.json
with open('./client/src/data/products.json', 'r') as f:
    products = json.load(f)

# Group products by series (from title) and category
series_categories = defaultdict(set)
series_products = defaultdict(list)

for product in products:
    # Extract series name from title (simplified for now, will refine)
    # Assuming series name is the first word or a distinct prefix
    title_parts = product['title'].split(' ')
    series_name = title_parts[0].lower()

    # Heuristic to get a better series name, looking for common prefixes
    if 'alice' in product['title'].lower():
        series_name = 'alice'
    elif 'como' in product['title'].lower():
        series_name = 'como'
    elif 'cybel' in product['title'].lower():
        series_name = 'cybel'
    elif 'erian' in product['title'].lower():
        series_name = 'erian'
    elif 'huaqi' in product['title'].lower():
        series_name = 'huaqi'
    elif 'lanxu' in product['title'].lower():
        series_name = 'lanxu'
    elif 'monica' in product['title'].lower():
        series_name = 'monica'
    elif 'monet' in product['title'].lower():
        series_name = 'monet'
    elif 'renaut' in product['title'].lower():
        series_name = 'renaut'
    elif 'puffy' in product['title'].lower():
        series_name = 'puffy'
    elif 'milight' in product['title'].lower():
        series_name = 'milight'
    elif 'mino' in product['title'].lower():
        series_name = 'mino'
    elif 'souffle' in product['title'].lower():
        series_name = 'souffle'
    elif 'patti' in product['title'].lower():
        series_name = 'patti'
    elif 'moqi' in product['title'].lower():
        series_name = 'moqi'
    elif 'minimalist-elegance' in product['title'].lower():
        series_name = 'minimalist-elegance'
    else:
        # Fallback for other series, try to extract a more meaningful prefix
        if '-' in product['title']:
            series_name = product['title'].split('-')[0].lower()
        else:
            series_name = title_parts[0].lower()

    series_categories[series_name].add(product['category'])
    series_products[series_name].append(product)

# Identify multi-category series
multi_category_series = {s: list(cats) for s, cats in series_categories.items() if len(cats) > 1}

# Filter out 'aluminum-doors-windows' from multi-category series for Complete Home Interiors
# as it's not typically part of the 'interior' design packages
multi_category_series_filtered = {}
for series, categories in multi_category_series.items():
    if 'aluminum-doors-windows' not in categories:
        multi_category_series_filtered[series] = categories

print("Multi-category series (excluding Aluminum Doors & Windows):")
for series, categories in multi_category_series_filtered.items():
    print(f"  {series}: {categories}")

# Select some hero images and package images from these series
# This is a heuristic selection, ideally would be more curated
hero_images = []
packages = []

selected_series_for_chi = list(multi_category_series_filtered.keys())[:3] # Take top 3 for packages

for series_name in selected_series_for_chi:
    # Try to find a product from a 'whole-home' like category first, then any other
    representative_product = None
    for p in series_products[series_name]:
        if 'whole-home' in p['title'].lower() or 'whole house' in p['title'].lower():
            representative_product = p
            break
    if not representative_product:
        # If no explicit whole-home product, just take the first product in the series
        representative_product = series_products[series_name][0]

    if representative_product and representative_product['gallery']:
        # For hero images, try to get one from kitchen, one from living, one from bedroom if available
        # For simplicity, just pick first few from the representative product's gallery
        if len(hero_images) < 3:
            hero_images.extend(representative_product['gallery'][:3 - len(hero_images)])

        # For packages, pick one image and create a placeholder package entry
        packages.append({
            "title": f"{series_name.replace('-', ' ').title()} Whole Home Package",
            "copy": f"A coordinated design language for your home, featuring the {series_name.replace('-', ' ').title()} series across multiple spaces.",
            "image": representative_product['gallery'][0] # Use the first image as package image
        })

# Ensure hero_images has at least 3 images, fill with others if needed
if len(hero_images) < 3:
    for series_name in multi_category_series_filtered.keys():
        if len(hero_images) >= 3: break
        for p in series_products[series_name]:
            if p['gallery']:
                hero_images.extend(p['gallery'][:3 - len(hero_images)])
                break

print("\nGenerated HERO_IMAGES:")
for img in hero_images:
    print(f"  {img}")

print("\nGenerated PACKAGES:")
for pkg in packages:
    print(f"  Title: {pkg['title']}, Image: {pkg['image']}")

# Now, let's prepare the data for Collection2026.tsx
# Identify newest series (e.g., 'ob25', '2025', '2026' in title)
newest_series_products = []
for product in products:
    if 'ob25' in product['title'].lower() or '2025' in product['title'].lower() or '2026' in product['title'].lower():
        newest_series_products.append(product)

# Group newest products by series
newest_series_grouped = defaultdict(list)
for product in newest_series_products:
    title_parts = product['title'].split(' ')
    series_name = title_parts[0].lower()
    if 'alice' in product['title'].lower():
        series_name = 'alice'
    elif 'como' in product['title'].lower():
        series_name = 'como'
    elif 'cybel' in product['title'].lower():
        series_name = 'cybel'
    elif 'erian' in product['title'].lower():
        series_name = 'erian'
    elif 'huaqi' in product['title'].lower():
        series_name = 'huaqi'
    elif 'lanxu' in product['title'].lower():
        series_name = 'lanxu'
    elif 'monica' in product['title'].lower():
        series_name = 'monica'
    elif 'monet' in product['title'].lower():
        series_name = 'monet'
    elif 'renaut' in product['title'].lower():
        series_name = 'renaut'
    elif 'puffy' in product['title'].lower():
        series_name = 'puffy'
    elif 'milight' in product['title'].lower():
        series_name = 'milight'
    elif 'mino' in product['title'].lower():
        series_name = 'mino'
    elif 'souffle' in product['title'].lower():
        series_name = 'souffle'
    elif 'patti' in product['title'].lower():
        series_name = 'patti'
    elif 'moqi' in product['title'].lower():
        series_name = 'moqi'
    elif 'minimalist-elegance' in product['title'].lower():
        series_name = 'minimalist-elegance'
    else:
        if '-' in product['title']:
            series_name = product['title'].split('-')[0].lower()
        else:
            series_name = title_parts[0].lower()
    newest_series_grouped[series_name].append(product)

lookbook_items = []
featured_images = []

# Select up to 6 unique series for the lookbook
selected_newest_series = list(newest_series_grouped.keys())[:6]

for series_name in selected_newest_series:
    # Find a representative product for the series, preferably with a good image
    representative_product = None
    for p in newest_series_grouped[series_name]:
        if p['gallery']:
            representative_product = p
            break
    
    if representative_product:
        lookbook_items.append({
            "name": series_name.replace('-', ' ').title(),
            "mood": f"Discover the latest trends in {series_name.replace('-', ' ').title()} design.", # Placeholder mood
            "image": representative_product['gallery'][0]
        })
        if len(featured_images) < 4:
            featured_images.extend(representative_product['gallery'][:4 - len(featured_images)])

# Ensure featured_images has at least 4 images, fill with others if needed
if len(featured_images) < 4:
    for series_name in newest_series_grouped.keys():
        if len(featured_images) >= 4: break
        for p in newest_series_grouped[series_name]:
            if p['gallery']:
                featured_images.extend(p['gallery'][:4 - len(featured_images)])
                break

print("\nGenerated LOOKBOOK items:")
for item in lookbook_items:
    print(f"  Name: {item['name']}, Image: {item['image']}")

print("\nGenerated FEATURED images:")
for img in featured_images:
    print(f"  {img}")
