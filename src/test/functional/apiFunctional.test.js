const request = require('supertest');
const app = require('../../server');

describe('API Functional Tests', () => {
    it('should register, login, and perform a full API flow', async () => {
        const registerRes = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                password: 'password123',
            });
        expect(registerRes.statusCode).toEqual(201);
        const token = registerRes.body.token;

        const loginRes = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'password123',
            });
        expect(loginRes.statusCode).toEqual(200);

        const addClientRes = await request(app)
            .post('/api/clients')
            .set('x-auth-token', token)
            .send({
                name: 'ClientName',
                email: 'client@example.com',
                apiKey: 'apiKey123',
            });
        expect(addClientRes.statusCode).toEqual(201);

        const listClientsRes = await request(app)
            .get('/api/clients')
            .set('x-auth-token', token);
        expect(listClientsRes.statusCode).toEqual(200);
    });
});
