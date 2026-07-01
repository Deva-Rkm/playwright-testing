import {test} from "@playwright/test";
test('opening flipcart',async({page})=>{
    await page.goto('https://www.flipkart.com/');
console.log(await page.url());
console.log(await page .title());
})