import type { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Runs fresh on each request so newly added politicians/pledges show up
// in search engines without waiting for a redeploy.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const politicians = await prisma.politician.findMany({
    select: { id: true, updatedAt: true },
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const politicianRoutes: MetadataRoute.Sitemap = politicians.map((p) => ({
    url: `${siteUrl}/politician/${p.id}`,
    lastModified: p.updatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...politicianRoutes];
}
