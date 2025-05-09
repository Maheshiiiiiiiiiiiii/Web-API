// routeController.test.js
const { createRoute, getAllRoutes } = require('./routeController');
const Route = require('../models/Route');

jest.mock('../models/Route');

describe('Route Controller', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                route_id: '1',
                start_location: 'A',
                end_location: 'B',
                stops: ['C', 'D'],
                trains: ['Train1', 'Train2']
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    describe('createRoute', () => {
        it('should create a new route and return 201 status', async () => {
            Route.prototype.save = jest.fn().mockResolvedValue(req.body);

            await createRoute(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                message: 'Route created successfully',
                route: req.body
            });
        });

        it('should return 500 status if there is an error', async () => {
            Route.prototype.save = jest.fn().mockRejectedValue(new Error('Error creating route'));

            await createRoute(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: 'Error creating route',
                error: expect.any(Error)
            });
        });
    });

    describe('getAllRoutes', () => {
        it('should return all routes and 200 status', async () => {
            const routes = [req.body];
            Route.find = jest.fn().mockResolvedValue(routes);

            await getAllRoutes(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(routes);
        });

        it('should return 500 status if there is an error', async () => {
            Route.find = jest.fn().mockRejectedValue(new Error('Error fetching routes'));

            await getAllRoutes(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: 'Error fetching routes',
                error: expect.any(Error)
            });
        });
    });
});