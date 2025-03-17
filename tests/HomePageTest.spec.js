import {test, expect} from '@playwright/test'

test("Home Page", async({page}) => {
    
    await page.goto("https://demoblaze.com/")

    const pageTitle = await page.title()
    console.log("Title: ",pageTitle)
    await expect(page).toHaveTitle("STORE")
    await page.waitForTimeout(3000);

    const pageUrl = page.url();
    console.log("Page Url: ", pageUrl)
    await expect(page).toHaveURL("https://demoblaze.com/")
    await page.waitForTimeout(3000);

    await page.close();

})