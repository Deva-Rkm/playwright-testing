# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: offline class\amazon_task.spec.js >> iphone search
- Location: tests\offline class\amazon_task.spec.js:2:5

# Error details

```
Error: locator.fill: Unexpected token "/" while parsing css selector "https://www.amazon.in/". Did you mean to CSS.escape it?
Call log:
  - waiting for https://www.amazon.in/

```

# Test source

```ts
  1 | import { test } from '@playwright/test';
  2 | test("iphone search",async({page})=>{
  3 |     await page.goto("https://www.amazon.in/");
> 4 |     await page.locator('https://www.amazon.in/').fill("i phone");
    |                                                  ^ Error: locator.fill: Unexpected token "/" while parsing css selector "https://www.amazon.in/". Did you mean to CSS.escape it?
  5 |     
  6 | 
  7 | })
```