import type { MetadataRoute } from 'next'
import { SEO_URL } from '@/shared/constants/seo.constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SEO_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }]
}
