import {test} from '@playwright/test'

test("mouse actions",async({page})=>{
    await page.goto("https://www.amazon.in");
     await page.locator("#twotabsearchtextbox").hover();
     await page.waitForTimeout(2000);
     await page.getByRole("searchbox").type("iphone");
});