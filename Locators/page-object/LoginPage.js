class LoginPage{

    constructor(page){
        this.page = page;
        this.username = page.getByRole("textbox",{name: "Email"});
        this.password = page.locator("#userPassword");
        this.signInButton = page.getByRole("button",{name: "Login"});
    }

    goto(){
        this.page.goto('https://rahulshettyacademy.com/client/');
    }

    async validateLoginFeature(username, password){

        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {LoginPage}