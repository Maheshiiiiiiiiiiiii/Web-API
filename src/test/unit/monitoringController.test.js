const request = require('supertest');
const app = require('../../server');
const jwt = require('jsonwebtoken');

describe('Monitoring Controller', () => {
    const token = jwt.sign({ id: 'testUserId' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    it('should log an activity', async () => {
        const res = await request(app)
            .post('/api/monitoring/log')
            .set('x-auth-token', token)
            .send({
                endpoint: '/api/test',
                method: 'GET',
                status: '200',
                responseTime: 50,
            });
        expect(res.statusCode).toEqual(201);
    });

    it('should get all logs', async () => {
        const res = await request(app)
            .get('/api/monitoring/logs')
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
    });
});
