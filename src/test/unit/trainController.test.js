const request = require('supertest');
const app = require('../../server');
const jwt = require('jsonwebtoken');

describe('Train Controller', () => {
    const token = jwt.sign({ id: 'testUserId' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    it('should add a new train', async () => {
        const res = await request(app)
            .post('/api/trains/add')
            .set('x-auth-token', token)
            .send({
                engineId: 'engineId123',
                routeId: 'routeId123',
                status: 'Running',
            });
        expect(res.statusCode).toEqual(201);
    });

    it('should get all trains', async () => {
        const res = await request(app)
            .get('/api/trains/list')
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
    });
});
