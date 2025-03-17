import {test, expect} from '@playwright/test'

test("Home Page Test", async({page}) => {

    await page.goto("https://www.demoblaze.com/")

    await page.waitForTimeout(2000);

    await page.locator("#login2").click()

    await page.waitForTimeout(2000);

    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")

    await page.waitForTimeout(2000);

    await page.locator("//button[normalize-space() = 'Log in']").click()

    await page.waitForTimeout(2000);

    const products = await page.$$(".hrefch")

    await page.waitForTimeout(2000);

    expect(products).toHaveLength(9)

    await page.waitForTimeout(2000);

    await page.locator("#logout2").click()

    await page.waitForTimeout(2000);

})

test("Add Product to cart test", async({page}) => {

    await page.goto("https://www.demoblaze.com/")

    await page.waitForTimeout(2000);

    await page.locator("#login2").click()

    await page.waitForTimeout(2000);

    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")

    await page.waitForTimeout(2000);

    await page.locator("//button[normalize-space() = 'Log in']").click()

    await page.waitForTimeout(2000);

    await page.locator("//a[normalize-space() = 'Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space() = 'Add to cart']").click()

    await page.waitForTimeout(2000);

    page.on("dialog", async dialog => {

        expect(dialog.message()).toContain("Product added")
        await dialog.accept()
    })

    await page.waitForTimeout(2000);

    await page.locator("#logout2").click()

})