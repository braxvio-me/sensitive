import { MetadataRoute } from "next";
import { getPublishedVentures } from "@/content/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://braxvio.com";
  const publishedVentures = getPublishedVentures();
  const buildDate = "2026-10-17T00:00:00.000Z";

  const ventureEntries: MetadataRoute.Sitemap = publishedVentures.map((venture) => ({
    url: `${baseUrl}/ventures/${venture.slug}`,
    lastModified: `${venture.lastReviewedAt}T00:00:00.000Z`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ventures`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partnerships`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/philosophy`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: buildDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: buildDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticRoutes, ...ventureEntries];
}
