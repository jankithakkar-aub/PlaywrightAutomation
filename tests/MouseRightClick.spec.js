import {test, expect} from '@playwright/test'

test("Mouse Right Click test", async({page}) => {

    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html")

    const button = page.locator("//span[normalize-space() = 'right click me']")

    await button.click({button: 'right'})

    await page.waitForTimeout(2000);
})