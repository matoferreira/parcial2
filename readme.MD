# Company API

This API provides endpoints to perform operations related to managing companies and associated data. It allows retrieving company information, adding new companies, and deleting existing companies.

## Endpoints

### Get All Companies

GET /companies

Retrieves a list of all companies in the agenda.

**Response**

- **Status**: 200 OK
- **Body**: An array of company objects containing the following properties:
  - `id`: number (Company ID)
  - `name`: string (Company name)
  - `webSite`: string (Company website URL)
  - `notes`: string (Additional notes about the company)

### Get Company by ID

GET /companies/:id


Retrieves detailed information about a specific company based on its ID.

**Parameters**

- `id` (required): number (Company ID)

**Response**

- **Status**: 200 OK
- **Body**: A single company object with the specified ID, containing the following properties:
  - `id`: number (Company ID)
  - `name`: string (Company name)
  - `webSite`: string (Company website URL)
  - `notes`: string (Additional notes about the company)

### Add New Company

POST /addcompany


Adds a new company to the agenda.

**Request Body**

- A JSON object representing the company to be added, with the following properties:
  - `name`: string (Company name)
  - `webSite`: string (Company website URL)
  - `notes`: string (Additional notes about the company)

**Response**

- **Status**: 200 OK
- **Body**: A success message indicating that the company was successfully added to the agenda.

### Delete Company

DELETE /deleteCompany/:id


Deletes a company from the agenda based on its ID. The company cannot be deleted if it has associated employees.

**Parameters**

- `id` (required): number (Company ID)

**Response**

- **Status**: 200 OK
- **Body**: A success message indicating that the company was successfully deleted from the agenda.

### Get All Employees

GET /employees


Retrieves a list of all employees in the agenda.

**Response**

- **Status**: 200 OK
- **Body**: An array of employee objects containing the following properties:
  - `id`: number (Employee ID)
  - `names`: string (Employee names)
  - `surnames`: string (Employee surnames)
  - `email`: string (Employee email)
  - `phoneNumber`: number (Employee phone number)
  - `company`: string (Company name associated with the employee)
  - `notes`: string (Additional notes about the employee)

### Get Employee by ID

GET /employees/:id


Retrieves detailed information about a specific employee based on their ID.

**Parameters**

- `id` (required): number (Employee ID)

**Response**

- **Status**: 200 OK
- **Body**: A single employee object with the specified ID, containing the following properties:
  - `id`: number (Employee ID)
  - `names`: string (Employee names)
  - `surnames`: string (Employee surnames)
  - `email`: string (Employee email)
  - `phoneNumber`: number (Employee phone number)
  - `company`: string (Company name associated with the employee)
  - `notes`: string (Additional notes about the employee)

### Get Employee by Name or Surname

GET /employee?name=<name>&surname=<surname>


Retrieves a list of employees based on their name and/or surname.

**Query Parameters**

- `name` (optional): string (Employee name)
- `surname` (optional): string (Employee surname)

**Response**

- **Status**: 200 OK
- **Body**: An array of employee objects matching the specified name and/or surname, containing the following properties:
  - `id`: number (Employee ID)
  - `names`: string (Employee names)
  - `surnames`: string (Employee surnames)
  - `email`: string (Employee email)
  - `phoneNumber`: number (Employee phone number)
  - `company`: string (Company name associated with the employee)
  - `notes`: string (Additional notes about the employee)

### Add New Employee

POST /addemployee


Adds a new employee to the agenda.

**Request Body**

- A JSON object representing the employee to be added, with the following properties:
  - `names`: string (Employee names)
  - `surnames`: string (Employee surnames)
  - `email`: string (Employee email)
  - `phoneNumber`: number (Employee phone number)
  - `company`: string (Company name associated with the employee)
  - `notes`: string (Additional notes about the employee)

**Response**

- **Status**: 200 OK
- **Body**: A success message indicating that the employee was successfully added to the agenda.

### Delete Employee

DELETE /deleteEmployee/:id


Deletes an employee from the agenda based on their ID.

**Parameters**

- `id` (required): number (Employee ID)

**Response**

- **Status**: 200 OK
- **Body**: A success message indicating that the employee was successfully deleted from the agenda.

## Helper Function

### generateUniqueId

This function generates a unique ID for new companies and users. The generated ID is a 4-digit number.

## Usage

1. Send HTTP requests to the provided endpoints using appropriate tools.
2. Include the necessary request parameters and bodies as described in the respective endpoints' documentation.
3. Receive the response from the server, which will contain the requested data or status messages.
