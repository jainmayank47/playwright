class DashBoardPage{

    constructor(page){
        this.page = page;
        this.products = page.locator(".card-body");
        this.cartNavigationMenu = page.locator("li").filter({hasText:'Cart'});
    }

    async searchProduct(productName){

        // await this.products.filter({hasText: productName}).getByRole("button",{name:'Add To Cart'}).click();
        // console.log(await this.cart.isVisible());
        console.log(await this.page.locator(".card-body").filter({hasText:productName}).isVisible());
        
        await this.page.locator(".card-body").filter({hasText:productName}).getByRole("button",{name:'Add To Cart'}).click();

        

        
    }

    async navigateToCart(){

        console.log(await this.cartNavigationMenu.isVisible());
        
        await this.cartNavigationMenu.click();

        await this.page.getByRole('button', {name:"Checkout"}).click();

        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {DashBoardPage}