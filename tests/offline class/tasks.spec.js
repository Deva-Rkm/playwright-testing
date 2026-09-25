// import {test} from '@playwright/test';
// test("google",async({page})=>{
//     await page.locator("https://www.google.com/?zx=1789729199373");
//     await page.locator('//textarea[@name="q"]').fill("instagram");

// })import { test } from '@playwright/test';

test('Google Search', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.locator('//textarea[@name="q"]').fill('Instagram');

    await page.keyboard.press('Enter');

});