# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: meesho_task.spec.js >> meesho
- Location: tests\meesho_task.spec.js:2:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.meesho.com/
Call log:
  - navigating to "https://www.meesho.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1 | import { test } from '@playwright/test';
  2 | test('meesho',async({page})=>{
> 3 |     await page.goto("https://www.meesho.com");
    |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.meesho.com/
  4 | await page.getByPlaceholder("Try Saree, Kurti or Search by Product Code").fill("mens tshirt");
  5 | 
  6 | })
```