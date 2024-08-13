const request = require('supertest');
const app = require('../../server');

describe('API Stress Tests', () => {
    it('should handle multiple simultaneous requests', async () => {
        const promises = [];

        for (let i = 0; i < 100; i++) {
            promises.push(
                request(app).get('/api/health')
            );
        }

        const responses = await Promise.all(promises);
        responses.forEach(res => {
            expect(res.statusCode).toEqual(200);
        });
    });
});
