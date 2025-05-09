// trainController.test.js
const { v4: uuidv4 } = require('uuid');
const { saveLocation, fetchTrainData } = require('./trainController');
const Location = require('../models/Location');
const Train = require('../models/Train');
const networkRetryHandler = require('../utils/networkRetryHandler');

jest.mock('../models/Location');
jest.mock('../models/Train');
jest.mock('../utils/networkRetryHandler');

describe('Train Controller', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                id: 'train123',
                timestamp: new Date(),
                latitude: 40.7128,
                longitude: -74.0060,
                speed: 60,
                direction: 'N'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    describe('saveLocation', () => {
        it('should save location and return 201 status', async () => {
            const location = {
                location_id: uuidv4(),
                train_id: req.body.id,
                timestamp: req.body.timestamp,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                speed: req.body.speed,
                direction: req.body.direction
            };

            Location.mockImplementation(() => ({
                save: jest.fn().mockResolvedValue(location)
            }));

            networkRetryHandler.mockImplementation(async (fn) => await fn());

            await saveLocation(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(location);
        });

        it('should return 500 status if there is an error', async () => {
            networkRetryHandler.mockImplementation(async () => {
                throw new Error('Failed to save location data');
            });

            await saveLocation(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to save location data' });
        });
    });

    describe('fetchTrainData', () => {
        it('should fetch all train data and return 200 status', async () => {
            const trains = [{ id: 'train123', name: 'Express' }];
            Train.find.mockResolvedValue(trains);

            await fetchTrainData(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(trains);
        });

        it('should return 500 status if there is an error', async () => {
            Train.find.mockRejectedValue(new Error('Failed to fetch train data'));

            await fetchTrainData(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch train data' });
        });
    });
});