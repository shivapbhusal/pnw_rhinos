import { SITE } from "../config";

/**
 * SportsTeam details for PNW Rhinos, using confirmed club information only.
 */
export function businessJsonLd(site: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "@id": new URL("/#team", site).href,
    name: SITE.name,
    description: SITE.description,
    url: new URL("/", site).href,
    sport: "Cricket",
    image: new URL("/og.jpg", site).href,
    logo: new URL("/logo.jpg", site).href,
    areaServed: SITE.areaServed,
    sameAs: SITE.social.map((s) => s.href),
  };
}

/** JSON for a <script type="application/ld+json">, safe against "</script>" in config strings. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
