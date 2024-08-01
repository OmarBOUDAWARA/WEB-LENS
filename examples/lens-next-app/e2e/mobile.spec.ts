import { devices, test, expect } from "@playwright/test";

test.use(devices["iPhone 13"]);

test.describe("Given a mobile browser", async () => {
  test.describe("When opening the default page", async () => {
    test("Then the welcome text should appear", async ({ page }) => {
      await page.goto("/");

      await expect(page.getByRole("heading", { name: "Welcome to Lens" })).toBeVisible();
    });
  });
});
