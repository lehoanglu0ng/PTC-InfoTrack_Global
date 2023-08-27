# PTC-InfoTrack_Global

# Test Plan for https://reqres.in/ Endpoints:

### POST Method:
#### Endpoint: `/api/users`
#### Scenarios to test:
   1. Verify that a new user can be successfully created by sending a valid POST request.
   2. Verify that the API returns the correct response code and message when creating a new user with missing or invalid data.
   3. Verify that the created user can be retrieved by sending a GET request and the response contains the correct user information.
   4. Verify that the API returns an error when trying to create a user with an existing email address.
   5. Verify that the API returns an error when no data is provided in the POST request body.

### GET Method:
#### Endpoint: `/api/users/{id}`
#### Scenarios to test:
   1. Verify that the API returns the correct user information when retrieving an existing user by their ID.
   2. Verify that the API returns an error when trying to retrieve a user with an invalid or non-existent ID.
   3. Verify that the API returns the correct response code and message when retrieving a user with missing or invalid ID.
   4. Verify that the API returns an error when no ID is provided in the GET request URL.

### PUT Method:
#### Endpoint: `/api/users/{id}`
#### Scenarios to test:
   1. Verify that the API successfully updates the user information when sending a valid PUT request with new data.
   2. Verify that the API returns an error when trying to update a user with an invalid or non-existent ID.
   3. Verify that the API returns the correct response code and message when updating a user with missing or invalid data.
   4. Verify that the API returns an error when no ID is provided in the PUT request URL.

### DELETE Method:
#### Endpoint: `/api/users/{id}`
#### Scenarios to test:
   1. Verify that the API successfully deletes an existing user when sending a valid DELETE request.
   2. Verify that the API returns an error when trying to delete a user with an invalid or non-existent ID.
   3. Verify that the API returns the correct response code and message when trying to delete a user with missing or invalid ID.
   4. Verify that the API returns an error when no ID is provided in the DELETE request URL.

>Note: Please replace {id} with the actual ID of a user created during the POST endpoint testing to perform the GET, PUT, and DELETE requests.
