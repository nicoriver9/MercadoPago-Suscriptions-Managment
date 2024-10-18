# Donation Management System

This repository contains the frontend code for a Donation Management System, which allows users to view and manage donations through a user-friendly interface. The application is built using React and provides a seamless experience for both administrators and users.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Donation Component](#donation-component)
  - [Navbar Component](#navbar-component)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository   

2. Navigate to the project directory:
   ```bash
   cd donation-management-system
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

This application allows users to view donation details and provides a navigation bar for easy access to different sections of the application. The main components include:

### Components

#### Donation Component

The `Donation` component is responsible for displaying individual donation details in a tabular format. It receives a `donations` object as a prop and renders the following information:

- Payer's first name
- Payer's email
- DNI (Document Number)
- Cell number
- Transaction amount
- Date created
- End date

Example usage:

<Donation donations={donationData} />

#### Navbar Component

The `Navbar` component provides navigation links and actions based on the user's authentication state. It includes:

- A logo and title for the application.
- Links for logging in or logging out, depending on the `buttonAction` prop.

Example usage:


<Navbar buttonAction="login" />



### Props

- **Donation Component**
  - `donations`: An object containing donation details.

- **Navbar Component**
  - `buttonAction`: A string that determines the action to display in the navbar. Acceptable values are `"login"`, `"logout"`, or `"none"`.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.