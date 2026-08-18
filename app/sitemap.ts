import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://make-mydutch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/terms"];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.5,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${BASE_URL}${l === routing.defaultLocale ? "" : `/${l}`}${page}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
