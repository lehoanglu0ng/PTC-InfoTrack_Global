# PTC-InfoTrack_Global

# Test Plan for https://reqres.in/ Endpoints:

### POST Method:
#### Endpoint: `/users`
#### Scenarios to test:
   1. Verify that a new user can be successfully created by sending a valid POST request.
   2. Verify that the API returns the correct response code and message when creating a new user with missing or invalid data.

### GET Method:
#### Endpoint: `/users/{id}`
#### Scenarios to test:
   1. Verify that the API returns the correct user information when retrieving an existing user by their ID.
   2. Verify that the API returns the correct response code and message when retrieving a user with missing or invalid ID.

### PUT Method:
#### Endpoint: `/users/{id}`
#### Scenarios to test:
   1. Verify that the API successfully updates the user information when sending a valid PUT request with new data.
   2. Verify that the API returns an error when no ID is provided in the PUT request URL.

### DELETE Method:
#### Endpoint: `/users/{id}`
#### Scenarios to test:
   1. Verify that the API successfully deletes an existing user when sending a valid DELETE request.

>Note: Please replace {id} with the actual ID of a user created during the POST endpoint testing to perform the GET, PUT, and DELETE requests.

# Execute tests
`npx codeceptjs run --steps`
#### with report
`npx codeceptjs run --reporter mocha-multi`

- Open `./output/report.html` for the report
- All test cases in `./tests` folder