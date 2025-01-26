const {test, expect} = require("@playwright/test")


test("calender test",async ({page}) => {

    const year = "2037"
    const date = "17"
    const month = "8"

   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
   await page.locator(".react-date-picker__calendar-button").click();
   await page.locator(".react-calendar__navigation__label__labelText").click();
   await page.locator(".react-calendar__navigation__label__labelText").click();
   while(!(await page.locator(".react-calendar__tile").filter({hasText:year}).isVisible()))
    {
        await page.locator(".react-calendar__navigation__next-button").click();
    }

    await page.getByText(year).click();
    await page.locator(".react-calendar__tile").nth(Number(month)-1).click();
    await page.locator("button[class$='react-calendar__month-view__days__day'], button[class$='react-calendar__month-view__days__day--weekend']").nth(Number(date)-1).click();
    await page.pause();

})