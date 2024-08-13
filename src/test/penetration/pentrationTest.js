const request = require('supertest');
const app = require('../../server');

describe('API Penetration Tests', () => {
    it('should prevent SQL injection attacks', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                username: "' OR 1=1; --",
                password: 'password123',
            });
        expect(res.statusCode).toEqual(401);
    });

    it('should prevent XSS attacks', async () => {
        const res = await request(app)
            .post('/api/clients')
            .send({
                name: "<script>alert('XSS')</script>",
                email: 'client@example.com',
                apiKey: 'apiKey123',
            });
        expect(res.statusCode).toEqual(400);
    });
});
