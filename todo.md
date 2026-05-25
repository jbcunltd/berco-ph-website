# BERCO PH Rebuild — Oppolia Source

## Phase 1: Discover Oppolia site structure
- [ ] Fetch sitemap and identify category URLs
- [ ] Verify all 7 categories exist (Kitchens, Bedrooms, Wardrobes, Bathrooms, Vanities, TV Units, Laundry)
- [ ] Document URL patterns for products and categories

## Phase 2: Scrape product listings
- [ ] Pull all product URLs in each of the 7 categories
- [ ] Save URL list grouped by category

## Phase 3: Deep-scrape product detail pages (parallel)
- [ ] Extract title, description, gallery images, features, materials per product
- [ ] Save normalized JSON

## Phase 4: Filter & curate
- [ ] Inspect images for Oppolia branding/watermarks; reject any branded images
- [ ] Curate 15-20 best-looking products per category

## Phase 5: Rewrite copy in BERCO's voice
- [ ] Strip Oppolia / China / factory references
- [ ] Rewrite titles for BERCO brand
- [ ] Rewrite descriptions for quiet luxury tone
- [ ] Generate alt text + SEO metadata per product

## Phase 6: Update site routes
- [ ] Add Bedrooms, Bathrooms, TV Units, Laundry routes
- [ ] Update navigation in Header and Footer
- [ ] Update home page category grid to 7 categories

## Phase 7: Product detail pages
- [ ] Build ProductDetail.tsx with hero, gallery, description, materials, features, related products
- [ ] Wire category page cards to link to /:category/:slug
- [ ] CTA: "Inquire About This Design" / "Book a Consultation"

## Phase 8: Craftsmanship & Technology section
- [ ] Add new section to Process page covering soft-close, board tech, anti-termite, edge-banding, CNC, finishes, modular assembly

## Phase 9: Polish & test
- [ ] Verify all images load (no broken / no branded)
- [ ] Test desktop + mobile viewports
- [ ] Verify navigation flow end-to-end

## Phase 10: Deliver
- [ ] Provide final preview URL and summary
