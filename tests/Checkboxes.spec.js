import {test, expect} from '@playwright/test';

test("Checkboxes test", async({page}) => {

    await page.goto("https://demoqa.com/automation-practice-form")

    const checkbox = page.locator("#hobbies-checkbox-1")
    await checkbox.check()
    await expect(checkbox).toBeChecked()

})