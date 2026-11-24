/** Public-facing PNW Rhinos club information. Add contact and match details when confirmed. */
export const SITE = {
  name: "PNW Rhinos",
  shortName: "PNW",
  tagline: "Cricket in the Pacific Northwest",
  description: "PNW Rhinos is a cricket team bringing people together through the game in the Pacific Northwest.",
  url: "https://example.com",
  lang: "en",
  locale: "en_US",
  areaServed: "Pacific Northwest",
  social: [] as { label: string; href: string }[],
  theme: { accent: "#f4b942", accentText: "#17130b" },
  formgong: {
    accessKey: "fk_your_access_key",
    endpoint: "https://formgong.com/submit",
    subject: "Message for PNW Rhinos",
  },
  nav: [
    { label: "About", href: "/about/" },
    { label: "History", href: "/about/#history" },
    { label: "Members", href: "/about/#members" },
    { label: "Contact", href: "/contact/" },
  ],
  cta: { label: "Get in touch", href: "/contact/#enquiry" },
} as const;
