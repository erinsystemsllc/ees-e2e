import { expect, test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("https://test-accounting.erin.systems/");
  await page.type("#username", "byambaa");
  await page.type("#password", "Secret123");
  await page.click("#kc-form-buttons > input");
  await page.waitForURL("https://test-accounting.erin.systems/#/dashboard");
  await expect(page.getByRole);

  await page.context().storageState({ path: authFile });
});
