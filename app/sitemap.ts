import type { MetadataRoute } from "next";
import { primaryServices } from "@/components/home/home-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://niyyahlabs.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://niyyahlabs.dev/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://niyyahlabs.dev/work",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...primaryServices.map((service) => ({
      url: `https://niyyahlabs.dev/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
