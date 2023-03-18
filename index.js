import { chromium } from "playwright";

(async () => {
  // Setup
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const page = await browser.newPage();

  await page.goto("https://mflowthai.com/mflow/unuserpayment");
  await page.locator("#plate1").click();
  await page.locator("#plate1").fill("fill plate1");
  await page.locator("#plate2").click();
  await page.locator("#plate2").fill("fill plate2");
  await page
    .locator("#province div")
    .filter({ hasText: "เลือกจังหวัด" })
    .nth(1)
    .click();
  await page.getByText("กรุงเทพมหานคร", { exact: true }).click();
  await page.getByRole("button", { name: " ค้นหา" }).click();
  await page.getByRole("button", { name: "ตกลง" }).click();

  // Teardown
  await browser.close();
})();
