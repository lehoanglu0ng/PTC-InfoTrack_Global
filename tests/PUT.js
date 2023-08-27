const { faker } = require("@faker-js/faker");
const Joi = require('joi');

Feature('Users endpoint');

Before(({ I }) => {
    I.getToken()
});

Scenario('Verify that the API successfully updates the user information when sending a valid PUT request with new data', ({ I }) => {
    const user = {
        name: faker.person.fullName(),
        job: faker.person.jobTitle()
    }
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        job: Joi.string().required(),
        updatedAt: Joi.date().min(new Date()).required(),
    })

    I.sendPutRequest('/users/2', user)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseMatchesJsonSchema(schema)
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(data.name).eq(user.name)
        expect(data.job).eq(user.job)
    })
});

Scenario('Verify that the API returns an error when no ID is provided in the PUT request URL', ({ I }) => {
    const user = {
        name: faker.person.fullName(),
        job: faker.person.jobTitle()
    }
    I.sendPutRequest(`/users`, user)
    I.seeResponseCodeIs(404)
});
