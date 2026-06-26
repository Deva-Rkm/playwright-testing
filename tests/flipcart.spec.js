import{test} from'@playwright/test';
test('frame',async({page})=>{
  await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
 const frame3 = await page.frameLocator('#frm3');
 const frame3_2= await frame3.frameLocator("#frm2");

await frame3_2.locator("#firstName").fill("deva");
await page.waitForTimeout(3000);
await page.waitForTimeout(4000);

   

});
