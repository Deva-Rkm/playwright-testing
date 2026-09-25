# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web_table.spec.js >> web handling
- Location: tests\web_table.spec.js:2:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'count')
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
      - generic [ref=e12]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
              - img [ref=e28]
              - text: Text Box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
              - img [ref=e32]
              - text: Check Box
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
              - img [ref=e36]
              - text: Radio Button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
              - img [ref=e40]
              - text: Web Tables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
              - img [ref=e44]
              - text: Buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
              - img [ref=e48]
              - text: Links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
              - img [ref=e52]
              - text: Broken Links - Images
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
              - img [ref=e56]
              - text: Upload and Download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
              - img [ref=e60]
              - text: Dynamic Properties
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Forms
        - img [ref=e73]
      - generic [ref=e77] [cursor=pointer]:
        - generic [ref=e78]:
          - img [ref=e80]
          - text: Alerts, Frame & Windows
        - img [ref=e85]
      - generic [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - img [ref=e92]
          - text: Widgets
        - img [ref=e98]
      - generic [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - img [ref=e105]
          - text: Interactions
        - img [ref=e110]
      - generic [ref=e114] [cursor=pointer]:
        - generic [ref=e115]:
          - img [ref=e117]
          - text: Book Store Application
        - img [ref=e122]
    - generic [ref=e124]:
      - generic [ref=e125]:
        - heading "Web Tables" [level=1] [ref=e128]
        - generic [ref=e129]:
          - generic [ref=e130]:
            - button "Add" [ref=e132] [cursor=pointer]
            - generic [ref=e134]:
              - textbox "Type to search" [ref=e135]
              - button [ref=e136] [cursor=pointer]:
                - img [ref=e137]
          - table [ref=e139]:
            - rowgroup [ref=e140]:
              - row "First Name Last Name Age Email Salary Department Action" [ref=e141]:
                - columnheader "First Name" [ref=e142]
                - columnheader "Last Name" [ref=e143]
                - columnheader "Age" [ref=e144]
                - columnheader "Email" [ref=e145]
                - columnheader "Salary" [ref=e146]
                - columnheader "Department" [ref=e147]
                - columnheader "Action" [ref=e148]
            - rowgroup [ref=e149]:
              - row "Cierra Vega 39 cierra@example.com 10000 Insurance EditDelete" [ref=e150]:
                - cell "Cierra" [ref=e151]
                - cell "Vega" [ref=e152]
                - cell "39" [ref=e153]
                - cell "cierra@example.com" [ref=e154]
                - cell "10000" [ref=e155]
                - cell "Insurance" [ref=e156]
                - cell "EditDelete" [ref=e157]:
                  - generic [ref=e158]:
                    - generic "Edit" [ref=e159] [cursor=pointer]:
                      - img [ref=e160]
                    - generic "Delete" [ref=e162] [cursor=pointer]:
                      - img [ref=e163]
              - row "Alden Cantrell 45 alden@example.com 12000 Compliance EditDelete" [ref=e165]:
                - cell "Alden" [ref=e166]
                - cell "Cantrell" [ref=e167]
                - cell "45" [ref=e168]
                - cell "alden@example.com" [ref=e169]
                - cell "12000" [ref=e170]
                - cell "Compliance" [ref=e171]
                - cell "EditDelete" [ref=e172]:
                  - generic [ref=e173]:
                    - generic "Edit" [ref=e174] [cursor=pointer]:
                      - img [ref=e175]
                    - generic "Delete" [ref=e177] [cursor=pointer]:
                      - img [ref=e178]
              - row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete" [ref=e180]:
                - cell "Kierra" [ref=e181]
                - cell "Gentry" [ref=e182]
                - cell "29" [ref=e183]
                - cell "kierra@example.com" [ref=e184]
                - cell "2000" [ref=e185]
                - cell "Legal" [ref=e186]
                - cell "EditDelete" [ref=e187]:
                  - generic [ref=e188]:
                    - generic "Edit" [ref=e189] [cursor=pointer]:
                      - img [ref=e190]
                    - generic "Delete" [ref=e192] [cursor=pointer]:
                      - img [ref=e193]
          - generic [ref=e196]:
            - group [ref=e198]:
              - button "First" [disabled]
              - button "Previous" [disabled]
              - button "Next" [disabled]
              - button "Last" [disabled]
            - generic [ref=e199]:
              - text: Page
              - strong [ref=e200]: 1 of 1
            - combobox [ref=e202]:
              - option "Show 10" [selected]
              - option "Show 20"
              - option "Show 30"
              - option "Show 40"
              - option "Show 50"
      - iframe [ref=e206]:
        - generic [ref=f6e2]:
          - link "Advertisement" [ref=f6e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjssDJfZF4W3BwpbwhvHLYhutEBgLRTtKzG4DEAvYQAVsq6HEQ7qWD0Ll7IFYM2MWr0QJ2IwjJKllyG6eLtxgMRDj2gDJKxr_6yxyGpsTPgENycbzy3tWgOVtlaG4-eGyg_H0TPtcuLZIm4tJato2wb7rMVkGBERq0BhxxxVO_Wza2awp9P9hfjj1GuQI8zJ_lIzICfsK2W8JRTMtIT7-HBLdnimbZ1lxisraOWPKU2zM1kd1wb9kBgHxed_MrN3iFq0hi7WYPBCaBIUCv8zGaMGMYFF-Mr72wAjBTiZZuMihgqQuX7Z1adceSNG2JY-o7p19-PGS-M3mb5FkHwIcEr52eDJR4RkfTKqeth6BeyFjxASsWPe2OqM2aEVFxLagaae2VzVZFzV6UL1ThDOrAuAwOONRelCxhFnL-2Ttw0Vrx6QkQdfFON224xvU41yALv744lGvQoTryVxHOsXa6HHNKkiSKOrJgysMKiL6V871CchLHl_YDieM_76NFaxYyE5XOmZ9vg8zoutDPjCSjKrushtgt0N4QoOSRU8vy31YF1lJn2BP-YfV4E0NqEc8SbXj6ead57aVpx00-Mt1i6E1YAHjJfAsMayzeBJ3vHKoAvKcwJPeMx8HB2CT9-GuJhSd2oHY3ZQiSWHNBWbD4kgbAC-jLgEWoIl-IIR3MkRIOls2E5ZifoxjM8FIcmmOyi6oAI6XjYbO2-YD6-gDdV3j6rBXdZjzPcitm-O4ta5N-3F6IUgQBeQUu7uNXAr7uWf_4fkhdJgJLXMXK354UAnrd2vBkOmIgYiU22Io-8BRJCAb9vMkvqbcfciwacooQrtm6IgbX1_6r3G6K-M0FoKfwA0z2ktj6w2VLopITW6pL-ZlmAYc7gic8Z8E90UcTxUgy9Ogjj4EVZ6X0lU88z9f84PSRf7KyvMHfneLy_QQhmF1u7xK6TmKzKX4IA_-m_qTLy1LLnzJl6TL-gqeN_j89s_B6dJk49yTC2TxZpfloSZoMV53V6HMoXHebNEkDUAr63YH7MXz8hNcEEkwzR9kwcY1cuZwa7tkly5OBZM4bI796Wksl15M_orot5j4YHBP-dlXWk7vxj6QOUe-C3yEC9wDTnrENmgbNK9y_xUBfLfPt6urWSD0u-ThBKuTNuBIo_PAXy9miJbjlj5nfXs2pBIOwuh8XOveXXTvnHC_Cl67QUJBK7KqZXLWe9BS7S3pp32n9eNh0qFZGY7D9Zvx5iubwkRYjQpnIYtV1BO3M16yuG-AR34hyyeO-BXpHd55cWacfK4dD45d0qyZEjPz0-9suw_IYiBAgeWtB9YmkVHRUm1c3IlOimBEJbxnxviyEXtPTGazfVMFb6antwRsK4dpMuVc26G_5YX7FZEOq8wqiccEeVilmxKyeDu3fr7wvf_YMyNf_h7M0u_LgND3ofeEV1jdJcyqnipb2rtw0yfCpfaHSRMzv25gmBk5HLpjBMoLygMYOmAxU5sQxg1zacLFC--HhYpKXpt9sna3psEMVM822zCNO5aIwciJl4tsLjlrSZwE5WLBoBzhgn05usJu0rND5Rx-xq6o5HWeWnmx8m8z5CqvHThZ4r_G9TcOa7jonjjFnNy0cZITpE_WxEWFFli7BRaqLYICtbjS774Jg9h-N26METUxRIAlw0JW-YvwkGTZdmzDRRmeFJDpS_ep4rVUuYy7lmnDBXpPMH8zfnB0xbArS093NhnMhb8PPAeZURvC7O2FxZU2nZNyGDh2q_bdl84VeMsNLWgp-Yk1lxV7LU6Hmae5MQqaNOM5ybhdLypG2FFnzFNQteiP_Vj6OQW6AnueHM1cWbMq2JZ67WKR_UMAruM_pF8&sai=AMfl-YQL674xJyTLyP6f_x4sWVDZX3tE0a_iUFaCWajIMZsTmmrk3YoItB9auWWDOmoekCQZwkbz9iExDg2MdXcvygkamTqCRjI0PhMr7YVIEo96Tfh-nu39F30n7_9-aBHJr-jjDUgq19q72wqtsfTlHKX-gblhH5BM7eOH3hfjRxXsLOE_WbOl2fV_CcrQzpzhlzSVjbUxnzpyYCkhCqjSHas4zlkbcfPUGlJ9lbupUz7b740veRB-9YUyAgP60lPmGki59NE1TxACEy4CvAwhtKXuRQ76aSNXCwxZR4MZ3kK0bKz_gwAUV72sCYKz8yGT69n7u1quFy4QniZ-Z5ltH5f6wGf2BSe_GfDb99UZtQdvCKMHRfOTNGUhsue5nlsrcXsxUTfuMrAOvFnRBtCLC5oe5uKPhDMTMGj7WVcO4_2gOIFlf8NeaD95RGG3qJKgxeEaTsiKk2-prVAy7RH4wU0U762FSdTxSQGIfQa5_iWrnS7Vpl-4ldqr_SfU3jR9AoEKkVCCipfwF0LPx6i1PKeida-hIjDv8X7kSjTIPrSxqHQlhFLeNPgH6i_FKRVGE5a-3g01hpO9e5uaYwqJkw5q0jdyRuyGj2zT9dikFzfqup_Jfc3GtAA1Lagozg3CNOAvQCK2iNT9C3BljeO0pCKEYvOZkxyqmZWSrcy0JWuk0r4-rs6tNc0V3sQkGnaDDhzotUlq-AFA58qXjhzwhD-spKwkWeeaWqPchesMPQXsTGEN9_VIVrY0yCR_ymZ3UOJqWA3iRVHBdpezgetUuwqFI3GIw9nXBqY83uG7pugU-mowfNvVGJ50gJ1llHWaxOT7Cl6PgJ5u-WT1WlHS54oBay8szGrQIDy7fOWAZoLlqWUEGF5uD9iZNeLEvJSaLtFVFj3ea4inVV6lziJBNQs5rIUKDlhAIr2XAQMJuZJXIapPGBYX281RpqYZZJPnL429bve74R-uWA3Id-o5KzMBYIGHnb94cuWu9_3XpvQOjBcQoqwKdYBQ0PqE&sig=Cg0ArKJSzC7RMmMDSRcY&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9sZW5vdm8uY29t&urlfix=1&adurl=https://www.lenovo.com/in/en/d/deals/business%3Fcid%3Din:display:vvihi8%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24159655819
            - img "Advertisement" [ref=f6e5]
          - generic [ref=f6e6]:
            - generic:
              - img [ref=f6e10] [cursor=pointer]
              - button [ref=f6e12] [cursor=pointer]:
                - img [ref=f6e13]
  - contentinfo [ref=e212]:
    - generic [ref=e213]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | test("web handling",async ({page})=>{
  3  |     await page.goto("https://demoqa.com/webtables");
  4  |     await page.waitForTimeout(2000);
  5  |     const tab = await page.locator('table tbody tr');
  6  | console.log(await tab.count());
  7  |  
  8  | for (let i=0 ; i<await tab.count();i++){
  9  |     const cell =await tab.nth(i).locator('td');
  10 |     // /console.log(await cell.nth(i).textContent());
> 11 |     console.log(await cell.cell.count());
     |                                 ^ TypeError: Cannot read properties of undefined (reading 'count')
  12 | }
  13 | });
```