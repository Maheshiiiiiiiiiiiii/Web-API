# Web-API
# Train Tracking API

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
