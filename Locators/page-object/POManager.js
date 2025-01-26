const{LoginPage} = require("./LoginPage");
const{DashBoardPage} = require("./DashboardPage");

class POManager{

    constructor(page){
        this.page = page;
    }

    getLoginPage(){
        return new LoginPage(this.page);
    }

    getDashboardPage(){
        return new DashBoardPage(this.page);
    }
}

module.exports = {POManager}