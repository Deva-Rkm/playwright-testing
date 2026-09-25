# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flipcart.spec.js >> frame
- Location: tests\flipcart.spec.js:2:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.hyrtutorials.com/p/frames-practice.html", waiting until "load"

```

# Test source

```ts
  1  | import{test} from'@playwright/test';
  2  | test('frame',async({page})=>{
> 3  |   await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
     |              ^ Error: page.goto: Target page, context or browser has been closed
  4  |  const frame3 = await page.frameLocator('#frm3');
  5  |  const frame3_2= await frame3.frameLocator("#frm2");
  6  | 
  7  | await frame3_2.locator("#firstName").fill("deva");
  8  | await page.waitForTimeout(3000);
  9  | 
  10 | 
  11 |    
  12 | 
  13 | });
  14 | 
```