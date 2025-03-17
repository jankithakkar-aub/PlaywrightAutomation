/*
page.getByAltText() - to locate an element, usually image, by its text alternative
page.getByPlaceholder() - to locate an input by placeholder
page.getByRole() - to locate by explicit and implicit accessibility attributes
page.getByText() - to locate by text content.

page.getByLabel() - to locate a form control by associated label's text
page.getByTitle() - to locate an element by its title attribute
page.getByTestId() - to locate an element based on its data-testid attribute (other attriutes )

*/

import {test, expect} from '@playwright/test'

test('Built-inlocators', async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const logo = page.getByAltText("company-branding")
    await expect(logo).toBeVisible();
    
    await page.waitForTimeout(2000);

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("password").fill("admin123")

    await page.waitForTimeout(2000);

    await page.getByRole("button", {type: "submit"}).click()

    await expect(await page.getByText("Yuvi kkkk")).toBeVisible()

    await page.waitForTimeout(2000);

})