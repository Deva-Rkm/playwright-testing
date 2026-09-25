# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: actions.spec.js >> opening flipcart
- Location: tests\actions.spec.js:2:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.flipkart.com/", waiting until "load"

```

# Test source

```ts
  1 | import {test} from "@playwright/test";
  2 | test('opening flipcart',async({page})=>{
> 3 |     await page.goto('https://www.flipkart.com/');
    |                ^ Error: page.goto: Target page, context or browser has been closed
  4 | console.log(await page.url());
  5 | console.log(await page .title());
  6 | })
```