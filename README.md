# Maptician Take-Home

## Info:

Maptician Take-Home is a Node.js web application. It allows users to view all reservations, add new reservations, or delete existing reservations using REST API endpoints.

### Required:

- [NodeJS v20.11.1](https://nodejs.org/dist/v20.11.1/node-v20.11.1.pkg)

### Suggested:

- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm). Nvm will allow you to easily switch version of node.

### Build Steps:

- Make sure Node.js is installed and your node version is correct by running: `node -v`
- Run `npm install` in the root directory to install all required dependencies. A list of these dependencies can be found in [package.json](package.json)
- The node app uses the build output from [Vite](https://vitejs.dev/). To build the app run `npm run build`
- To start the node server run `npm run node`

### Notes:

- Vite was used in development. However getting it working locally is a lot of additional work that is not relevant to this project.
- There are some values in attendanceData.json that I cannot be positive how they should interact with the front end.
- Given unlimited time I might:
  - Add a start and an end time in the Add Record form.
  - Add a button to the individual reservations to toggle `isPresent`.
  - Add a date/time picker for start/end times.
  - Create a login system to properly handle userId. In this version each entry has a new userId. Ideally a user could have many reservations associated with their userId.
  - Sanitize/Validate form inputs.
  - Add pagination.
  - Add Search.
- All scripts can be found in [package.json](package.json) under "scripts".

## API Endpoints

Below are the available API endpoints and their descriptions:

### GET /api/reservations

- **Description**: Retrieve a list of all reservations.
- **Method**: `GET`
- **URL**: `/api/reservations`
- **Request Body**: None
- **Response**: JSON array of reservation objects.
- **Example Response**:
  ```json
  [
    {
      "id": "43e1eb01-197a-49e9-a261-f5c847a48a82",
      "userName": "Lonnie Johnson II",
      ...
    }
  ]
  ```

### POST /api/reservations

- **Description**: Add a new reservation.
- **Method**: `POST`
- **URL**: `/api/reservations`
- **Request Body**: None
- **Response**: JSON object representing the new reservation (excluding the id, which is generated server-side).
- **Example Response**:

  ```json
  {
    "userName": "New User",
    "userId": "newuser-uuid",
    ...
  }
  ```

### DELETE /api/reservations/:id

- **Description**: Delete a specific reservation by ID.
- **Method**: `DELETE`
- **URL**: `/api/reservations/:id` (where :id is the ID of the reservation to delete)
- **Request Body**: None
- **Response**: HTTP status code 204 No Content on success, or 404 Not Found if no reservation with the provided ID exists.
