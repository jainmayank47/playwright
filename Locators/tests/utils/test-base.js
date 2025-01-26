const base = require("@playwright/test")

exports.customTest = base.test.extend({

    orderTestData:{
        username : "anshika@gmail.com",
        password: "Iamking@000",
        productName: "Banarsi Saree"
    }
}   
)