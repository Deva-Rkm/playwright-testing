import {test} from '@playwright/test';
test("practice",async ({page})=> {
    await page.goto('https://www.flipkart.com/');
    await page.locator('input[title="Search for Products, Brands and More"]').first().fill("mens shirts");
    await page.locator('[class="XFwMiH"]').first().click();
    await page.waitForEvent('load');
   const count =  await page.locator('.Fo1I0b').count();
   console.log("Total counts are: ",count);
});