import {test, expect} from '@playwright/test'

test("RadioButtons test", async({page}) => {

    page.goto("https://demoqa.com/automation-practice-form")

    const radiobutton = page.locator("#gender-radio-2")
    radiobutton.check()

    await expect(radiobutton).toBeChecked()
    expect(radiobutton.isChecked()).toBeTruthy()

})