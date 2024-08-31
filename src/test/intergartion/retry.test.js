const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const retryRoutes = require('../../routes/retryRoutes');
const Retry = require('../../models/Retry');

const app = express();
app.use(express.json());
app.use('/api/retry', retryRoutes);

describe('Retry Integration Tests', () => {
    describe('POST /api/retry', () => {
        it('should create a new retry record', async () => {
            const res = await request(app)
                .post('/api/retry')
                .send({
                    operationId: 'op123',
                    status: 'pending',
                });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('_id');
            expect(res.body.operationId).toBe('op123');
            expect(res.body.status).toBe('pending');
            expect(res.body.retryCount).toBe(0); // Assuming default value
        });
    });

    describe('PUT /api/retry/:operationId', () => {
        it('should update the retry status', async () => {
            const retryRecord = await Retry.create({
                operationId: 'op123',
                status: 'pending',
            });

            const res = await request(app)
                .put(`/api/retry/${retryRecord.operationId}`)
                .send({
                    status: 'completed',
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body.status).toBe('completed');
        });

        it('should return 404 if retry record not found', async () => {
            const res = await request(app)
                .put('/api/retry/nonexistent')
                .send({
                    status: 'completed',
                });

            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('error', 'Retry record not found');
        });
    });

    describe('PATCH /api/retry/increment/:operationId', () => {
        it('should increment the retry count', async () => {
            const retryRecord = await Retry.create({
                operationId: 'op123',
                status: 'pending',
                retryCount: 0,
                lastAttempt: new Date(),
            });

            const res = await request(app)
                .patch(`/api/retry/increment/${retryRecord.operationId}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body.retryCount).toBe(1);
        });

        it('should return 404 if retry record not found', async () => {
            const res = await request(app)
                .patch('/api/retry/increment/nonexistent');

            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('error', 'Retry record not found');
        });
    });
});
