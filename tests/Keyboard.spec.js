import {test, expect} from '@playwright/test'

test("Keyboard Actions", async({page}) => {

    await page.goto("https://gotranscript.com/text-compare")

    await page.locator("[name='text1']").fill("Welcome to automation")

    //Ctrl + A
    await page.keyboard.press("ControlLeft+A")

    //Ctrl + C
    await page.keyboard.press("ControlLeft+C")

    //Tab
    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")

    //Ctrl + V
    await page.keyboard.press("ControlLeft+V")
})