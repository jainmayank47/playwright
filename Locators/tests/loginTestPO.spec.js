// @ts-check
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../page-object/LoginPage');
const {DashBoardPage} = require('../page-object/DashboardPage');
const dataset = JSON.parse(JSON.stringify(require("./utils/loginTestPOTestData.json")))

test('Playwright special locators', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');

  await page.getByLabel('Check me out if you Love IceCreams!').click();
  await page.getByLabel('Employed').click();
  await page.getByLabel('Gender').selectOption('Female');
  await page.getByPlaceholder('Password').fill("Mayank@123");
  //await page.getByRole('textbox',{name:'email'}).fill('mayank@yopmail.com');
  await page.getByRole('button', {name: 'Submit' }).click();
  await page.getByText("Success! The Form has been submitted successfully!.").click();
  await page.getByRole('link', {name: 'Shop' }).click();
  await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole('button').click();

  await page.pause();

});

for(const data of dataset){
test(`Login Page test for ${data.productName}`, async ({ page }) => {
  //await page.goto('https://rahulshettyacademy.com/client/');

  // await page.getByLabel('Check me out if you Love IceCreams!').click();
  // await page.getByLabel('Employed').click();
  // await page.getByLabel('Gender').selectOption('Female');
  // await page.getByPlaceholder('Password').fill("Mayank@123");
  // //await page.getByRole('textbox',{name:'email'}).fill('mayank@yopmail.com');
  // await page.getByRole('button', {name: 'Submit' }).click();
  // await page.getByText("Success! The Form has been submitted successfully!.").click();
  // await page.getByRole('link', {name: 'Shop' }).click();
  // await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole('button').click();

  // await page.pause();

  const loginPage = new LoginPage(page);
  // const username = "anshika@gmail.com";
  // const password = "Iamking@000";
  await loginPage.goto();
  await loginPage.validateLoginFeature(data.username, data.password)

  // await page.locator(".card-body").waitFor();

  // await page.getByRole("textbox",{name: "Email"}).fill();
  // await page.locator("#userPassword").fill();
  // await page.getByRole("button",{name: "Login"}).click();
  
  // await page.locator(".card-body").waitFor();
  //console.log(await page.locator(".card-body").filter({hasText:'Banarsi Saree'}).isVisible());

  const dashBoardPage = new DashBoardPage(page);

  // const productName = 'Banarsi Saree';
  
  
  // await page.locator(".card-body").filter({hasText:productName}).getByRole("button",{name:'Add To Cart'}).click();

  // console.log(await page.locator("li").filter({hasText:'Cart'}).isVisible());

  await dashBoardPage.searchProduct(data.productName);
  await dashBoardPage.navigateToCart();

  // await page.locator("li").filter({hasText:'Cart'}).click();


  

  await page.getByPlaceholder("Select Country").pressSequentially("Ind");
 await page.getByRole('button',{name: ' India'}).nth(1).click();
 await page.locator('div.field.small input[class$="txt"]').fill("123");
 await page.locator("div[class='field'] input[class$='txt']").pressSequentially("mayank jain");
await page.getByText("Place Order ").click();

  //await page.pause()

});}

