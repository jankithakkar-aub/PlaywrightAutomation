import {test, expect} from "@playwright/test"

test("Mouse Hover test", async({page})=>{

    await page.goto("https://demo.opencart.com/")

    // const desktop = await page.locator("//a[normalize-space() = 'Desktops']")
    const desktop = await page.locator("(//a[contains(@class, 'nav-link')])[0]")
    console.log(desktop)

    const mac = await page.locator("//a[normalize-space() = 'Mac (1)']")
    console.log(mac)

    await desktop.hover()
    await mac.hover()

    await page.waitForTimeout(3000);

})