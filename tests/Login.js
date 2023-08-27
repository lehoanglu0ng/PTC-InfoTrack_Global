Feature('Login endpoint');

Scenario('Login successful', ({ I }) => {
    const user = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    I.sendPostRequest('/login', user)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['token'])
});

Scenario('Login unsuccessful', ({ I }) => {
    const user = {
        "email": "eve.holt@reqres.in",
    }
    I.sendPostRequest('/login', user)
    I.seeResponseCodeIsClientError()
    I.seeResponseContainsJson({ "error": "Missing password" })
});
{

}