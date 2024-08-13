const request = require('supertest');
const app = require('../../server');
const jwt = require('jsonwebtoken');

describe('Schedule Controller', () => {
    const token = jwt.sign({ id: 'testUserId' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    it('should add a new schedule', async () => {
        const res = await request(app)
            .post('/api/schedules/add')
            .set('x-auth-token', token)
            .send({
                trainId: 'trainId123',
                date: '2024-08-13',
                time: '10:00',
                status: 'On Time',
            });
        expect(res.statusCode).toEqual(201);
    });

    it('should get all schedules', async () => {
        const res = await request(app)
            .get('/api/schedules/list')
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
    });
});
