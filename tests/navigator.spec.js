import{test} from "@playwright/test";
//test("goback_task",async({page})=>{
  //  await page.goto('https://www.meesho.com/')
    //console.log(page.url());
    //console.log(page.title());
    //await page. screenshot({path:"./myntra page.png"})
//})
//test('browser',async()=>{
//const browser = await chromium.launch();
//const context = await browser.newcontext();
//const page = await context.newpage();
//await page.goto("https://www.myntra.com/")
//console.log(page.url());
//console.log(page.title());
//})
//test('reload',async({page})=>{
//await page.goto('https://www.facebook.com/')
//await page.goto('https://www.myntra.com/')
//await page.goBack();
//console.log(await page.url());
//console.log(await page.title());


//console.log(page.url());
//console.log(page.title());
//})

//import { test } from '@playwright/test';

//test('go back and forward ', async ({ page }) => {
  //await page.goto('https://www.amazon.in/');
  //await page.goto('https://www.flipkart.com/');
  //recordVideo:{    //to screen recording
    //dir:'./record/'
  //}

  //await page.goBack();
  //console.log(page.url());
  //console.log(await page.title());

  //await page.goForward();
  //console.log( page.url());
  //console.log( await page.title());
//})

//locators
// test('locators',async({page})=>{
//   await page.goto("https://www.amazon.in/");
//  await page.locator('#nav-fill-search').fill('laptop');
 
  
//})
// test('amzon click',async({page})=>{
//   await page.goto("https://www.amazon.in/")
  
//   await page.locator('//select[@aria-describedby="searchDropdownDescription"]')
// });

// test("multiple select",async({page})=>{
//   await page.goto("https://testautomationcentral.com/demo/dropdown.html");
//   await page.locator("//button[text()='Simple Dropdown']").click();
//   await page.locator("")
// })

test('frame',async({page})=>{
  await page.goto("https://demoqa.com/upload-download");
 const frame = page.frameLocator('#iFrame').click();
   

});
test('iframe',async({page})=>{
  await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
  const frame3 = page.frameLocator("#frm2");
  //const inner_frame3 = frame.frameloctor("#frm2");
   await frame3.locator("#firstName").fill("deva");
  await page.waitForTimeout(3000);
});

