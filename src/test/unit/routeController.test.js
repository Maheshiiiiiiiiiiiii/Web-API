const request = require('supertest');
const app = require('../../server');
const jwt = require('jsonwebtoken');

describe('Route Controller', () => {
    const token = jwt.sign({ id: 'testUserId' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    it('should add a new route', async () => {
        const res = await request(app)
            .post('/api/routes/add')
            .set('x-auth-token', token)
            .send({
                name: 'RouteName',
                start: 'StartLocation',
                end: 'EndLocation',
                waypoints: ['Waypoint1', 'Waypoint2'],
            });
        expect(res.statusCode).toEqual(201);
    });

    it('should get all routes', async () => {
        const res = await request(app)
            .get('/api/routes/list')
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
    });
});
