# Web-API
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


