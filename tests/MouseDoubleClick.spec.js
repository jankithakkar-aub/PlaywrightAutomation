import {test, expect} from '@playwright/test'

test("Mouse Double Click", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const button = page.locator("//button[normalize-space() = 'Copy Text']")

    await button.dblclick()

    const text1 = await page.locator("#field1").textContent()
    console.log(text1)

    const text2 = await page.locator("#field2").textContent()
    console.log(text2)

    if(text1 == text2) {

        console.log("Test passed")
    }

})