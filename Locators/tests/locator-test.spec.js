// @ts-check
const { test, expect } = require('@playwright/test');

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

test.only('Login Page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');

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

  await page.getByRole("textbox",{name: "Email"}).fill("anshika@gmail.com");
  await page.locator("#userPassword").fill("Iamking@000");
  await page.getByRole("button",{name: "Login"}).click();
  await page.waitForLoadState('networkidle');
  // await page.locator(".card-body").waitFor();
  //console.log(await page.locator(".card-body").filter({hasText:'Banarsi Saree'}).isVisible());

  await page.locator(".card-body").filter({hasText:'Banarsi Saree'}).getByRole("button",{name:'Add To Cart'}).click();

  console.log(await page.locator("li").filter({hasText:'Cart'}).isVisible());

  await page.locator("li").filter({hasText:'Cart'}).click();

  await page.getByRole('button', {name:"Checkout"}).click();

  await page.waitForLoadState('networkidle');

  await page.getByPlaceholder("Select Country").pressSequentially("Ind");
 await page.getByRole('button',{name: ' India'}).nth(1).click();
 await page.locator('div.field.small input[class$="txt"]').fill("123");
 await page.locator("div[class='field'] input[class$='txt']").pressSequentially("mayank jain");
await page.getByText("Place Order ").click();

  //await page.pause()

});

