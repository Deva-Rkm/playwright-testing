# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flipcart.spec.js >> flipcart_products
- Location: tests\flipcart.spec.js:5:5

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('input[title="Search for Products, Brands and More"]') resolved to 2 elements:
    1) <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka getByRole('textbox', { name: 'Search for Products, Brands' })
    2) <input readonly name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka locator('a').filter({ hasText: 'Search Icon' }).getByPlaceholder('Search for Products, Brands')

Call log:
  - waiting for locator('input[title="Search for Products, Brands and More"]') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - img [ref=e55]
            - generic [ref=e58]: Location not set
          - generic [ref=e60]:
            - generic [ref=e61]: Select delivery location
            - img [ref=e62]
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: /account/login?ret=/
              - img "Login" [ref=e88]
              - generic [ref=e89]: Login
            - img "Chevron" [ref=e90]
          - generic [ref=e95]:
            - link "More" [ref=e96] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e97]: More
            - img "Chevron" [ref=e98]
          - link "Cart Cart" [ref=e101] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link "For You" [ref=e110] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e112]:
            - img [ref=e115]
            - generic [ref=e116]: For You
        - link "Fashion" [ref=e121] [cursor=pointer]:
          - /url: /ss-26-base-inline-at-store
          - generic [ref=e123]:
            - img [ref=e126]
            - generic [ref=e127]: Fashion
        - link "Mobiles" [ref=e132] [cursor=pointer]:
          - /url: /mobile-phones-store
          - generic [ref=e134]:
            - img [ref=e137]
            - generic [ref=e138]: Mobiles
        - link "Electronics" [ref=e143] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e145]:
            - img [ref=e148]
            - generic [ref=e149]: Electronics
        - link "Beauty" [ref=e154] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e156]:
            - img [ref=e159]
            - generic [ref=e160]: Beauty
        - link "Home" [ref=e165] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e167]:
            - img [ref=e170]
            - generic [ref=e171]: Home
        - link "Appliances" [ref=e176] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e178]:
            - img [ref=e181]
            - generic [ref=e182]: Appliances
        - link "Toys, baby.." [ref=e187] [cursor=pointer]:
          - /url: /toysbc-new26-inline-at-store
          - generic [ref=e189]:
            - img [ref=e192]
            - generic [ref=e193]: Toys, baby..
        - link "Food & Health" [ref=e198] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e200]:
            - img [ref=e203]
            - generic [ref=e204]: Food & Health
        - link "Auto Accessories" [ref=e209] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e211]:
            - img [ref=e214]
            - generic [ref=e215]: Auto Accessories
        - link "Sports & Fitness" [ref=e220] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e222]:
            - img [ref=e225]
            - generic [ref=e226]: Sports & Fitness
        - link "Furniture" [ref=e231] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e233]:
            - img [ref=e236]
            - generic [ref=e237]: Furniture
        - link "Books & Media" [ref=e242] [cursor=pointer]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e244]:
            - img [ref=e247]
            - generic [ref=e248]: Books & Media
        - link "2 Wheelers" [ref=e253] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e255]:
            - img [ref=e258]
            - generic [ref=e259]: 2 Wheelers
    - generic [ref=e267]:
      - generic [ref=e282]:
        - link "Image" [ref=e289] [cursor=pointer]:
          - /url: /0pm/~cs-vn2mxpirfv/pr?sid=0pm&collection-tab-name=Premium+Headphones&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=4FBTD9CBU4WD_IAD&BU=Mixed
          - img "Image" [ref=e292]
        - link "Image" [ref=e299] [cursor=pointer]:
          - /url: /vivo-t5x-5g-fusion-red-128-gb/p/itm7da8aa253e72b?pid=MOBHPGHCZ9HCTCHK&marketplace=FLIPKART&lid&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=QO9DIW0N4OES_AD&BU=Mixed
          - img "Image" [ref=e302]
        - link "Image" [ref=e309] [cursor=pointer]:
          - /url: /boltt-smartphone-coming-soon-ads-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=KJRI2F7482ME_AD&BU=Mixed
          - img "Image" [ref=e312]
        - link "Image" [ref=e319] [cursor=pointer]:
          - /url: /poco-m8-power-5g/p/itm0edc1dd6b4e42?pid=MOBHPCYNPNCJG2UV&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MOQ7UWYZCOR6_AD&BU=Mixed
          - img "Image" [ref=e322]
        - link "Image" [ref=e329] [cursor=pointer]:
          - /url: /samsung-galaxy-f70%20pro-green-128-gb/p/itm294cbb65839e6?pid=MOBHZ8YSHHX6C4KX&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=KFSSIVHX6BCO_AD&BU=Mixed
          - img "Image" [ref=e332]
        - link "Image" [ref=e339] [cursor=pointer]:
          - /url: /0pm/~cs-u7hes8ux7k/pr?sid=0pm&collection-tab-name=Boat_PA&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=9DYZ17E2RVC4_AD&BU=Mixed
          - img "Image" [ref=e342]
        - link "Image" [ref=e349] [cursor=pointer]:
          - /url: /tablets/~cs-u0jc7at008/pr?sid=tyy%2Chry&collection-tab-name=Asus+Tab&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=2FAL3CUMZPMA_AD&BU=Mixed
          - img "Image" [ref=e352]
      - generic [ref=e372]:
        - link "Image" [ref=e377] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-biv2xdqwi8/pr?sid=g9b&collection-tab-name=Derama+Co+Facewash+&p%5B%5D=facets.brand%255B%255D%3DThe%2BDerma%2BCo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1NJUA26AKD5Q_AD&BU=Mixed
          - img "Image" [ref=e380]
        - link "Image" [ref=e385] [cursor=pointer]:
          - /url: /beauty-and-grooming/makeup/makeup-kits-combo/pr?sid=g9b%2Cffi%2C3dd&p%5B%5D=facets.brand%255B%255D%3DBLUE%2BHEAVEN&sort=recency_desc&p%5B%5D=facets.availability%255B%255D%3DInclude%2BOut%2Bof%2BStock&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=YNYZY7FQI4H7_AD&BU=Mixed
          - img "Image" [ref=e388]
        - link "Image" [ref=e393] [cursor=pointer]:
          - /url: /kitchen-cookware-serveware/cookware/cookware-sets/bergner~brand/pr?sid=upp%2Ctnx%2Cqvz&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DBERGNER&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=FLN9RHZ7RPJJ_AD&BU=Mixed
          - img "Image" [ref=e396]
      - generic [ref=e406]:
        - generic [ref=e410]:
          - img "Image" [ref=e413]
          - generic [ref=e417]: Grab or gone
        - generic [ref=e420]:
          - link "Image Best Deals Up to 90% Off" [ref=e425] [cursor=pointer]:
            - /url: /all/~cs-699517652e6eb5d233636aeadb145963/pr?sid=0pm%2Cfcn&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA5MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQUNDSEYzVTRWVVFDRUdRNSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sImRpc2NvdW50X3JhbmdlX3YxIjp7InJhbmdlVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6ImRpc2NvdW50X3JhbmdlX3YxIiwiaW5mZXJlbmNlVHlwZSI6IkZBQ0VUIiwibWluIjpudWxsLCJtYXgiOjkwLjAsInZhbHVlVHlwZSI6IlJBTkdFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiSGVhZHNldCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e435]
            - generic [ref=e438]:
              - generic [ref=e439]: Best Deals
              - generic [ref=e440]: Up to 90% Off
          - link "Image Best Deals Min. 70% Off" [ref=e445] [cursor=pointer]:
            - /url: /all/~cs-52421d5e45fb7e6543367c89c83fc1df/pr?sid=clo%2Cqfl%2Cwp7%2Czpk&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJWRVNIWkJGRUhNNENKRldaIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjcwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNZW4ncyBWZXN0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e455]
            - generic [ref=e458]:
              - generic [ref=e459]: Best Deals
              - generic [ref=e460]: Min. 70% Off
          - link "Image Most Loved Top Rated" [ref=e465] [cursor=pointer]:
            - /url: /all/~cs-9b9786822bdb7769cdab8b8a54666dc8/pr?sid=clo%2Cash%2Caxc%2Cmmk%2Ckp7&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTSFRIWkRKWUNaU1U0V1NCIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiVG9wIFJhdGVkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e475]
            - generic [ref=e478]:
              - generic [ref=e479]: Most Loved
              - generic [ref=e480]: Top Rated
          - link "Image Top Sellers Special offer" [ref=e485] [cursor=pointer]:
            - /url: /all/~cs-5469e644570958be94b4f14a279e5947/pr?sid=eat%2C0pt&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ2hvY29sYXRlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkNIQ0ZIWkc1SFpXWEc1Q1oiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e495]
            - generic [ref=e498]:
              - generic [ref=e499]: Top Sellers
              - generic [ref=e500]: Special offer
      - generic [ref=e510]:
        - generic [ref=e514]:
          - img "Image" [ref=e517]
          - generic [ref=e521]: Top Value Deals
        - generic [ref=e526]:
          - generic [ref=e527]:
            - link "Image" [ref=e533] [cursor=pointer]:
              - /url: /a/p/itme?pid=BDSHJ4J6BWTHQU26&experience=hv&BU=Mixed
              - img "Image" [ref=e542]
            - link "Image" [ref=e548] [cursor=pointer]:
              - /url: /product/p/item?pid=MASH7VWA2VUEHYXH&experience=hv&BU=Mixed
              - img "Image" [ref=e557]
            - link "Image" [ref=e563] [cursor=pointer]:
              - /url: /product/p/itme?pid=FANHP8KXAV7YS6HR&BU=Mixed
              - img "Image" [ref=e572]
            - link "Image" [ref=e578] [cursor=pointer]:
              - /url: /arb/kjw/bm1/~cs-bmb0x335uv/pr?sid=arb,kjw,bm1&collection-tab-name=Wall+Clocks&PARAM=098541&BU=Mixed
              - img "Image" [ref=e587]
            - link "Image" [ref=e593] [cursor=pointer]:
              - /url: /reh/~cs-9fglxc453e/pr?sid=reh&collection-tab-name=Mens+Wallet&offer=vl:05a8940617&BU=Mixed
              - img "Image" [ref=e602]
            - link "Image" [ref=e608] [cursor=pointer]:
              - /url: /product/p/itme?pid=WAPHMGNKB6T9FSZH&BU=Mixed
              - img "Image" [ref=e617]
            - link "Image" [ref=e623] [cursor=pointer]:
              - /url: /a/p/itme?pid=HTEHJ5ZHYQ8WH5D4&experience=hv&BU=Mixed
              - img "Image" [ref=e632]
            - link "Image" [ref=e638] [cursor=pointer]:
              - /url: /product/p/itme?pid=MIXHM55CXZGHDKTH&BU=Mixed
              - img "Image" [ref=e647]
            - link "Image" [ref=e653] [cursor=pointer]:
              - /url: /a/p/itme?pid=TCVHZ4FHAB3BH6AH&experience=hv&BU=Mixed
              - img "Image" [ref=e662]
            - link "Image" [ref=e668] [cursor=pointer]:
              - /url: /product/p/itme?pid=EKTGU26YY8A6GGRF&BU=Mixed
              - img "Image" [ref=e677]
            - link "Image" [ref=e683] [cursor=pointer]:
              - /url: /osp/iko/~cs-cnx4n7vbe7/pr?sid=osp,iko&collection-tab-name=Women+Slippers&offer=vl:05a8940617&BU=Mixed
              - img "Image" [ref=e692]
          - button [ref=e693]:
            - img [ref=e694]
      - generic [ref=e705]:
        - generic [ref=e709]:
          - img "Image" [ref=e712]
          - generic [ref=e716]: Upcoming deals on tech
        - generic [ref=e720]:
          - generic [ref=e721]:
            - link "Image" [ref=e726] [cursor=pointer]:
              - /url: /vivo-t5-lite-44w-5g-wave-blue-128-gb/p/itm5420c578ec2df?pid=MOBHNDTD5AWH5FJT&param=38735&BU=Mixed
              - img "Image" [ref=e729]
            - link "Image" [ref=e734] [cursor=pointer]:
              - /url: /audio-video/headset/pr?sid=0pm%2Cfcn&p%5B%5D=facets.price_range.from%3D1999&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DboAt&p%5B%5D=facets.brand%255B%255D%3DOnePlus&p%5B%5D=facets.brand%255B%255D%3Drealme&p%5B%5D=facets.brand%255B%255D%3DSONY&p%5B%5D=facets.brand%255B%255D%3DCMF%2Bby%2BNothing&p%5B%5D=facets.brand%255B%255D%3DJBL&p%5B%5D=facets.brand%255B%255D%3DSkullcandy&p%5B%5D=facets.brand%255B%255D%3DMarshall&p%5B%5D=facets.brand%255B%255D%3DBose&p%5B%5D=facets.brand%255B%255D%3DNoise&p%5B%5D=facets.brand%255B%255D%3DSennheiser&p%5B%5D=facets.brand%255B%255D%3Dvivo&p%5B%5D=facets.brand%255B%255D%3DGOBOULT&p%5B%5D=facets.brand%255B%255D%3DSamsung&p%5B%5D=facets.brand%255B%255D%3DGoogle&p%5B%5D=facets.brand%255B%255D%3DMOTOROLA&p%5B%5D=facets.brand%255B%255D%3DZEBRONICS&p%5B%5D=facets.brand%255B%255D%3DHuawei&p%5B%5D=facets.brand%255B%255D%3DJlab&p%5B%5D=facets.brand%255B%255D%3DApple&p%5B%5D=facets.brand%255B%255D%3DPHILIPS&BU=Mixed
              - img "Image" [ref=e737]
            - link "Image" [ref=e742] [cursor=pointer]:
              - /url: /ckf/czl/~cs-mr31rub9oy/pr?sid=ckf,czl&collection-tab-name=Top+Deals+on+TVs&pageCriteria=default&BU=Mixed
              - img "Image" [ref=e745]
            - link "Image" [ref=e750] [cursor=pointer]:
              - /url: /realme-p4x-5g-matte-silver-128-gb/p/itm575b1540859e4?pid=MOBHN7A8H9WAG4PD&param=2213&BU=Mixed
              - img "Image" [ref=e753]
            - link "Image" [ref=e758] [cursor=pointer]:
              - /url: /j9e/m38/hzg/~cs-6w3xz1b6mf/pr?sid=j9e,m38,hzg&collection-tab-name=Refrigerators2&pageCriteria=default&BU=Mixed
              - img "Image" [ref=e761]
            - link "Image" [ref=e766] [cursor=pointer]:
              - /url: /wearable-smart-devices/~cs-j3g3p1grsu/pr?sid=ajy&collection-tab-name=Ubon+Smartwatches&sort=price_asc&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=2763&BU=Mixed
              - img "Image" [ref=e769]
            - link "Image" [ref=e774] [cursor=pointer]:
              - /url: /ai-pulse-2-black-64-gb/p/itm7feca2e591fba?pid=MOBHKHPYGKYZ3YUN&param=45667&BU=Mixed
              - img "Image" [ref=e777]
            - link "Image" [ref=e782] [cursor=pointer]:
              - /url: /gaming-accesories/controllers/pr?sid=4rr%2Ckm5%2Cr39&sort=recency_desc&p%5B%5D=facets.price_range.from%3D699&p%5B%5D=facets.price_range.to%3DMax&BU=Mixed
              - img "Image" [ref=e785]
            - link "Image" [ref=e790] [cursor=pointer]:
              - /url: /home-kitchen/home-appliances/water-purifiers/~cs-97y1lf5se4/pr?sid=j9e%2Cabm%2Ci45&sort=price_asc&BU=Mixed
              - img "Image" [ref=e793]
            - link "Image" [ref=e798] [cursor=pointer]:
              - /url: /furniture/mattresses/bed-mattress/pr?sid=wwe%2Crg9%2C6t1&p%5B%5D=facets.price_range.from%3D2899&p%5B%5D=facets.price_range.to%3DMax&param=34568&BU=Mixed
              - img "Image" [ref=e801]
          - button "Next Slide" [ref=e802]:
            - img [ref=e803]
      - generic [ref=e810]: Hang on, loading content
      - generic [ref=e822]:
        - generic [ref=e823]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e824]: +
      - contentinfo [ref=e825]:
        - generic [ref=e827]:
          - generic [ref=e828]:
            - generic [ref=e829]:
              - generic [ref=e830]: ABOUT
              - link "Contact Us" [ref=e831] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e832] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e833] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e834] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e835] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e836] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e837]:
              - generic [ref=e838]: GROUP COMPANIES
              - link "Myntra" [ref=e839] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e840] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e841] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e842]:
              - generic [ref=e843]: HELP
              - link "Payments" [ref=e844] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e845] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e846] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e847] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e848]:
              - generic [ref=e849]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e850] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e851] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e852] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e853] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e854] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e855] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e856] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e857] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e858]:
              - generic [ref=e859]: "Mail Us:"
              - generic [ref=e860]:
                - paragraph [ref=e861]: Flipkart Internet Private Limited,
                - paragraph [ref=e862]: Buildings Alyssa, Begonia &
                - paragraph [ref=e863]: Clove Embassy Tech Village,
                - paragraph [ref=e864]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e865]: Bengaluru, 560103,
                - paragraph [ref=e866]: Karnataka, India
              - generic [ref=e867]: "Social:"
              - generic [ref=e868]:
                - link "Facebook" [ref=e870] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e871]
                - link "Twitter" [ref=e873] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e874]
                - link "YouTube" [ref=e876] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e877]
                - link "Instagram" [ref=e879] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e880]
            - generic [ref=e881]:
              - generic [ref=e882]: "Registered Office Address:"
              - generic [ref=e883]:
                - paragraph [ref=e884]: Flipkart Internet Private Limited,
                - paragraph [ref=e885]: Buildings Alyssa, Begonia &
                - paragraph [ref=e886]: Clove Embassy Tech Village,
                - paragraph [ref=e887]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e888]: Bengaluru, 560103,
                - paragraph [ref=e889]: Karnataka, India
                - paragraph [ref=e890]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e891]:
                  - text: "Telephone:"
                  - link "044-45614709" [ref=e892] [cursor=pointer]:
                    - /url: tel:044-45614709
                  - text: /
                  - link "044-45714709" [ref=e893] [cursor=pointer]:
                    - /url: tel:044-45714709
          - generic [ref=e894]:
            - generic [ref=e895]:
              - img "Become a Seller" [ref=e896]
              - link "Become a Seller" [ref=e897] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e898]:
              - img "Advertise" [ref=e899]
              - generic "Advertise" [ref=e900]
            - generic [ref=e901]:
              - img "Gift Cards" [ref=e902]
              - link "Gift Cards" [ref=e903] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e904]:
              - img "Help Center" [ref=e905]
              - link "Help Center" [ref=e906] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e907]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test.setTimeout(60000);
  4  | 
  5  | test('flipcart_products', async ({ page }) => {
  6  |   await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });
  7  | 
  8  |   const closePopup = page.locator('button._2KpZ6l._2doB4z');
  9  |   if (await closePopup.count()) {
  10 |     await closePopup.first().click();
  11 |   }
  12 | 
  13 |   const searchBox = page.locator('input[title="Search for Products, Brands and More"]');
