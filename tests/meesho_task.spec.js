import { test } from '@playwright/test';

test('myntra_task', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.locator('[placeholder="Search for products, brands and more"]').fill('mens t shirt');
  await page.keyboard.press('Enter');

  await page.waitForSelector('.product-base');

  const products = page.locator('.product-base');
  const count = await products.count();

  console.log('Total products count:', count);

  for (let i = 0; i < count; i++) {
    const product = products.nth(i);
    const title = (await product.locator('.product-product').textContent())?.trim() ?? '';
    const price = (await product.locator('.product-discountedPrice').textContent())?.trim() ?? '';

    console.log(`${i + 1}. ${title}`);
    console.log(`   Price: ${price}`);
  }
});

//   await page.goto('https://www.myntra.com/');
//   await page.locator('[placeholder="Search for products, brands and more"]').fill('mens tshirt');
//   await page.keyboard.press('Enter');

//   await page.waitForSelector('.product-base');

//   const products = page.locator('.product-base');
//   const count = await products.count();

//   console.log('Product titles and prices:');

//   for (let i = 0; i < count; i++) {
//     const product = products.nth(i);
//     const title = (await product.locator('.product-product').textContent())?.trim() ?? '';
//     const price = (await product.locator('.product-discountedPrice').textContent())?.trim() ?? '';

//     console.log(`${i + 1}. ${title}`);
//     console.log(`   Price: ${price}`);
//   }
// });