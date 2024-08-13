const request = require('supertest');
const app = require('../../server');

describe('Health Check Controller', () => {
    it('should check the health of the API', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'OK');
    });
});
