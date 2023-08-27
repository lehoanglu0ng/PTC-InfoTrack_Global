const { faker } = require("@faker-js/faker");
const Joi = require('joi');

Feature('Users endpoint');

Before(({ I }) => {
    I.getToken()
});

Scenario('Verify that a new user can be successfully created by sending a valid POST request', ({ I }) => {
    const user = {
        name: faker.person.fullName(),
        job: faker.person.jobTitle()
    }
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        job: Joi.string().required(),
        id: Joi.number().required(),
        createdAt: Joi.date().min(new Date()).required(),
    })

    I.sendPostRequest('/users', user)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseMatchesJsonSchema(schema)
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(data.name).eq(user.name)
        expect(data.job).eq(user.job)
    })
});

Scenario('Verify that the API returns the correct response code and message when creating a new user with missing or invalid data', ({ I }) => {
    const user = {
        name: faker.person.fullName(),
    }
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        id: Joi.number().required(),
        createdAt: Joi.date().required(),
    })

    I.sendPostRequest('/users', user)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseMatchesJsonSchema(schema)
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(data.name).eq(user.name)
        expect(data).to.not.include.any.keys('job')
    })
});
