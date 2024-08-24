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
