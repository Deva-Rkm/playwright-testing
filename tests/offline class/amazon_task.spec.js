// // import {test} from '@playwright/test'

// // test ('amazon', async({ page })=> {

// // await page.goto('https://www.amazon.in');

// // await page.getByRole("searchbox").fill('iphone 17');

// // await page.locator('div[aria-label="iphone 17 pro"]').click();

// // const product = page.locator('//div[@role="listitem" and .//div[@data-cy="title-recipe" and contains(., "iPhone 17")] and .//div[@data-cy="reviews-block" and contains(., "4.6")]]').first().click();

// // const count = await product.count();
// // console.log('Product Count:', count);

// // await page.waitForTimeout(4000) 

// // });
// import { test } from '@playwright/test';

// test('amazon', async ({ page }) => {

//   await page.goto('https://www.amazon.in');

//   await page.getByRole('searchbox').fill('iphone 17');

//   await page.locator('div[aria-label="iphone 17 pro"]').click();

//   const products = page.locator(
//     '//div[@role="listitem" and .//div[@data-cy="title-recipe" and contains(., "iPhone 17")] and .//div[@data-cy="reviews-block" and contains(., "4.6")]]'
//   );

//   const count = await products.count();

//   console.log('Product Count:', count);
//   console.log(products.textContent())

//   await page.waitForTimeout(4000);
import { test } from '@playwright/test';

test('Amazon Test', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator(`//input[@id="twotabsearchtextbox"]`).fill('iphone 17')
    let suggestion = await page.locator('//div[@id="sac-suggestion-row-1"]').first().click();
    // await suggestion.click();

    // const suggestions = page.locator(`//div[contains(@class,"s-suggestion-container")]`).first();
    // await suggestions.click();

    await page.waitForTimeout(4000);

    const productsWithRating = page.locator(`//div[@role="listitem"][.//div[@data-cy="reviews-block"]//span[normalize-space()="4.6"] and .//div[@data-cy="title-recipe"][contains(., "iPhone 17")]]`);

    const productCount = await productsWithRating.count();

    console.log(productCount);
});