# MercadoPago Subscriptions Management

MercadoPago Subscriptions Management is a comprehensive application designed to manage subscriptions and donations through the MercadoPago platform. This application consists of a frontend built with React and a backend that handles data processing and API interactions.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Frontend](#frontend)
- [Backend](#backend)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

The MercadoPago Subscriptions Management application allows users to:

- Manage subscriptions and donations.
- View detailed information about each donation.
- Authenticate users and manage administrator access.

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/nicoriver9/MercadoPago-Suscriptions-Management.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MercadoPago-Suscriptions-Management
   ```

3. Install the dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Set up your environment variables in a `.env` file for the backend. Refer to the `.env.example` for required variables.

5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

6. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

The application provides a user-friendly interface for managing subscriptions. Users can log in, view donation details, and manage subscriptions through the frontend. The backend handles all data processing and API requests.

### Frontend

The frontend is built using React and includes components for:

- Displaying donation details.
- User authentication.
- Navigation through different sections of the application.

### Backend

The backend is built using Node.js and Express, providing RESTful API endpoints for:

- User management.
- Subscription management.
- Donation processing.

## Testing

Currently, the application lacks a comprehensive testing suite. It is recommended to implement testing using Jest to ensure the reliability and stability of both the frontend and backend components.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
