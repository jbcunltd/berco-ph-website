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
  "tv-units": {
    slug: "tv-units",
    href: "/tv-units",
    eyebrow: "TV & Living Cabinets",
    title: "Media Walls &",
    titleItalic: "Living Compositions.",
    intro:
      "TV units, bar cabinets, and media storage that anchor the living room — composed with restraint, finished to last, and quiet about the technology they hold.",
    ctaCopy:
      "Tell us about your living room, the technology you hold, and how the room should feel at rest.",
  },
  laundry: {
    slug: "laundry",
    href: "/laundry",
    eyebrow: "Laundry Rooms",
    title: "Utility Spaces,",
    titleItalic: "Quietly Organised.",
    intro:
      "Laundry storage drawn with the same care as the rest of the house — durable finishes, intelligent layout, and a room that finally feels intentional.",
    ctaCopy:
      "Tell us about your laundry space — how you wash, dry, and store every day.",
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
};
