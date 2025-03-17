import {test, expect} from '@playwright/test'

test("Handle frames", async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total frames
    const allframes = page.frames()
    console.log("Number of frames: ", allframes.length)

    //accessing frame with name or url
    // const frame1 = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"})
    // await frame1.fill("[name='mytext1']", "Hello")

    //using frame locator
    const inputbox = page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    await inputbox.fill("Hello")

    await page.waitForTimeout(3000);

})