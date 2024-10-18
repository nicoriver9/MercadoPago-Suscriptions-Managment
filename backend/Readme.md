# Donations Mercadopago Backend

This repository contains the backend code for managing donations through the Mercadopago platform. It includes functionalities for user management, subscription handling, and authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [User Management](#user-management)
  - [Authentication](#authentication)
  - [Subscription Management](#subscription-management)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository
   
2. Navigate to the project directory:
   ```bash
   cd donations-mercadopago-backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up your environment variables in a `.env` file. You can refer to the `.env.example` for the required variables.

5. Start the server:
   ```bash
   npm start
   ```

## Usage

This backend service provides endpoints for managing administrators, handling user authentication, and managing subscriptions for donations.

## API Endpoints

### User Management

- **Create Administrator**
  - **Endpoint:** `POST /administrators`
  - **Request Body:**
    ```json
    {
      "username": "admin_username",
      "password": "admin_password",
      "email": "admin_email@example.com"
    }
    ```
  - **Response:** Returns the created administrator object.

- **Delete Administrator**
  - **Endpoint:** `DELETE /administrators/:id`
  - **Response:** Returns a success message upon deactivation of the administrator.

- **Update Administrator**
  - **Endpoint:** `PUT /administrators/:id`
  - **Request Body:**
    ```json
    {
      "username": "new_username",
      "password": "new_password",
      "email": "new_email@example.com",
      "active": 1
    }
    ```
  - **Response:** Returns a success message upon updating the administrator.

- **List Administrators**
  - **Endpoint:** `GET /administrators`
  - **Response:** Returns a list of active administrators.

### Authentication

- **Login**
  - **Endpoint:** `POST /login`
  - **Request Body:**
    ```json
    {
      "username": "admin_username",
      "password": "admin_password"
    }
    ```
  - **Response:** Returns a JWT token for authenticated sessions.

### Subscription Management

- **Create Subscription**
  - **Endpoint:** `POST /subscriptions`
  - **Request Body:**
    ```json
    {
      "payer_email": "payer_email@example.com",
      "dni": "12345678",
      "transaction_amount": 100,
      "first_name": "John",
      "celnumber": "1234567890"
    }
    ```
  - **Response:** Returns the subscription details.

- **Find Subscription**
  - **Endpoint:** `GET /subscriptions`
  - **Response:** Returns a list of subscriptions.

- **Cancel Subscription**
  - **Endpoint:** `DELETE /subscriptions`
  - **Request Body:**
    ```json
    {
      "subscripcion_id": "subscription_id"
    }
    ```
  - **Response:** Returns the cancellation result.

- **Pause Subscription**
  - **Endpoint:** `POST /subscriptions/pause`
  - **Request Body:**
    ```json
    {
      "subscripcion_id": "subscription_id"
    }
    ```
  - **Response:** Returns the pause result.

- **Reactivate Subscription**
  - **Endpoint:** `POST /subscriptions/reactivate`
  - **Request Body:**
    ```json
    {
      "subscripcion_id": "subscription_id"
    }
    ```
  - **Response:** Returns the reactivation result.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
