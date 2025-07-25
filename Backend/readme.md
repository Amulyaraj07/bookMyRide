# Backend API Documentation

## POST `/users/register`

### Description

Registers a new user in the system. On successful registration, returns an authentication token and the created user object.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname`: string, required, minimum 3 characters
- `fullname.lastname`: string, optional, minimum 3 characters if provided
- `email`: string, required, must be a valid email address
- `password`: string, required, minimum 6 characters

### Responses

#### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      // user object (excluding password)
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
      // ...more errors
    ]
  }
  ```

#### Example Request

```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```
