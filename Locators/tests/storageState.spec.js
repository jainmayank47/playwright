// @ts-check
const { test, expect } = require("@playwright/test");
let webContext;

test.beforeAll(async ({ browser }) => {
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto("https://rahulshettyacademy.com/client/");
	await page.getByRole("textbox", { name: "Email" }).fill("anshika@gmail.com");
	await page.locator("#userPassword").fill("Iamking@000");
	await page.getByRole("button", { name: "Login" }).click();
	await page.waitForLoadState("networkidle");
	await context.storageState({ path: "state.json" });
	webContext = await browser.newContext({ storageState: "state.json" });
});

test("Login Page", async () => {
	// await page.locator(".card-body").waitFor();
	//console.log(await page.locator(".card-body").filter({hasText:'Banarsi Saree'}).isVisible());

	const page = await webContext.newPage();
	await page.goto("https://rahulshettyacademy.com/client/");
	await page
		.locator(".card-body")
		.filter({ hasText: "Banarsi Saree" })
		.getByRole("button", { name: "Add To Cart" })
		.click();

	console.log(await page.locator("li").filter({ hasText: "Cart" }).isVisible());

	await page.locator("li").filter({ hasText: "Cart" }).click();

	await page.getByRole("button", { name: "Checkout" }).click();

	await page.waitForLoadState("networkidle");

	await page.getByPlaceholder("Select Country").pressSequentially("Ind");
	await page.getByRole("button", { name: " India" }).nth(1).click();
	await page.locator('div.field.small input[class$="txt"]').fill("123");
	await page
		.locator("div[class='field'] input[class$='txt']")
		.pressSequentially("mayank jain");
	await page.getByText("Place Order ").click();

	//await page.pause()
});
