# BERCO PH — Jim's 15-Rule Design System (Round 4)

## 1. Design tokens (index.css)
- [ ] Colors: paper #FAF8F3, ivory #F7F3EA, warm #EFE7DA, ink #1F1D1A, body #4A4640, mute #7A7368, champagne #B79A6B, line #DDD5C8
- [ ] Container widths: 1200 (content), 720 (editorial), 1440 (wide)
- [ ] Section padding scale: 56/72/96/120
- [ ] Typography clamps: hero, h2, body, eyebrow
- [ ] Letter-spacing utility: replace tracking-widest2 (0.32em) with new tracking-label (0.14em) where appropriate
- [ ] Motion utility: `.reveal` with proper completion; explicit final state on `.is-visible`
- [ ] Image utility: opacity 1, warm dark overlay 12%, hover scale 1.03 / 700ms

## 2. Watermark
- [ ] Crop bottom 14% off every product image
- [ ] Safety gradient over bottom 6% as backup

## 3. Home rewrite (section order)
- [ ] 1) Hero  2) Brand intro  3) Explore by Space  4) Why Berco  5) Design Studies  6) Materials & Craftsmanship  7) Design Process  8) Architects teaser  9) Consultation CTA
- [ ] Each section: label → heading → 2-line paragraph → content

## 4. Header / nav
- [ ] 12-13px, letter-spacing 0.10em
- [ ] Book Consultation primary CTA
- [ ] Active state visible

## 5. Category pages
- [ ] Apply new section header structure
- [ ] 3-col desktop, 2-col tablet, 1-col mobile
- [ ] Card image height 380–460 desktop

## 6. Contact form
- [ ] Fields: Name, Mobile, Project location, Space type, Timeline, Upload, Message
- [ ] Button: "Send Project Inquiry"
- [ ] Success: "Thank you. Our team will review your inquiry…"

## 7. Motion
- [ ] Opacity 0 → 1, translateY 16px, 0.7s, stagger 0.10s
- [ ] Force final state: `.is-visible { opacity: 1; transform: none; }`
- [ ] All elements visible if JS disabled (graceful degradation)

## 8. QA (must pass before push)
- [ ] Desktop screenshot — categories crisp, no faded text
- [ ] Mobile screenshot — hero readable, cards 1-col, no overflow
- [ ] All nav links: 200 on prod
- [ ] Watermark inspection: zero visible
- [ ] Scroll-trigger animation completes (no stuck mid-fade)
- [ ] Build succeeds

## 9. Ship
- [ ] git push origin main
- [ ] Wait for Vercel READY
- [ ] curl-test all routes
- [ ] Visual check live


---

## Round Final — Jim's 10 Polish Refinements (8/10 → target 9.5/10)

- [ ] 1. Hero image warmer (reduce gray overlay, slight saturation lift via filter)
- [ ] 2. Desktop hero text vertically centered, tighter CTA gap
- [ ] 3. Mobile hero image closer to CTAs (less separation)
- [ ] 4. Collections cards: consistent image heights 360-400px, aligned titles/desc
- [ ] 5. Letter-spacing tightened on labels (0.10em max), nav, button text
- [ ] 6. Sticky mobile CTA bottom padding on all pages (Explore, form buttons, footer)
- [ ] 7. Studio copy update with practical second sentence
- [ ] 8. Desktop collections card heights reduced (360-400px)
- [ ] 9. Footer/contact: remove unconfirmed socials (Houzz/Pinterest), mark placeholders
- [ ] 10. Logo confirmed BERCO (no change)


---

## Round Final-2 — Desktop Hierarchy & Breathing Room

- [ ] Hero: 45/55 split, min-h 720px, padding 96-120px vertical
- [ ] Hero headline 58-64px desktop (down from lg:text-6xl)
- [ ] CTA height ~56px, gap 16-20px, primary stronger / secondary lighter
- [ ] Studio section: top padding 120-160px (breathing pause)
- [ ] Major sections: 120-160px py, medium: 96-120px
- [ ] Collections gap 40-48px desktop, card image 340-380px
- [ ] No 3 ideas above the fold; hero is one focal point
- [ ] Playwright: wait for all images loaded before screenshot


---

## Round Final-3 — Launch Cleanup Pass

- [ ] Audit and localize all displayed images (Home + categories + Design Studies)
- [ ] Curate Kitchens to 6-9 cards with clean names + "Kitchen Design Direction" subtext
- [ ] Curate Wardrobes to 6-9 cards with clean names + "Wardrobe Design Direction" subtext
- [ ] Curate Vanities to 6-9 cards with clean names + "Vanity Design Direction" subtext
- [ ] Why BERCO: 140-160px top padding, two-row layout, shorten copy, smaller numerals, bg shift
- [ ] Process: remove "10-year warranty", "20+ years"; safer wording
- [ ] Trade: more breathing room, dark section readable
- [ ] Contact: TODO markers for placeholders, real email pattern, by-appointment note
- [ ] Footer: remove unconfirmed Instagram, dead privacy/terms links
- [ ] Desktop spacing: 140px sections, 72px header gap, 80px row gap, 620px text max-width
- [ ] Capture 7 full-page screenshots at 1440px with images loaded


---

## Round Oppolia — Bulk Image Library Download

- [ ] Crawl kitchen-cabinets index pages (paginated)
- [ ] Crawl wardrobe index pages (paginated)
- [ ] Crawl bathroom-vanities index pages (paginated)
- [ ] Crawl whole-house-solution index pages (paginated)
- [ ] Crawl interior-doors index pages (paginated)
- [ ] Build master list of product detail URLs
- [ ] Scrape each product page for gallery images and product name
- [ ] Download images into client/public/oppolia/{kitchens,wardrobes,vanities,bathrooms,bedrooms,tv-units,laundry,other}/
- [ ] Report counts per category
- [ ] Curate 8 best per category, update products.json
- [ ] Build + commit + push to GitHub
- [ ] Verify Vercel deploy
