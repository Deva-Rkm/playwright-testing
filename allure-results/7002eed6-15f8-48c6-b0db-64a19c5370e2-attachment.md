# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: offline class\practice.spec.js >> Amazon Laptop Payment
- Location: tests\offline class\practice.spec.js:2:5

# Error details

```
ReferenceError: AmazonPage is not defined
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | test("Amazon Laptop Payment", async ({ page }) => {
> 3  |     const amazon = new AmazonPage(page);
     |                    ^ ReferenceError: AmazonPage is not defined
  4  |     await amazon.login();
  5  |     await amazon.searchProduct("laptop");
  6  |     await amazon.addToCart();
  7  |     await amazon.buyNow();
  8  |     await amazon.selectOnlinePayment();
  9  |     await amazon.makePayment();
  10 |     await expect(page.getByText("Payment successful")).toBeVisible();
  11 |     await expect(page.getByText("Your product will be delivered in")).toBeVisible();
  12 |     await expect(page.getByText("Discount offer")).toBeVisible();
  13 | });
  14 | 
```