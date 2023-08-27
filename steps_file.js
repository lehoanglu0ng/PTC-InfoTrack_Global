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

    register: function (user) {
      this.sendPostRequest('/register', user)
      this.seeResponseCodeIsSuccessful()
    },

    login: function (user) {
      this.sendPostRequest('/login', user)
      this.seeResponseCodeIsSuccessful()
      this.seeResponseValidByCallback(({ data, status, expect }) => {
        this.amBearerAuthenticated(secret(data.token))
      })
    },

    createUser: async function (user) {
      const response = await this.sendPostRequest('/users', user)
      this.seeResponseCodeIsSuccessful()
      return response.data.id
    },

    updateUser: function (id, data) {
      this.sendPutRequest(`/users/${id}`, data)
      this.seeResponseCodeIsSuccessful()
    },

    deleteUser: function (id) {
      this.sendDeleteRequest(`/users/${id}`)
      this.seeResponseCodeIsSuccessful()
    }

  });
}
