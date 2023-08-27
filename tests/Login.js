Feature('Login endpoint');

Scenario('Login successful - pass case', ({ I }) => {
    const user = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    I.sendPostRequest('/login', user)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['token'])
});

Scenario.only('Login successful - fail case', ({ I }) => {
    const user = {
        "email": "eve.holt@reqres.in",
    }
    I.sendPostRequest('/login', user)
    I.seeResponseCodeIsSuccessful()
});
