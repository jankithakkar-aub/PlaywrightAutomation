import { test, expect } from "@playwright/test";

test("xyz", async ({ page }) => {
  await page.goto("https://www.myntra.com/nike");

  //   const products = page.locator("//h3[contains(@class, 'product-brand')]");

  //   console.log(products);

  //   const productCount = await products.count();
  //   console.log("Product count: ", productCount);

  //   for (let i = 0; i < productCount; i++) {
  //     const product = products.nth(i);
  //     const productName = await product.textContent();
  //     console.log("Product name: ", productName);
  //   }

  const products = await page.$$("//h3[contains(@class, 'product-brand')]");

  for (const product of products) {
    const productName = await product.textContent();
    console.log("Product name: ", productName);
  }
});
