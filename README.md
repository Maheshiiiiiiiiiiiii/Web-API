# Web-API
# Train Tracking API

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
