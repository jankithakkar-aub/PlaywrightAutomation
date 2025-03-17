import {test, expect} from '@playwright/test'

test("AutoSuggestDropDown", async({page}) => {

    page.goto("https://www.redbus.in/")

    await page.locator("#src").fill("Vadodara")

    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")

    debugger
    const cityoptions = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")
    // const cityoptions = page.locator("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")
    // const cityoptions = page.$$("//text[contains(@class, 'placeHolderMainText')]")

    for(const option of cityoptions) {

        const value = await option.textContent();
        console.log("Value: ", value)
        if(value.includes("Vrundavan Chokdi")) {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000);
})