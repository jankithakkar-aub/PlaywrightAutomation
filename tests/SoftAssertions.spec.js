import {test, expect} from '@playwright/test';

test("Soft Assertion", async({page}) => {

    await page.goto("https://demoblaze.com/")

    await expect.soft(page).toHaveTitle("STORE123")
    await expect.soft(page.locator(".navbar-brand")).toBeVisible()
})