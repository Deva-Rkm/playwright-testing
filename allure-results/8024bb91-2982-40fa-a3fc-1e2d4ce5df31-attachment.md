# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: duplicatewords.spec.js >> duplicatewords
- Location: tests\duplicatewords.spec.js:2:5

# Error details

```
TypeError: words.length is not a function
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | test("duplicatewords",async({})=>{
  3  |     let words = "programming";
> 4  |     for(let i=0;i<words.length();i++){
     |                         ^ TypeError: words.length is not a function
  5  |         for (let j=i+1;j<words.length();j++){
  6  |             if(words[i]===words[j]){
  7  | console.log(words[i])
  8  | 
  9  |             }
  10 |             }
  11 |         }
  12 |   
  13 | 
  14 | })
```