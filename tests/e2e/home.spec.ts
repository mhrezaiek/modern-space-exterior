import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('renders hero, services, and CTA — and contains structured data', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Exteriors/i)
    await expect(page.getByRole('link', { name: /free estimate/i }).first()).toBeVisible()

    // Services rendered
    await expect(page.locator('#services')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'ACM Panel Installation' })).toBeVisible()

    // FAQ + JSON-LD presence
    const ld = await page.locator('script[type="application/ld+json"]').count()
    expect(ld).toBeGreaterThanOrEqual(3)

    // No 404s on key resources
    const failed: string[] = []
    page.on('response', (r) => {
      if (r.status() >= 400 && new URL(r.url()).hostname.includes('localhost')) {
        failed.push(`${r.status()} ${r.url()}`)
      }
    })
    await page.waitForLoadState('networkidle')
    expect(failed).toEqual([])
  })

  test('has accessible primary navigation and skip-link', async ({ page }) => {
    await page.goto('/')
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: /skip to content/i })).toBeFocused()
  })
})