> 14 |   await searchBox.waitFor({ state: 'visible', timeout: 30000 });
     |                   ^ Error: locator.waitFor: Error: strict mode violation: locator('input[title="Search for Products, Brands and More"]') resolved to 2 elements:
  15 |   await searchBox.fill('mens shirts');
  16 |   await searchBox.press('Enter');
  17 | 
  18 |   await page.waitForLoadState('networkidle');
  19 |   await page.waitForSelector('div._30jeq3', { timeout: 45000 });
  20 | 
  21 |   const titles = page.locator('div._4rR01T, a.s1Q9rs, div._2WkVRV');
  22 |   const prices = page.locator('div._30jeq3');
  23 | 
  24 |   const productCount = Math.min(await titles.count(), await prices.count());
  25 |   console.log('Total products count:', productCount);
  26 | 
  27 |   const below500 = [];
  28 |   const above500 = [];
  29 | 
  30 |   for (let i = 0; i < productCount; i++) {
  31 |     const title = (await titles.nth(i).textContent())?.trim() ?? 'Unknown title';
  32 |     const priceText = (await prices.nth(i).textContent())?.trim() ?? '';
  33 |     const numericPrice = parseInt(priceText.replace(/[^0-9]/g, ''), 10);
  34 | 
  35 |     if (Number.isNaN(numericPrice)) {
  36 |       console.log(`Unable to parse price for product: ${title} (${priceText})`);
  37 |       continue;
  38 |     }
  39 | 
  40 |     const product = { title, priceText, price: numericPrice };
  41 |     if (product.price <= 500) {
  42 |       below500.push(product);
  43 |     } else {
  44 |       above500.push(product);
  45 |     }
  46 |   }
  47 | 
  48 |   console.log('Products priced at or below ₹500:');
  49 |   below500.forEach((product) => console.log(`- ${product.title} | ${product.priceText}`));
  50 | 
  51 |   console.log('Products priced above ₹500:');
  52 |   above500.forEach((product) => console.log(`- ${product.title} | ${product.priceText}`));
  53 | });
```