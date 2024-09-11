---

# API REST with Express

This project is a simple REST API built with **Express** that allows manipulation of a user list. It supports CRUD operations (Create, Read, Update, Delete) and includes middlewares to process requests in JSON format.

## Technologies Used

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [http-status-codes](https://www.npmjs.com/package/http-status-codes)

## Features

The API offers the following routes:

### 1. **GET /**

Returns a welcome message.

- **URL**: `/`
- **Method**: `GET`
- **Response**:
  ```html
  <h1>Working with Express server.</h1>
  ```

### 2. **GET /users**

Returns the list of users.

- **URL**: `/users`
- **Method**: `GET`
- **Response**:
  ```json
  [
    { "id": 1, "name": "Jonathan Roberto", "age": 29 },
    { "id": 2, "name": "Daniele Pavesi", "age": 31 }
  ]
  ```

### 3. **GET /users/:userId**

Returns a specific user by ID.

- **URL**: `/users/:userId`
- **Method**: `GET`
- **Parameters**:
  - `userId`: The ID of the user to retrieve.
- **Response**:
  ```json
  { "id": 1, "name": "Jonathan Roberto", "age": 29 }
  ```

### 4. **POST /users**

Adds a new user to the list.

- **URL**: `/users`
- **Method**: `POST`
- **Body**:
  ```json
  { "id": 3, "name": "New User", "age": 25 }
  ```
- **Response**:
  - Status code: `201 Created`
  - Response body:
    ```json
    { "id": 3, "name": "New User", "age": 25 }
    ```

### 5. **PUT /users/:userId**

Updates a specific user by ID.

- **URL**: `/users/:userId`
- **Method**: `PUT`
- **Parameters**:
  - `userId`: The ID of the user to update.
- **Body**:
  ```json
  { "id": 1, "name": "Jonathan Updated", "age": 30 }
  ```
- **Response**:
  ```json
  { "id": 1, "name": "Jonathan Updated", "age": 30 }
  ```

### 6. **DELETE /users/:userId**

Removes a specific user by ID.

- **URL**: `/users/:userId`
- **Method**: `DELETE`
- **Parameters**:
  - `userId`: The ID of the user to delete.
- **Response**:
  - Status code: `204 No Content`

## How to Run the Project

### Prerequisites

You need to have **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <REPO_URL>
   ```

2. Navigate to the project directory:
   ```bash
   cd API-REST
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. Start the server:
   ```bash
   npm start
   ```

2. The server will be running at:
   ```
   http://localhost:8080
   ```

## Dependencies

- **express**: A web framework for Node.js.
- **http-status-codes**: A library for HTTP status codes.

### Installing dependencies manually

If you need to install the dependencies manually, run the following commands:

```bash
npm install express
npm install http-status-codes
```

## Contribution

If you want to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new **branch**:
   ```bash
   git checkout -b feature/MyNewFeature
   ```
3. Make your changes and **commit**:
   ```bash
   git commit -m "Added my new feature"
   ```
4. Push your changes:
   ```bash
   git push origin feature/MyNewFeature
   ```
5. Open a **Pull Request**.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](LICENSE) file.

---
