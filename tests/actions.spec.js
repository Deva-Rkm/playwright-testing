import{test} from '@playwright/test';
test('keyboard',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(4000);
    await page.getByPlaceholder('search amazon').type('mobiles',{delay:1000});
 await page.getByPlaceholder('search amazon').press('Control+A');
    await page.waitForTimeout(3000);
await page.getByPlaceholder('search amazon').press('Control+X');
await page.getByPlaceholder('search amazon').press('Control+V');
await page.waitForTimeout(3000); 
await page.keyboard.press('Enter');
 

})