import {test} from "@playwright/test";

test('login myntra',async({page})=>{
    await page.goto('https://www.myntra.com/');

console.log(await page.url());
 console.log(await page.title());

})

//import {test} from "@playwright/test";
//test("open url and print the title and url",async({page})=>{
 //   await page.goto('https://www.amazon.in/');
  //  console.log(await page.title());
   // console.log(await page.url());
//})

test('locators',async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("#nav-search-bar-form").fill("mobile");
    await page.locator("#nav-search-submit-button").click();
});

test('demoqa',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#firstName").fill("MANICKAM");
    await page.locator("#lastName").fill("R");
    await page.locator('input[id="gender-radio-1"]').check();
    await page.locator('[id="userEmail"]').fill("devarkm@gmail.com");
  await page.locator('minlength="10"').fill(123321989);
  await page.locator("dateOfBirthInput").fill("01 jan 2000");
await page.locator('class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-hlgwow").fill("sports"');
await page.locator('[id="hobbies-checkbox-1"]').click();
await page.locator('[placeholder="Current Address"]').fill("123,street,cbe-302");
await page.locator('[id="submit"]').click();

});