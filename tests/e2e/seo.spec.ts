import { test, expect } from '@playwright/test'

test.describe('SEO essentials', () => {
  for (const path of ['/', '/portfolio', '/about-us', '/contact']) {
    test(`${path} has title, description, canonical, og + JSON-LD`, async ({ page, baseURL }) => {
      const response = await page.goto(path)
      expect(response?.ok()).toBe(true)

      const title = await page.title()
      expect(title.length).toBeGreaterThan(20)

      const description = await page.locator('meta[name="description"]').getAttribute('content')
      expect((description || '').length).toBeGreaterThan(60)

      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
      expect(canonical).toBeTruthy()

      const og = await page.locator('meta[property="og:title"]').getAttribute('content')
      expect(og).toBeTruthy()

      const ldCount = await page.locator('script[type="application/ld+json"]').count()
      expect(ldCount).toBeGreaterThan(0)

      // sitemap + robots respond with 200
      const sitemap = await page.request.get(new URL('/sitemap.xml', baseURL).toString())
      expect(sitemap.ok()).toBe(true)
      const robots = await page.request.get(new URL('/robots.txt', baseURL).toString())
      expect(robots.ok()).toBe(true)
    })
  }
})
