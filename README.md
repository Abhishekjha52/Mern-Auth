# MERN Authentication Project

This project is a MERN (MongoDB, Express.js, React.js, Node.js) stack application for user authentication.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is aimed at providing a robust user authentication system using the MERN stack. It incorporates user registration, login, logout, and password reset functionalities. With this project, developers can quickly set up a secure authentication system for their web applications.

## Features

- User registration with email verification.
- User login with JWT (JSON Web Tokens) authentication.
- Password hashing for enhanced security.
- Password reset functionality via email.
- User logout functionality.
- Error handling and validation.

## Setup

### Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhishekjha52/Mern-Auth.git

2. Navigate to the project directory:

  ```bash
  cd Mern-Auth

3. Install dependencies:

  ```bash
  npm install

## Usage

1. Set up your MongoDB database and configure the connection string in `config/default.json`.

2. Configure other environment variables in `config/default.json` as needed.

3. Run the application:

npm start

4. The server should start running. Access the application in your browser at `http://localhost:3000`.

5. Register a new user, login, and explore the authentication functionalities.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## License

This project is licensed under the [MIT License](LICENSE).
