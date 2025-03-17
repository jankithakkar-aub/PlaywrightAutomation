import {test, expect} from '@playwright/test'

test("Alert test", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enabling alert handling
    page.on("dialog", async dialog=>{
        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept();
    })

    await page.locator("#alertBtn").click()
    await page.waitForTimeout(5000);
})

test("Confirmation test", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enabling confirmation dialog handling
    page.on("dialog", async dialog=>{
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Press a button!")
        await dialog.accept(); //close by using ok button
        // await dialog.dismiss() //close by using cancel button
    })

    await page.locator("#confirmBtn").click()

    const text = await page.locator("#demo").textContent()
    expect(text).toBe("You pressed OK!")

    await page.waitForTimeout(5000);
})

test("Prompt Dialog test", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enabling confirmation dialog handling
    page.on("dialog", async dialog=>{
        expect(dialog.type()).toContain("prompt")
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept("Janki"); //close by using ok button
        
    })

    await page.locator("#promptBtn").click()

    const text = await page.locator("#demo").textContent()
    expect(text).toBe("Hello Janki! How are you today?")

    await page.waitForTimeout(5000);
})