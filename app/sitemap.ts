import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: siteConfig.url, priority: 1 }, ...projects.map(project => ({ url: `${siteConfig.url}/projects/${project.slug}/`, priority: 0.8 }))]; }
