import {test, expect} from '@playwright/test'

test("Handle dropdown", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.selectOption("#colors", ["Blue", "Red", "Yellow"])

    const options = page.locator("#colors option")
    await expect(options).toHaveCount(7)

    const content = await page.locator("#colors").textContent()
    expect(content.includes("Blue")).toBeTruthy()

})