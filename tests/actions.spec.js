// import {test} from "@playwright/test";
// test('opening ',async({page})=>{
//     await page.goto('https://www.flipkart.com/');
// console.log(await page.url());
// console.log(await page .ti
import { test } from '@playwright/test';

test('Find minimum price and its brand', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');
//function to get the product brand by price
  async function getProductBrandByPrice(price) {
    const productLocator = page.locator(
      `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="249"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`
    );
    const productName = await productLocator.textContent();
    return productName;
  }
  //Function to find the minimum price and call the getProductBrandByPrice function

  async function findMinimumPrice() {
    const allPrices = page.locator(
      '//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
    );

    const priceList = await allPrices.allTextContents();

    const prices = priceList.map((price) =>
      Number(price.replace(/[^0-9]/g, ''))
    );

    const minPrice = Math.min(...prices);

    console.log('Minimum price:', minPrice);

    // Calling the product-brand function inside this function
    const brandName = await getProductBrandByPrice(minPrice);

    console.log('Product Brand:', brandName);
  }

  await findMinimumPrice();
});