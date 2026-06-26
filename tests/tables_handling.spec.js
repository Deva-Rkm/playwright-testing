import {test} from'@playwright/test';
test('tables' , async({page})=>{
     await page.goto('https://demoqa.com/webtables');
  const rows =  await page.locator('table tbody tr'); // its locate the table body rows
   console.log(await rows.count()); // its pint the 
     for(let i=0;i<await rows.count();i++){
       const colum  = await rows.nth(i).locator('td');
       for(let j=0;j<await colum.count();j++){
         console.log(await colum.nth(j).textContent());
      }
    }

})

// test('dynamic table',async({page})=>{
//   await page.goto('https://demoqa.com/webtables');
//  await page.waitForTimeout(4000);
//   const text = await page.locator('table tbody tr ');
// await page.waitForTimeout(3000);
//   for(let i=0;i<=await text.count();i++){
//  const row = await text.nth(i).locator('td').allTextContents();
//     // const colm = await text.nth(i).textContent();
//  console.log(col.count());
// console.log(col);

//    if(col.includes('vega')){
//   await col.nth(i).locator('[title="Delete"]').click();
//   // await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
//   // await page.locator.click('<button class="tab px-4 py-2 text-blue-500 hover:bg-blue-200 focus:outline-none active" data-target="simple-dropdown">Simple Dropdown</button>');

// }
// }  
// await page.waitForTimeout(4000);
 
// })
test('dynamic table',async({page})=>{
  await page.goto("https://demoqa.com/webtables");
  const text = await page.locator("tabl tbody tr");
  console.log(text.count());
})