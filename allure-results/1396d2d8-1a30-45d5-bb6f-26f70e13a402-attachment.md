# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: meesho_task.spec.js >> meesho
- Location: tests\meesho_task.spec.js:2:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('Try Saree, Kurti or Search by Product Code')

```

# Test source

```ts
  1 | import { test } from '@playwright/test';
  2 | test('meesho',async({page})=>{
  3 |     await page.goto("https://www.meesho.com");
> 4 | await page.getByPlaceholder("Try Saree, Kurti or Search by Product Code").fill("mens tshirt");
    |                                                                           ^ Error: locator.fill: Target page, context or browser has been closed
  5 | 
  6 | })
```