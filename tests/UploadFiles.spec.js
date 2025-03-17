import {test, expect} from '@playwright/test'

test("Single File", async({page}) => {

    await page.goto("https://ps.uci.edu/~franklin/doc/file_upload.html")

    const button = page.locator("[name='userfile']")

    await button.click()

    await button.setInputFiles("tests/uploadFiles/hello.txt")

    await page.waitForTimeout(6000)

})

test.only("Multiple Files", async({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.locator("#filesToUpload").setInputFiles(["tests/uploadFiles/hello.txt", "tests/uploadFiles/bye.txt"])

    await page.waitForTimeout(5000)
    
})