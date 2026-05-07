import type { MetadataRoute } from 'next'
import { business } from '@/lib/business'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url
  const now = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]
  return staticRoutes
}
