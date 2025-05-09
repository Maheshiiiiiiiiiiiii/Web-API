# Web-API
# Train Tracking API

## Description

This project is a Train Tracking API that allows users to track the real-time location of trains. The API provides endpoints to manage clients, trains, routes, schedules, and engine locations. The API also includes JWT-based authentication and Redis caching to improve performance.



# Web-API
# Train Tracking API

This project is a Train Tracking API that allows you to track train schedules, routes, engines, and more.

## Installation

1. Clone the repository
2. Install dependencies using `npm install`
3. Create a `.env` file in the root directory with the following content:
    ```
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1. Start the server using `npm start`
2. Use Postman or any other API client to test the endpoints

## Endpoints

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login a user
- `GET /clients`: Get all registered clients (Requires Authorization)
- `POST /clients`: Register a new client (Requires Authorization)
- `POST /engines`: Add a new engine to a train (Requires Authorization)
- `DELETE /engines/:engine_id`: Remove an engine (Requires Authorization)
- `GET /engines`: Get all engines (Requires Authorization)
- `POST /schedules`: Create a new schedule (Requires Authorization)
- `GET /schedules`: Get all schedules (Requires Authorization)
- `GET /schedules/:id`: Get a specific schedule by ID (Requires Authorization)
- `PUT /schedules/:id`: Update a schedule (Requires Authorization)
- `DELETE /schedules/:id`: Delete a schedule (Requires Authorization)
- `POST /trains`: Create a new train (Requires Authorization)
- `GET /trains`: Get all trains (Requires Authorization)
- `GET /trains/:id`: Get a specific train by ID (Requires Authorization)
- `PUT /trains/:id`: Update a train (Requires Authorization)
- `DELETE /trains/:id`: Delete a train (Requires Authorization)
- `POST /routes`: Create a new route (Requires Authorization)
- `GET /routes`: Get all routes (Requires Authorization)
- `GET /routes/:id`: Get a specific route by ID (Requires Authorization)
- `PUT /routes/:id`: Update a route (Requires Authorization)
- `DELETE /routes/:id`: Delete a route (Requires Authorization)

## License

This project is licensed under the MIT License.
# Train Tracking API

This project is a Train Tracking API that allows you to track train schedules, routes, engines, and more.


## Usage

1. Start the server using `npm start`
2. Use Postman or any other API client to test the endpoints

## Endpoints

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login a user
- `GET /clients`: Get all registered clients (Requires Authorization)
- `POST /clients`: Register a new client (Requires Authorization)
- `POST /engines`: Add a new engine to a train (Requires Authorization)
- `DELETE /engines/:engine_id`: Remove an engine (Requires Authorization)
- `GET /engines`: Get all engines (Requires Authorization)
- `POST /schedules`: Create a new schedule (Requires Authorization)
- `GET /schedules`: Get all schedules (Requires Authorization)
- `GET /schedules/:id`: Get a specific schedule by ID (Requires Authorization)
- `PUT /schedules/:id`: Update a schedule (Requires Authorization)
- `DELETE /schedules/:id`: Delete a schedule (Requires Authorization)
- `POST /trains`: Create a new train (Requires Authorization)
- `GET /trains`: Get all trains (Requires Authorization)
- `GET /trains/:id`: Get a specific train by ID (Requires Authorization)
- `PUT /trains/:id`: Update a train (Requires Authorization)
- `DELETE /trains/:id`: Delete a train (Requires Authorization)
- `POST /routes`: Create a new route (Requires Authorization)
- `GET /routes`: Get all routes (Requires Authorization)
- `GET /routes/:id`: Get a specific route by ID (Requires Authorization)
- `PUT /routes/:id`: Update a route (Requires Authorization)
- `DELETE /routes/:id`: Delete a route (Requires Authorization)

## License

This project is licensed under the MIT License.
# Train Tracking API

## Description

This project is a Train Tracking API that allows users to track the real-time location of trains. The API provides endpoints to manage clients, trains, routes, schedules, and engine locations. The API also includes JWT-based authentication and Redis caching to improve performance.

## Description

This project is a Train Tracking API that allows users to track the real-time location of trains. The API provides endpoints to manage clients, trains, routes, schedules, engines, and maintenance alerts. The API also includes JWT-based authentication and Redis caching to improve performance.
## Overview
The Train Tracking API is a RESTful web service designed for tracking trains in Sri Lanka. This application allows users to monitor train locations in real-time, view schedules, and manage train routes. The API also includes logging and monitoring features, along with optimized database queries to ensure high performance.

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Train Management**: Create and manage train records with associated routes and engines.
- **Route Management**: Define and manage routes with multiple stops.
- **Schedule Management**: Create and view train schedules.
- **Real-Time Tracking**: Track trains' real-time locations.
- **Health Checks**: Monitor the health of the API server.
- **Logging and Monitoring**: Track API performance and log important events.
- **Optimized Queries**: Enhanced performance with lean queries and other optimizations.

## Project Structure
train-tracking-api/
│
├── config/
│ └── db.js # Database connection setup
│
├── controllers/
│ ├── authController.js # Handles user authentication
│ ├── clientController.js # Manages client data
│ ├── routeController.js # Handles route operations
│ ├── scheduleController.js # Manages train schedules
│ ├── trainController.js # Handles train operations
│ ├── healthCheckController.js # API health checks
│ ├── monitoringController.js # Logs and monitors API activities
│
├── models/
│ ├── Client.js # Client model
│ ├── Engine.js # Engine model
│ ├── Route.js # Route model
│ ├── Schedule.js # Schedule model
│ ├── Train.js # Train model
│ └── Log.js # Log model for logging activities
│
├── routes/
│ ├── authRoutes.js # Routes for authentication
│ ├── clientRoutes.js # Routes for client data
│ ├── engineRoutes.js # Routes for engine management
│ ├── routeRoutes.js # Routes for routes management
│ ├── scheduleRoutes.js # Routes for schedules management
│ ├── trainRoutes.js # Routes for train management
│ ├── healthCheckRoutes.js # Routes for health checks
│ └── monitoringRoutes.js # Routes for monitoring and logs
│
├── utils/
│ ├── verifyToken.js # JWT token verification utility
│ ├── logger.js # Utility for logging activities
│ └── optimizationUtils.js # Utility for optimizing database queries
│
├── server.js # Entry point of the API server
├── .env # Environment variables
└── README.md # Project documentation

This API allows for tracking trains, managing schedules, routes, engines, and monitoring the system.

## API Endpoints

- **Auth**
  - `POST /auth/login`: User login.
  - `POST /auth/register`: User registration.

- **Clients**
  - `GET /clients`: Get all clients.
  - `POST /clients`: Add a new client.

- **Engines**
  - Engine-related routes go here.

- **Routes**
  - `GET /routes`: Get all routes.
  - `POST /routes`: Add a new route.

- **Schedules**
  - `GET /schedules`: Get all schedules.
  - `POST /schedules`: Add a new schedule.

- **Trains**
  - `GET /trains`: Get all trains.
  - `POST /trains`: Add a new train.

- **Health**
  - `GET /health`: Health check endpoint.

- **Monitoring**
  - `GET /monitoring/logs`: Get logs.
  - `POST /monitoring/logs`: Add a log entry.
# Train Tracking API - Engine Management

## Overview

The `feature/engine-management` branch focuses on managing engine-specific data within the train tracking system. This includes handling scenarios where trains have multiple engines, engine changes, and managing engine-related information.

## Features

- **Add/Update Engine Information**: Manage data for engines, including adding and updating engine details.
- **Dual Engine Support**: Handle scenarios where trains operate with two engines.
- **Engine Change Management**: Track and manage changes in engine IDs.

## Introduction
This is a train tracking API that includes features for tracking train locations, crowding levels, routes, schedules, and maintenance alerts.

## Features
- User Authentication
- Client Management
- Train Management
- Route Management
- Schedule Management
- Engine Management
- Crowding Information Tracking
- Maintenance Alerts


## API Endpoints

### Authentication
- `POST /register` - Register a new user
- `POST /login` - Login a user

### Clients
- `POST /clients` - Register a new client (requires token)
- `GET /clients` - List all clients (requires token)

### Trains
- `POST /trains` - Add a new train (requires token)
- `GET /trains` - Get all trains (requires token)

### Routes
- `POST /routes` - Add a new route (requires token)
- `GET /routes` - Get all routes (requires token)

### Schedules
- `POST /schedules` - Add a new schedule (requires token)
- `GET /schedules` - Get all schedules (requires token)

### Engines
- `POST /engines` - Add a new engine (requires token)
- `PUT /engines/:id` - Update engine status (requires token)

### Crowding Information
- `POST /crowding` - Add crowding information (requires token)
- `GET /crowding/:trainId` - Get crowding information for a train (requires token)

## Contributing
Feel free to submit issues and enhancement requests.
# Train Tracking API - Dual Engine Tracking Feature

## Overview

The `feature/dual-engine-tracking` branch adds functionality to manage and track trains with dual engines. This feature includes tracking train positions and statuses when a train is equipped with two engines and handling the dynamic switching of IoT devices.

## Features

- **Dual Engine Tracking**: Track and manage trains that have two engines, ensuring accurate reporting of their locations and statuses.
- **Dynamic IoT Device Switching**: Automatically handle scenarios where an IoT device may need to be switched off when a train has dual engines.
- **Engine ID Updates**: Maintain accurate records and updates for trains with dual engines, including changes in engine IDs.
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
## Overview

This project is a Train Tracking API system for managing and tracking trains' schedules, routes, and statuses. It provides authentication, monitoring, and logging functionalities and supports advanced features such as dual-engine tracking and maintenance alerts.

## Features

- **Authentication:** JWT-based authentication for secure access.
- **Client Management:** Manage client data with OAuth integration.
- **Route Management:** Track and manage train routes.
- **Scheduling:** Add and manage train schedules, including dual-engine support.
- **Monitoring:** Log and monitor API performance and usage.
- **Security:** API key and OAuth integration for enhanced security.
- **Health Check:** Endpoints to monitor API server status.
This project is a RESTful API for tracking trains, including their schedules, routes, engines, and more. The API also includes client management and authentication features.

## Features

- Authentication and Authorization
- Train, Route, Schedule, Engine management
- Health Check Endpoint
- JWT-based token authentication

## Technologies

- Node.js
- Express.js
- MongoDB
- JWT

#
# Train Tracking API - Dual Engine Tracking Feature

## Overview

The `feature/dual-engine-tracking` branch adds functionality to manage and track trains with dual engines. This feature includes tracking train positions and statuses when a train is equipped with two engines and handling the dynamic switching of IoT devices.

## Features

- **Dual Engine Tracking**: Track and manage trains that have two engines, ensuring accurate reporting of their locations and statuses.
- **Dynamic IoT Device Switching**: Automatically handle scenarios where an IoT device may need to be switched off when a train has dual engines.
- **Engine ID Updates**: Maintain accurate records and updates for trains with dual engines, including changes in engine IDs.
