import {test, expect} from '@playwright/test'

test("page screenshot", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'Homepage.png'})

})

test("full page screenshot", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'Fullpage.png', fullPage: true})

})

test("Element screenshot", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator(".date-picker-box").screenshot({path: 'Element.png'})

})