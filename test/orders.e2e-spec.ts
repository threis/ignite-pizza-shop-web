import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(page.getByRole('cell', { name: 'customer-0' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'customer-9' })).toBeVisible()

  await page.waitForTimeout(2)
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()
  await expect(page.getByRole('cell', { name: 'customer-10' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'customer-19' })).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()
  await expect(page.getByRole('cell', { name: 'customer-50' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'customer-59' })).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()
  await expect(page.getByRole('cell', { name: 'customer-40' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'customer-49' })).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()
  await expect(page.getByRole('cell', { name: 'customer-0' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'customer-9' })).toBeVisible()

  await page.waitForTimeout(2)
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()

  await page.waitForTimeout(2)
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('customer-11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'customer-11' })).toBeVisible()

  await page.waitForTimeout(2)
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()

  await page.getByLabel('Pendente').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10)

  await page.waitForTimeout(2)
})
