class ApiUtils{


    constructor(requestContext, loginPayLoad){
        console.log("constructor called.... ")
        this.requestContext = requestContext
        this.loginPayLoad = loginPayLoad
    }

    async getToken(){

        const loginResponse = await this.requestContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",

            {
                data: this.loginPayLoad
            }
        )
        //expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }

    async createOrder(newOrderPayLoad){

        let response = {}
        const token = await this.getToken();
        console.log(Object.prototype.toString.call(token) );
        console.log(JSON.stringify(token));
        const newOrderResponse = await this.requestContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
        
            data: newOrderPayLoad,
            headers: {
                "Authorization": token,
                "contentType": "application/json"
            }
        })
        
        const newOrderResponseJson = await newOrderResponse.json();
        console.log(newOrderResponseJson);
        const orderId = newOrderResponseJson.orders[0];
        response.token = token;
        response.orderId = orderId;
        return response;

    }
}

module.exports = {ApiUtils}