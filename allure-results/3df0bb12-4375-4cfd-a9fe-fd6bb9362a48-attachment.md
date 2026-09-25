# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: offline class\tasks.spec.js >> google
- Location: tests\offline class\tasks.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//textarea[@name="q"]')

```

# Test source

```ts
  1 | import {test} from '@playwright/test';
  2 | test("google",async({page})=>{
  3 |     await page.locator("https://www.google.com/");
> 4 |     await page.locator('//textarea[@name="q"]').fill("instagram");
    |                                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  5 |     
  6 | })
```