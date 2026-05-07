import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test('rejects invalid input', async ({ page }) => {
    await page.goto('/contact')
    await page.getByRole('button', { name: /request my free estimate/i }).click()
    await expect(page.getByText(/please enter your full name/i)).toBeVisible()
  })

  test('happy path submits and shows confirmation', async ({ page }) => {
    // Mock the API so this test passes without configured email infra
    await page.route('**/api/lead', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) })
    })

    await page.goto('/contact')

    await page.getByLabel(/full name/i).fill('Jane Architect')
    await page.getByLabel(/^phone$/i).fill('(416) 555-0101')
    await page.getByLabel(/^email$/i).fill('jane@example.com')
    await page.getByLabel(/project address/i).fill('200 Bay St, Toronto')
    await page.getByLabel(/service type/i).selectOption('Residential')
    await page.getByRole('checkbox').check()

    await page.getByRole('button', { name: /request my free estimate/i }).click()
    await expect(page.getByRole('heading', { name: /we’ll be in touch/i })).toBeVisible()
  })
})
