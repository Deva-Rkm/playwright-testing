import { test } from '@playwright/test';
// import console, { count } from 'node:console';
test ("product",async({page})=>{
await page.goto("https://www.myntra.com/boy-tshirts");
  async function getminimumPrices(){
  const PricesDetail = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"or(text() and not (@class))]').allTextContents();
 const Prices = PricesDetail.map(priceText =>
        Number(priceText.replace(/[^0-9]/g, ''))
)
console.log(Prices)
  const Minimumprice =  Math.min(...Prices)
  const ProductName = await getproductname(page,Minimumprice) 
  console.log("product brand name :",ProductName)
  return Minimumprice
}
async function getproductname(page,value){
  const ProductName = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[((@class="product-discountedPrice" and contains(.,'${value}')) or (contains(.,'${value}') and not(@class)))]/parent::div[@class="product-price"]/preceding-sibling::h3[@class="product-brand"]`
    ).first()
  return await ProductName.textContent()
}
const Minimumprice= await getminimumPrices()
console.log("Minimumprice is",Minimumprice)
});