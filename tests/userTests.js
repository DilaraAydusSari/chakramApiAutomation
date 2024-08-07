const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Tests", function () {
    
    it("GET User Info", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/selim");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET Not User Info", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/sel");
        expect(response).to.have.status(404);
        return chakram.wait();
    });
    
});