# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: removeduplicatearray.spec.js >> remove duplicate
- Location: tests\removeduplicatearray.spec.js:2:5

# Error details

```
ReferenceError: set is not defined
```

# Test source

```ts
  1 | import {test} from '@playwright/test'
  2 | test("remove duplicate" , async ({})=>{
  3 |     let arr = [10,20,20,30,40,10];
> 4 |     let unique =[ new set(arr)];
    |                       ^ ReferenceError: set is not defined
  5 |     console.log(unique);
  6 | })
```