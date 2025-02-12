# Contact Management API

## Overview
This is a RESTful API for managing contacts. It allows users to create, retrieve, update, delete, and search for contacts.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- UUID for unique IDs
- Joi for validation

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/contact-management-api.git
   cd contact-management-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### 1. Get All Contacts
**Endpoint:** `GET /contacts`

**Response Example:**
```json
{
  "success": true,
  "contacts": [
    {
      "contactId": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Karthik",
      "email": "karthik123@gmail.com",
      "phoneNumber": "9876543210",
      "address": "Hyderabad, India"
    }
  ]
}
```

### 2. Get a Contact by ID
**Endpoint:** `GET /contacts/:contactId`

**Response Example:**
```json
{
  "success": true,
  "contact": {
    "contactId": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Karthik",
    "email": "karthik123@gmail.com",
    "phoneNumber": "9876543210",
    "address": "Hyderabad, India"
  }
}
```

### 3. Add a New Contact
**Endpoint:** `POST /contacts`

**Request Body:**
```json
{
  "name": "Karthik",
  "email": "karthik123@gmail.com",
  "phoneNumber": "9876543210",
  "address": "Hyderabad, India"
}
```

**Response Example:**
```json
{
  "success": true,
  "message": "Contact added successfully",
  "data": {
    "contactId": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Karthik",
    "email": "karthik123@gmail.com",
    "phoneNumber": "9876543210",
    "address": "Hyderabad, India"
  }
}
```

### 4. Update a Contact
**Endpoint:** `PUT /contacts/:contactId`

**Request Body:**
```json
{
  "name": "Karthik Chittiprolu",
  "email": "karthik123@gmail.com",
  "phoneNumber": "9876543210",
  "address": "Hyderabad, India"
}
```

**Response Example:**
```json
{
  "message": "Contact updated successfully",
  "data": {
    "contactId": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Karthik Chittiprolu",
    "email": "karthik123@gmail.com",
    "phoneNumber": "9876543210",
    "address": "Hyderabad, India"
  }
}
```

### 5. Delete a Contact
**Endpoint:** `DELETE /contacts/:contactId`

**Response Example:**
```json
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

### 6. Search Contacts
**Endpoint:** `GET /contacts/search?name=Karthik&email=karthik123@gmail.com`

**Response Example:**
```json
[
  {
    "contactId": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Karthik",
    "email": "karthik123@gmail.com",
    "phoneNumber": "9876543210",
    "address": "Hyderabad, India"
  }
]
```

## Error Handling
If an error occurs, the API returns a JSON response with an error message, for example:
```json
{
  "success": false,
  "error": "Contact not found"
}
```

## License
This project is licensed under the MIT License.

---

Feel free to modify this README as needed! 🚀

