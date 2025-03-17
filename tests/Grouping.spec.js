import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log("Beforeall hook....");
});

test.afterAll(async () => {
  console.log("Afterall hook....");
});

test.beforeEach(async () => {
  console.log("BeforeEach hook....");
});

test.afterEach(async () => {
  console.log("AfterEach hook....");
});

test.describe("Group1", () => {
  test("Test1", async ({ page }) => {
    console.log("Test1");
  });

  test("Test2", async ({ page }) => {
    console.log("Test2");
  });
});

test.describe("Group2", () => {
  test("Test3", async ({ page }) => {
    console.log("Test3");
  });

  test("Test4", async ({ page }) => {
    console.log("Test4");
  });
});
