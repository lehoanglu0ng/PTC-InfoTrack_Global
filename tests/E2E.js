const { faker } = require("@faker-js/faker");
const Joi = require('joi');

Feature('End to End');

Scenario('Update and delete new user by new admin account workflow', async ({ I }) => {
    const admin = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
    const user = {
        name: faker.person.fullName(),
        job: faker.person.jobTitle()
    }
    const newData = {
        name: faker.person.fullName(),
        job: faker.person.jobTitle()
    }
    
    I.register(admin)
    I.login(admin)
    const userID = await I.createUser(user)
    I.updateUser(userID, newData)
    I.deleteUser(userID)
});
