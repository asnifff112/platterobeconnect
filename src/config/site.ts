/**
 * PLATTEROBE — Central Site Configuration
 *
 * All business information lives here.
 * Components read from this config so that updating a single value
 * (e.g. adding a menu URL) automatically surfaces the corresponding
 * button on the public landing page.
 */

export interface SiteConfig {
  /** Display name shown in the header and meta tags */
  brandName: string;

  /** Two-line brand tagline */
  tagline: string[];

  /** Hero section heading */
  heroTitle: string;

  /** Hero section body copy */
  heroDescription: string;

  /** WhatsApp deep-link (wa.me) */
  whatsappUrl: string;

  /** tel: link for phone dialer */
  phoneUrl: string;

  /** Instagram profile URL */
  instagramUrl: string;

  /** Instagram handle displayed in footer */
  instagramHandle: string;

  /** Public website URL — set to null until live */
  websiteUrl: string | null;

  /** Online menu URL — set to null until available */
  menuUrl: string | null;

  /** Google Maps / location URL — set to null until provided */
  locationUrl: string | null;

  /** Contact email — set to null until provided */
  email: string | null;
}

const siteConfig: SiteConfig = {
  brandName: "PLATTEROBE",

  tagline: ["MORE THAN A MEAL.", "A DAILY ESSENTIAL."],

  heroTitle: "NOURISH YOUR EVERYDAY.",

  heroDescription: "Freshly prepared meals,\nmade for everyday living.",

  whatsappUrl: "https://wa.me/919497716349",

  phoneUrl: "tel:+919497716349",

  instagramUrl:
    "https://www.instagram.com/platterobe.co?stkn=MWVoaWo3M3JrYXJjdQ%3D%3D&utm_source=qr",

  instagramHandle: "@platterobe.co",

  // ── Future links (hidden until a value is provided) ──────────
  websiteUrl: null,
  menuUrl: null,
  locationUrl: null,
  email: null,
};

export default siteConfig;
