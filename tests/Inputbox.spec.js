import {test, expect} from '@playwright/test'

test("Input box test", async({page}) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    const firstnameinput = page.locator("#firstName")

    await expect(firstnameinput).toBeVisible()
    await expect(firstnameinput).toBeEmpty()
    await expect(firstnameinput).toBeEnabled()
    await expect(firstnameinput).toBeEditable()
    
    await firstnameinput.fill("Janki")

})