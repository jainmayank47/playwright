const { customTest } = require("./utils/test-base");
const { POManager } = require("../page-object/POManager");

customTest("custom fixture test", async ({ page, orderTestData }) => {
	const poManager = new POManager(page);
	// const username = "anshika@gmail.com";
	// const password = "Iamking@000";
	const loginPage = poManager.getLoginPage();
	await loginPage.goto();
	await loginPage.validateLoginFeature(
		orderTestData.username,
		orderTestData.password
	);

	const dashBoardPage = poManager.getDashboardPage();

	await dashBoardPage.searchProduct(orderTestData.productName);
	await dashBoardPage.navigateToCart();

    await page.locator("li n").filter({hasText:'Cart'}).click();
});
