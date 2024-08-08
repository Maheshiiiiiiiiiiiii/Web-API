# Web-API
# Train Tracking API

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

