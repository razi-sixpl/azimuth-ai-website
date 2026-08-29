import type { MetadataRoute } from "next";
import { JOBS } from "@/data/jobs";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/about-us/",
    "/investors/",
    "/people/",
    "/career/",
    "/contact/",
    ...JOBS.map((j) => `/${j.slug}/`),
  ];

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
