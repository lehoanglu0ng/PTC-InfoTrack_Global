Feature('Users endpoint');

Before(({ I }) => {
    I.getToken()
});

Scenario('Verify that the API returns the correct user information when retrieving an existing user by their ID', async ({ I }) => {
    const user = {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }
    I.sendGetRequest(`/users/${user.id}`)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        data = data.data
        expect(data.id).eq(user.id)
        expect(data.email).eq(user.email)
        expect(data.first_name).eq(user.first_name)
        expect(data.last_name).eq(user.last_name)
        expect(data.avatar).eq(user.avatar)
    })
});

Scenario('Verify that the API returns the correct response code and message when retrieving a user with missing or invalid ID', ({ I }) => {
    I.sendGetRequest('/users/13')
    I.seeResponseCodeIs(404)
});
