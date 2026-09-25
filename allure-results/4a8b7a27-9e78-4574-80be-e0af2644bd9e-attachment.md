# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myntra.spec.js >> demoqa
- Location: tests\myntra.spec.js:24:5

# Error details

```
Error: locator.fill: value: expected string, got number
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e26] [cursor=pointer]:
          - generic [ref=e27]:
            - img [ref=e29]
            - text: Forms
          - img [ref=e35]
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
              - img [ref=e41]
              - text: Practice Form
      - generic [ref=e45] [cursor=pointer]:
        - generic [ref=e46]:
          - img [ref=e48]
          - text: Alerts, Frame & Windows
        - img [ref=e53]
      - generic [ref=e57] [cursor=pointer]:
        - generic [ref=e58]:
          - img [ref=e60]
          - text: Widgets
        - img [ref=e66]
      - generic [ref=e70] [cursor=pointer]:
        - generic [ref=e71]:
          - img [ref=e73]
          - text: Interactions
        - img [ref=e78]
      - generic [ref=e82] [cursor=pointer]:
        - generic [ref=e83]:
          - img [ref=e85]
          - text: Book Store Application
        - img [ref=e90]
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e99]: Name
          - textbox "First Name" [ref=e101]: MANICKAM
          - textbox "Last Name" [ref=e103]: R
        - generic [ref=e104]:
          - generic [ref=e106]: Email
          - textbox "name@example.com" [active] [ref=e108]: devarkm@gmail.com
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [checked] [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e123]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]
        - generic [ref=e126]:
          - generic [ref=e128]: Date of Birth
          - textbox [ref=e132]: 15 Jul 2026
        - generic [ref=e133]:
          - generic [ref=e135]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]
            - combobox [ref=e143]
        - generic [ref=e146]:
          - generic [ref=e148]: Hobbies
          - generic [ref=e149]:
            - generic [ref=e150]:
              - checkbox "Sports" [ref=e151]
              - generic [ref=e152]: Sports
            - generic [ref=e153]:
              - checkbox "Reading" [ref=e154]
              - generic [ref=e155]: Reading
            - generic [ref=e156]:
              - checkbox "Music" [ref=e157]
              - generic [ref=e158]: Music
        - generic [ref=e159]:
          - generic [ref=e161]: Picture
          - button "Choose File" [ref=e163] [cursor=pointer]
        - generic [ref=e164]:
          - generic [ref=e166]: Current Address
          - textbox "Current Address" [ref=e168]
        - generic [ref=e169]:
          - generic [ref=e171]: State and City
          - generic [ref=e173]:
            - log [ref=e175]
            - generic [ref=e176]:
              - generic [ref=e177]:
                - generic [ref=e178]: Select State
                - combobox [ref=e180]
              - img [ref=e184]
          - generic [ref=e186]:
            - generic:
              - log
              - generic:
                - generic:
                  - generic: Select City
                - generic:
                  - generic:
                    - img
        - button "Submit" [ref=e189] [cursor=pointer]
  - contentinfo [ref=e196]:
    - generic [ref=e197]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test} from "@playwright/test";
  2  | 
  3  | test('login myntra',async({page})=>{
  4  |     await page.goto('https://www.myntra.com/');
  5  | 
  6  | console.log(await page.url());
  7  |  console.log(await page.title());
  8  | 
  9  | })
  10 | 
  11 | //import {test} from "@playwright/test";
  12 | //test("open url and print the title and url",async({page})=>{
  13 |  //   await page.goto('https://www.amazon.in/');
  14 |   //  console.log(await page.title());
  15 |    // console.log(await page.url());
  16 | //})
  17 | 
  18 | test('locators',async({page})=>{
  19 |     await page.goto("https://www.amazon.in/");
  20 |     await page.locator("#nav-search-bar-form").fill("mobile");
  21 |     await page.locator("#nav-search-submit-button").click();
  22 | });
  23 | 
  24 | test('demoqa',async({page})=>{
  25 |     await page.goto("https://demoqa.com/automation-practice-form");
  26 |     await page.locator("#firstName").fill("MANICKAM");
  27 |     await page.locator("#lastName").fill("R");
  28 |     await page.locator('input[id="gender-radio-1"]').check();
  29 |     await page.locator('[id="userEmail"]').fill("devarkm@gmail.com");
> 30 |   await page.locator('minlength="10"').fill(123321989);
     |                                        ^ Error: locator.fill: value: expected string, got number
  31 |   await page.locator("dateOfBirthInput").fill("01 jan 2000");
  32 | await page.locator('class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-hlgwow").fill("sports"');
  33 | await page.locator('[id="hobbies-checkbox-1"]').click();
  34 | await page.locator('[placeholder="Current Address"]').fill("123,street,cbe-302");
  35 | await page.locator('[id="submit"]').click();
  36 | 
  37 | });
```