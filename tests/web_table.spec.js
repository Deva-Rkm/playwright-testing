import {test} from '@playwright/test';
test("web handling",async ({page})=>{
    await page.goto("https://demoqa.com/webtables");
    await page.waitForTimeout(2000);
    const tab = await page.locator('table tbody tr');
console.log(await tab.count());
 
// for (let i=0 ; i<await tab.count();i++){
//     const cell =await tab.nth(i).locator('td');
//     // /console.log(await cell.nth(i).textContent());
//     console.log(await cell.count());

//     for (let j=0;j<await cell.count();j++){
//     const colum = console.log(await cell.nth(j).textContent());
// console.log(await colum);
// 
 for(let i=0;i<await tab.count();i++){
    const text = await tab.nth(i).textContent();
    if(text.includes('Vega')&& text.includes('cierra')){
      const email = await tab.nth(i).textContent();
      console.log(email);
      await tab.nth(i).getByTitle('Delete').click();
    }
 }
 console.log(await tab.count());
});