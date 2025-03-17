import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

// Function to read the CSV file
function readCSV(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  console.log("Data: ", data);
  const lines = data.split("\n");
  console.log("Lines: ", lines);
  const result = lines.map((line) => {
    const [username, password, status] = line.split(",");
    return { username, password, status };
  });
  console.log("Result: ", result);
  return result;
}

// Function to write the updated results back to the CSV
function writeCSV(filePath, data) {
  const csvContent = data
    .map((row) => `${row.username},${row.password},${row.status}`)
    .join("\n");
  fs.writeFileSync(filePath, csvContent);
}

test.setTimeout(66000);

test("Login Test with CSV data", async ({ page }) => {
//   page.setDefaultTimeout(60000);
  const filePath = path.join(__dirname, "test_cases.csv");

  let testCases = readCSV(filePath);

  for (let testCase of testCases) {
    const { username, password } = testCase;

    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // await page.fill('input[placeholder="Username"]', username);
    // await page.fill('input[placeholder="password"]', password);

    await page.getByPlaceholder("Username").fill(username);
    await page.getByPlaceholder("password").fill(password);

    await page.click('button[type="submit"]');

    await page.waitForTimeout(2000);

    const loginFailed = await page.isVisible("text=Invalid credentials");

    if (loginFailed) {
      testCase.status = "Failed";
    } else {
      testCase.status = "Passed";
    }

    writeCSV(filePath, testCases);

    await page.waitForTimeout(1000);
  }
});
