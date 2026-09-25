import { test, expect } from '@playwright/test';

test('Get first product details from Myntra', async ({ page }) => {

  await page.goto('https://www.myntra.com');

  // Search Men's T-Shirt
  await page.getByPlaceholder('Search for products, brands and more')
    .fill('Men T Shirt');

  await page.keyboard.press('Enter');
await page.waitForTimeout(2000);
 // await page.waitForLoadState('networkidle');

  // First product card
  const product = page.locator('li.product-base').first();

  // Product details
  const brand = await product.locator('h3.product-brand').textContent();
  const title = await product.locator('h4.product-product').textContent();
  const price = await product.locator('span.product-discountedPrice').textContent();
  const originalPrice = await product.locator('span.product-strike').textContent();
  const discount = await product.locator('span.product-discountPercentage').textContent();

  console.log("Brand :", brand);
  console.log("Title :", title);
  console.log("Price :", price);
  console.log("Original Price :", originalPrice);
  console.log("Discount :", discount);
});