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
