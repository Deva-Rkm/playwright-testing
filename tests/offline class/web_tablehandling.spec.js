import { test } from '@playwright/test';

test('xpath', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');

    let products = page.locator('//div[@class="product-price"]//descendant::span[@class="product-discountedPrice"]');

    let prices = await products.allTextContents();

    let min = [];


    for (let minprices of prices) {
        const Price1 = minprices.replace(/[^\d]/g, '')

        if ((Price1)) {
            if (Math.min) {
                console.log(Price1);
            } else {
                console.log(Price1);
            }
        }
    }

    console.log('Total products count:', prices.length);
    console.log('below amount is', below250.join(', '));
    console.log('above amount is', above250.join(', '));

});
