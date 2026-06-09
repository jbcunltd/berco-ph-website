# Aluminum Doors & Windows Scrape Summary

The scraper collected metadata for all 20 Oppolia Aluminum Doors & Windows products from the discovered product URLs. The structured output is saved at `tmp_oppolia_aluminum/scraped_products.json`, and cached product HTML files are saved under `tmp_oppolia_aluminum/html/`.

| Metric | Result |
|---|---:|
| Products scraped | 20 |
| Source image URL references collected | 45 |
| Products with at least one source image URL | 20 |
| Product title cleaning applied | Yes, trailing product codes removed in scraped metadata |
| Text localization applied | Yes, OPPOLIA/Oppolia mentions normalized to BERCO in scraped description text |

Next phase is image download, bottom-strip and full-image watermark/label cleanup, WebP conversion, and verification before saving to `client/public/berco/aluminum-doors-windows/`.
