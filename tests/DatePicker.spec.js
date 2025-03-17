import {test, expect} from '@playwright/test'

test("Date Picker", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.fill("#datepicker", "02/12/2025")

    const year = "2025"
    const month = "September"
    const date = "07"

    await page.click("#datepicker")

    while(true) {

        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        console.log(currentYear)
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()
        console.log(currentMonth)

        if(currentYear == year && currentMonth == month) {

            break;
        }

        await page.locator("[title='Next']").click()
    }

    const dates = await page.$$("//a[@class='ui-state-default']")

    for(const dt of dates) {
        
        if(await dt.textContent() == date) {

            await dt.click()
            break;
        }
    }

    await page.waitForTimeout(3000);



})