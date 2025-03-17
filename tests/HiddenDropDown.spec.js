import {test, expect} from '@playwright/test'

test.setTimeout(66000);

test("Hidden Dropdown", async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/")

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", {type: "submit"}).click()

    await page.locator("//span[normalize-space() = 'PIM'").click()

})