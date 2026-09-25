import { test } from '@playwright/test';

test.setTimeout(120000);

test('flipcart_products', async ({ page }) => {
  await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });

  const closePopup = page.locator('button._2KpZ6l._2doB4z');
  if (await closePopup.count() > 0) {
    await closePopup.first().click();
  }

  // Use a strict role-based locator to avoid strict-mode violations
  const searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands and More' });
  await searchBox.waitFor({ state: 'visible', timeout: 30000 });

  // If there are multiple inputs, pick the visible one
  const searchInputs = page.locator('input[title="Search for Products, Brands and More"]');
  let inputToUse = searchBox;
  const inputsCount = await searchInputs.count();
  for (let idx = 0; idx < inputsCount; idx++) {
    if (await searchInputs.nth(idx).isVisible()) {
      inputToUse = searchInputs.nth(idx);
      break;
    }
  }

  await inputToUse.fill('mens shirts');

  // Trigger the search (click button if visible, otherwise press Enter)
  const searchButton = page.getByRole('button', { name: 'Search for Products, Brands and More' });
  if (await searchButton.count() > 0 && await searchButton.first().isVisible()) {
    await searchButton.first().click();
  } else {
    await inputToUse.press('Enter');
  }

  // Wait for either product selectors or URL change as indication that results loaded
  await Promise.race([
    page.waitForSelector('div._4rR01T, a.s1Q9rs, div._2WkVRV, div._30jeq3, div._1vC4OE', { timeout: 90000 }),
    page.waitForURL(/search|q=|mens|shirts/, { timeout: 90000 }),
  ]);

  const titles = page.locator('div._4rR01T, a.s1Q9rs, div._2WkVRV');
  let prices = page.locator('div._30jeq3, div._1vC4OE');

  // Fallback: if standard price locators are empty, pick any element containing ₹ or Rs
  if ((await prices.count()) === 0) {
    prices = page.locator("xpath=//*[contains(text(),'₹') or contains(text(), 'Rs')]");
  }

  // Try mapping titles and prices using visible title/price selectors first
  let productCount = Math.min(await titles.count(), await prices.count());

  let products = [];
  if (productCount > 0) {
    for (let i = 0; i < productCount; i++) {
      const title = (await titles.nth(i).textContent())?.trim() ?? 'Unknown title';
      const priceText = (await prices.nth(i).textContent())?.trim() ?? '';
      const numericPrice = parseInt(priceText.replace(/[^0-9]/g, ''), 10);
      if (Number.isNaN(numericPrice)) continue;
      products.push({ title, priceText, price: numericPrice });
    }
  }

  // DOM fallback: scan any element containing '₹' and heuristically find a nearby title
  if (products.length === 0) {
    const extracted = await page.evaluate(() => {
      const priceRegex = /₹\s*[0-9,]+/;
      const nodes = Array.from(document.querySelectorAll('*')).filter(n => n.innerText && priceRegex.test(n.innerText));
      const seen = new Set();
      const results = [];
      for (const node of nodes) {
        const match = node.innerText.match(priceRegex);
        if (!match) continue;
        const priceText = match[0];
        let ancestor = node;
        for (let i = 0; i < 6 && ancestor; i++) {
          const candidates = Array.from(ancestor.querySelectorAll('a, h1, h2, h3, div, span'))
            .map(el => el.innerText?.trim())
            .filter(t => t && !priceRegex.test(t) && !/\b(off|%|SAVE|SAVE)\b/i.test(t) && /[A-Za-z0-9]/.test(t) && t.length > 4 && t.length < 120);
          const candidate = candidates.find(t => t && t.length > 4);
          if (candidate) {
            const key = candidate + '|' + priceText;
            if (!seen.has(key)) {
              results.push({ title: candidate, priceText });
              seen.add(key);
            }
            break;
          }
          ancestor = ancestor.parentElement;
        }
      }
      return results;
    });

    for (const p of extracted) {
      const numericPrice = parseInt(p.priceText.replace(/[^0-9]/g, ''), 10);
      if (Number.isNaN(numericPrice)) continue;
      products.push({ title: p.title, priceText: p.priceText, price: numericPrice });
    }
  }

  console.log('Total products count:', products.length);
  const below500 = products.filter(p => p.price <= 500);
  const above500 = products.filter(p => p.price > 500);

  console.log('Products priced at or below ₹500:');
  below500.forEach((product) => console.log(`- ${product.title} | ${product.priceText}`));

  console.log('Products priced above ₹500:');
  above500.forEach((product) => console.log(`- ${product.title} | ${product.priceText}`));
});