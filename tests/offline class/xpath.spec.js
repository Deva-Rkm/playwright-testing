import { test } from '@playwright/test';

test('xpath', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  let products = page.locator('//div[@class="product-price"]//descendant::span[@class="product-discountedPrice"]');

  let prices = await products.allTextContents();

  let below250 = [];
  let above250 = [];

  for (let priceText of prices) {
    const Price1 = priceText.replace(/[^\d]/g, '')

    if ((Price1)) {
      if (Price1 <= 250) {
        below250.push(Price1);
      } else {
        above250.push(Price1);
      }
    }
  }

  console.log('Total products count:', prices.length);
  console.log('below amount is', below250.join(', '));
  console.log('above amount is', above250.join(', '));
 
});




// let minprice = await products.allTextContents();
// for( let price  of minprice){
//   if(price < minprice){
//     console.log(price);
//   }
// }


// });