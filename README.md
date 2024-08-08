# Web-API
# Train Tracking API

## Overview

The Train Tracking API is a comprehensive solution for tracking trains, managing schedules, routes, and handling user authentication. This documentation covers the setup, usage, and details about the authentication feature added in the `feature/authentication` branch.

## Features

- **User Registration**: Allows users to register with an email and password.
- **User Login**: Authenticates users and provides a JWT for secure access.
- **JWT Authentication**: Uses JSON Web Tokens (JWT) for secure API access.

## File Structure

```plaintext
train-tracking-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js        # Controller for Authentication
│   ├── clientController.js
│   ├── routeController.js
│   ├── scheduleController.js
│   ├── trainController.js
│   ├── healthCheckController.js
│   ├── monitoringController.js
│
├── models/
│   ├── Client.js
│   ├── Engine.js
│   ├── Route.js
│   ├── Schedule.js
│   ├── Train.js
│   └── User.js                  # User Model for Authentication
│
├── routes/
│   ├── authRoutes.js            # Routes for Authentication
│   ├── clientRoutes.js
│   ├── engineRoutes.js
│   ├── routeRoutes.js
│   ├── scheduleRoutes.js
│   ├── trainRoutes.js
│   ├── healthCheckRoutes.js
│   └── monitoringRoutes.js
│
├── utils/
│   ├── verifyToken.js           # Utility to Verify JWT
│   └── logger.js
│
├── server.js                    # Entry Point of the API Server
├── .env                         # Environment Variables
└── README.md                    # Project Documentation
