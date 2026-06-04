import os
import re
from collections import defaultdict

def inventory_webp_series():
    """Inventory all .webp files grouped by series prefix."""
    
    base_path = "/home/ubuntu/berco-ph-website/client/public/oppolia/"
    series_by_category = defaultdict(lambda: defaultdict(list))
    
    # Scan all subdirectories
    for category_folder in os.listdir(base_path):
        category_path = os.path.join(base_path, category_folder)
        if not os.path.isdir(category_path):
            continue
        
        # Collect all .webp files
        webp_files = [f for f in os.listdir(category_path) if f.endswith(".webp")]
        
        if not webp_files:
            continue
        
        # Group by series prefix (everything before the last -NN.webp pattern)
        series_map = defaultdict(list)
        for filename in webp_files:
            # Match pattern: anything-NN.webp where NN is digits
            match = re.match(r"(.+?)-(\d+)\.webp$", filename)
            if match:
                prefix = match.group(1)
                series_map[prefix].append(filename)
        
        # Store organized by category and series
        for prefix in sorted(series_map.keys()):
            files = sorted(series_map[prefix])
            series_by_category[category_folder][prefix] = files
    
    return series_by_category

def print_inventory(series_by_category):
    """Print the inventory in a readable format."""
    
    print("=" * 100)
    print("WEBP IMAGE SERIES INVENTORY")
    print("=" * 100)
    
    for category in sorted(series_by_category.keys()):
        print(f"\n[{category.upper()}]")
        print("-" * 100)
        
        series_dict = series_by_category[category]
        for series_prefix in sorted(series_dict.keys()):
            files = series_dict[series_prefix]
            print(f"  Series: {series_prefix}")
            print(f"    Count: {len(files)}")
            print(f"    Files: {', '.join([f.replace('.webp', '') for f in files[:3]])}", end="")
            if len(files) > 3:
                print(f", ... (+{len(files) - 3} more)")
            else:
                print()
    
    print("\n" + "=" * 100)

def save_inventory_json(series_by_category):
    """Save inventory as JSON for programmatic use."""
    import json
    
    # Convert to JSON-serializable format
    json_data = {}
    for category, series_dict in series_by_category.items():
        json_data[category] = {}
        for prefix, files in series_dict.items():
            json_data[category][prefix] = files
    
    output_path = "/tmp/webp_series_inventory.json"
    with open(output_path, 'w') as f:
        json.dump(json_data, f, indent=2)
    
    print(f"Inventory saved to: {output_path}")
    return output_path

if __name__ == "__main__":
    series_by_category = inventory_webp_series()
    print_inventory(series_by_category)
    save_inventory_json(series_by_category)
