import { expect, test } from '@playwright/test'

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 200,00')).toBeVisible()
  await expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(2)
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  await expect(page.getByText('-5% em relação à ontem')).toBeVisible()

  await page.waitForTimeout(2)
})

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  await expect(page.getByText('-5% em relação à ontem')).toBeVisible()

  await page.waitForTimeout(2)
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('5', { exact: true })).toBeVisible()
  await expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(2)
})
