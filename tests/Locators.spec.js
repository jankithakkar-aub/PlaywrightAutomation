import {test, expect} from '@playwright/test'

test("Locators", async({page}) => {

    await page.goto("https://demoblaze.com/")

    await page.locator('id=login2').click()

    await page.waitForTimeout(2000);

    // await page.locator("#loginusername").fill("pavanol")
    await page.fill("#loginusername", 'pavanol')
    // await page.type("#loginusername", 'janki')

    await page.waitForTimeout(2000);

    // XPath = //input[@id="loginusername"]
    await page.fill("input[id='loginpassword']", 'test@123')

    await page.waitForTimeout(2000);

    await page.click('//button[normalize-space()="Log in"]')

    await page.waitForTimeout(2000);

    const logout = page.locator("//a[normalize-space()='Log out']")
    console.log("Logout value: ",logout)

    await page.waitForTimeout(2000);

    await expect(logout).toBeVisible()

    await page.waitForTimeout(2000);


    await page.close()

})