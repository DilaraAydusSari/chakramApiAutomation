const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Tests", function () {
    
    it("GET User Info", function () {

        // kullanıcı görüntüleme için ilk önce kullanıcı oluşturmalıyız:
        const requestBody = {
            "id": 918273645,
            "username": "selim",
            "firstName": "Selim",
            "lastName": "Can",
            "email": "selimcan321@email.com",
            "password": "123456asd",
            "phone": "55555555555555555",
            "userStatus": 0
          }
        const response = chakram.post("https://petstore.swagger.io/v2/user",requestBody);
        expect(response).to.have.status(200);
        
        const response2 = chakram.get("https://petstore.swagger.io/v2/user/selim");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET Not User Info", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/sel");
        expect(response).to.have.status(404);
        return chakram.wait();
    });

    it("POST User Create", function () {
        const requestBody = {
            "id": 918273645,
            "username": "selim",
            "firstName": "Selim",
            "lastName": "Can",
            "email": "selimcan321@email.com",
            "password": "123456asd",
            "phone": "55555555555555555",
            "userStatus": 0
          }
        const response = chakram.post("https://petstore.swagger.io/v2/user",requestBody);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    /*
    it("GET Login", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=selim&password=123456asd");
        expect(response).to.have.status(200);
        return chakram.wait();
    });
    */
    it("GET Login", function () {
        const qsBody = {
            "username": "selim",
            "password": "123456asd"
        }
        const response = chakram.get("https://petstore.swagger.io/v2/user/login", {qs : qsBody});
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET Logout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("PUT Update User", function () {
        const updaterequestBody = {
            "id": 9182736491,
            "username": "selim",
            "firstName": "Selim",
            "lastName": "Can",
            "email": "selimcan981@email.com",
            "password": "1",
            "phone": "55",
            "userStatus": 1
          }
        const response = chakram.put("https://petstore.swagger.io/v2/user/selim", updaterequestBody);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("DELETE User", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/selim");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("POST Create With Array", function () {
        const arrayBody = [
            {
              "id": 4545,
              "username": "dilek",
              "firstName": "Dilek",
              "lastName": "Ay",
              "email": "da@email.com",
              "password": "da123",
              "phone": "456",
              "userStatus": 0
            }
          ]
        const response = chakram.post("https://petstore.swagger.io/v2/user/createWithArray", arrayBody);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("POST Create With List", function () {
        const listBody = [
            {
              "id": 10,
              "username": "zeynep",
              "firstName": "Zeynep",
              "lastName": "Şef",
              "email": "sef@email.com",
              "password": "zey00",
              "phone": "345",
              "userStatus": 0
            },
            {
              "id": 0,
              "username": "canan",
              "firstName": "Canan",
              "lastName": "Yel",
              "email": "yel@email.com",
              "password": "yel11",
              "phone": "567",
              "userStatus": 0
            }
          ]
        const response = chakram.post("https://petstore.swagger.io/v2/user/createWithList", listBody);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

});