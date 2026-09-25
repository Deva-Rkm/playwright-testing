import {test} from '@playwright/test';
test("amzon dropdown",async ({page})=>{
    await page.goto("https://www.amazon.in/");
await page.locator('[class="nav-search-scope nav-sprite"]').click();
await page.waitForTimeout(2000);

});
