const {test, expect, request} = require('@playwright/test');
const {ApiUtils} = require("./utils/ApiUtils");
const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
const newOrderPayLoad = {orders:[{country:"Cuba",productOrderedId:"676a9421e2b5443b1f00a1b2"}]};
let response;
test.beforeAll(async () => {

    const requestContext = await request.newContext();
    const apiUtils = new ApiUtils(requestContext, loginPayLoad);
    response = await apiUtils.createOrder(newOrderPayLoad);

    // Create Order

    


})

test.beforeEach(async ()=>{


})

// test('Playwright special locators', async ({ page }) => {
//     await page.goto('https://rahulshettyacademy.com/angularpractice/');
  
//     await page.getByLabel('Check me out if you Love IceCreams!').click();
//     await page.getByLabel('Employed').click();
//     await page.getByLabel('Gender').selectOption('Female');
//     await page.getByPlaceholder('Password').fill("Mayank@123");
//     //await page.getByRole('textbox',{name:'email'}).fill('mayank@yopmail.com');
//     await page.getByRole('button', {name: 'Submit' }).click();
//     await page.getByText("Success! The Form has been submitted successfully!.").click();
//     await page.getByRole('link', {name: 'Shop' }).click();
//     await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole('button').click();
  
//     await page.pause();
  
//   });
  
  test('Order Page with API', async ({ page }) => {
    
  
    const orderId = response.orderId;
    page.addInitScript(value =>{
        window.localStorage.setItem('token', value)
    }, response.token);
    await page.goto('https://rahulshettyacademy.com/client/');
   // await page.locator(".card-body").waitFor();
   await page.locator('button[routerlink$="myorders"]').click();
   await page.locator("tbody").waitFor();
  
  const orders = page.locator("tbody>tr")
  const orderCount = await orders.count()
  console.log(orderCount)
  for(let i = 0; i<orderCount; i++){
     const productOrderId = await orders.nth(i).locator('th[scope="row"]').innerText();
     console.log(productOrderId);
     if(orderId==productOrderId){
        await orders.nth(i).locator('button[class="btn btn-primary"]').click();
        break;
     }
  }
    await page.pause();
  
  });
  