import {test, expect} from '@playwright/test'

test("AssertionsTest", async({page}) => {

    await page.goto("https://demo.nopcommerce.com/register");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await page.waitForTimeout(2000);
    console.log("Url test case passed")

    await expect(page).toHaveTitle("nopCommerce demo store. Register")
    await page.waitForTimeout(2000);
    console.log("Title test case passed")

    const logo = page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible()
    await page.waitForTimeout(2000);
    console.log("Logo visibility test passed")

    const searchbox = page.locator("#small-searchterms")
    await expect(searchbox).toBeEnabled()
    await page.waitForTimeout(2000);
    console.log("Search box enable test passed");

    const femaleradiobutton = page.locator("#gender-female")
    await femaleradiobutton.click()
    await expect(femaleradiobutton).toBeChecked();
    await page.waitForTimeout(2000);
    console.log("Radio button checked test passed");

    const regbutton = page.locator("#register-button")
    await expect(regbutton).toHaveAttribute("type", "submit")
    await page.waitForTimeout(2000);
    console.log("Attribute test case passed");

    const text = page.locator(".page-title h1")
    await expect(text).toHaveText("Register") //full text
    await page.waitForTimeout(2000);
    console.log("have text test passed");

    const containstext = page.locator(".page-title h1")
    await expect(containstext).toContainText("Reg") //partial text
    await page.waitForTimeout(2000);
    console.log("have text test passed");

    const email = page.locator("#Email")
    await email.fill("abc@gamil.com")
    await expect(email).toHaveValue("abc@gamil.com")
    // await page.waitForTimeout(2000);
    console.log("Value test passed");  
    
    const options = page.locator("#customerCurrency option")
    await expect(options).toHaveCount(2)
    

})