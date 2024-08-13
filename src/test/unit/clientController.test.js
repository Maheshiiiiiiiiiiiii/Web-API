const request = require('supertest');
const app = require('../../server');
const jwt = require('jsonwebtoken');

describe('Client Controller', () => {
    const token = jwt.sign({ id: 'testUserId' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    it('should list all clients', async () => {
        const res = await request(app)
            .get('/api/clients')
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
    });

    it('should register a new client', async () => {
        const res = await request(app)
            .post('/api/clients')
            .set('x-auth-token', token)
            .send({
                name: 'ClientName',
                email: 'client@example.com',
                apiKey: 'apiKey123',
            });
        expect(res.statusCode).toEqual(201);
    });
});
