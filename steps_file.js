// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    getToken: async function () {
      const response = await this.sendPostRequest('/login', {
        "email": "eve.holt@reqres.in",
        "password": secret("cityslicka")
      });
      this.seeResponseCodeIs(200);
      this.seeResponseContainsKeys(['token'])
      this.amBearerAuthenticated(secret(response.data.token));
    },

  });
}
