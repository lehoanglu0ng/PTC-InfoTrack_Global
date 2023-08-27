Feature('Users endpoint');

Before(({ I }) => {
    I.getToken()
});

Scenario('Verify that the API successfully deletes an existing user when sending a valid DELETE request', ({ I }) => {
    I.sendDeleteRequest('/users/1')
    I.seeResponseCodeIsSuccessful()
});