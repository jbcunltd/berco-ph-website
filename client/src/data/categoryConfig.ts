import type { CategoryConfig } from "../components/layout/CategoryPage";

/**
 * Single source of truth for category page content.
 * Edit this file to update headings, intro copy, CTA copy across the site.
 */
export const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  kitchens: {
    slug: "kitchens",
    href: "/kitchens",
    eyebrow: "Kitchens",
    title: "Islands, Sculleries,",
    titleItalic: "and Galley Kitchens.",
    intro:
      "From compact condos to expansive family homes — every kitchen is drawn around how you cook, gather, and live. Walnut, oak, lacquer, stone. European hardware. Philippine craftsmanship.",
    ctaCopy:
      "Tell us about your layout, materials, and how your kitchen will be used every day.",
  },
  "kitchen-accessories": {
    slug: "kitchen-accessories",
    href: "/kitchen-accessories",
    eyebrow: "Kitchen Accessories",
    title: "Smart Storage,",
    titleItalic: "Quietly Integrated.",
    intro:
      "Premium pull-out baskets, pantry systems, corner mechanisms, drawer dividers, and under-sink organizers selected for BERCO custom kitchens. Designed to make everyday cooking cleaner, calmer, and more beautifully organized.",
    ctaCopy:
      "Tell us which cabinet zones need better storage, and BERCO will specify accessories around your kitchen layout.",
  },
  wardrobes: {
    slug: "wardrobes",
    href: "/wardrobes",
    eyebrow: "Wardrobes & Closets",
    title: "Walk-ins, Sliding Doors,",
    titleItalic: "and Built-in Dressing Rooms.",
    intro:
      "Tailored to how you live and dress. Full-height cabinetry in oak, walnut, and lacquer. Soft-close hinges. Brushed bronze hardware. Organised, quiet, and built to last.",
    ctaCopy:
      "Tell us how you store, dress, and move through your bedroom every morning.",
  },
  vanities: {
    slug: "vanities",
    href: "/vanities",
    eyebrow: "Bathroom Vanities",
    title: "Floating, Freestanding,",
    titleItalic: "and Built-in.",
    intro:
      "Stone, lacquer, and natural finishes. Honed travertine and quartzite countertops. European soft-close drawers. Bathroom cabinetry that elevates the everyday.",
    ctaCopy:
      "Tell us about your bathroom, your finishes, and the rituals that shape your morning.",
  },
  bathrooms: {
    slug: "bathrooms",
    href: "/bathrooms",
    eyebrow: "Bathrooms",
    title: "Spa-Inspired",
    titleItalic: "Bathroom Cabinetry.",
    intro:
      "Moisture-resistant boards, premium finishes, and intelligent storage — composed for the daily rituals that bathrooms hold. Quiet luxury, in the most personal room of the house.",
    ctaCopy:
      "Tell us about your bathroom layout, materials, and the feel you want every morning.",
  },
  bedrooms: {
    slug: "bedrooms",
    href: "/bedrooms",
    eyebrow: "Bedrooms",
    title: "Rest Spaces,",
    titleItalic: "Thoughtfully Composed.",
    intro:
      "From walk-in closets to bedroom wardrobes — every design balances storage, proportion, and the quiet your bedroom deserves. The Heart of Your Home begins with rest.",
    ctaCopy:
      "Tell us about your bedroom, how you sleep, and how your room should feel.",
  },
  "aluminum-doors-windows": {
    slug: "aluminum-doors-windows",
    href: "/aluminum-doors-windows",
    eyebrow: "Aluminum Doors & Windows",
    title: "Durable, Secure,",
    titleItalic: "and Aesthetically Pleasing.",
    intro: "Premium aluminum doors and windows, combining durability, security, and modern aesthetics. Designed to enhance natural light and provide superior insulation.",
    ctaCopy: "Tell us about your project and specific requirements for aluminum doors and windows.",
  },
  "complete-home-interiors": {
    slug: "complete-home-interiors",
    href: "/complete-home-interiors",
    eyebrow: "Complete Home Interiors",
    title: "Whole-Home Coordination,",
    titleItalic: "Room by Room.",
    intro:
      "Curated collections that bring cohesion across your entire home. Kitchen, bedroom, bathroom, and living spaces designed to work together. Premium materials, unified aesthetics, and Philippine craftsmanship throughout.",
    ctaCopy:
      "Tell us about your home and how you'd like every room to feel connected.",
  },
  "2026-collection": {
    slug: "2026-collection",
    href: "/2026-collection",
    eyebrow: "2026 Collection",
    title: "The Newest,",
    titleItalic: "The Most Premium.",
    intro:
      "A curated selection of BERCO's latest designs and most sought-after premium collections. Featuring the finest materials, innovative storage solutions, and contemporary aesthetics that define luxury living.",
    ctaCopy:
      "Explore the latest innovations in home cabinetry and design.",
  },
};
