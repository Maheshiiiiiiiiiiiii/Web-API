const request = require('supertest');
const express = require('express');
const maintenanceAlertRoutes = require('../../routes/maintenanceAlertRoutes');
const MaintenanceAlert = require('../../models/MaintenanceAlert');

const app = express();
app.use(express.json());
app.use('/api/alerts', maintenanceAlertRoutes);

describe('MaintenanceAlert Integration Tests', () => {
    describe('POST /api/alerts', () => {
        it('should create a new maintenance alert', async () => {
            const res = await request(app)
                .post('/api/alerts')
                .send({
                    trainId: 'train123',
                    description: 'Engine maintenance required',
                    alertDate: '2024-05-01',
                });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('_id');
            expect(res.body.trainId).toBe('train123');
            expect(res.body.description).toBe('Engine maintenance required');
            expect(new Date(res.body.alertDate)).toEqual(new Date('2024-05-01'));
        });
    });

    describe('GET /api/alerts', () => {
        it('should retrieve all maintenance alerts', async () => {
            // Seed the database with a maintenance alert
            await MaintenanceAlert.create({
                trainId: 'train123',
                description: 'Engine maintenance required',
                alertDate: '2024-05-01',
            });

            const res = await request(app).get('/api/alerts');

            expect(res.statusCode).toEqual(200);
            expect(Array.isArray(res.body)).toBeTruthy();
            expect(res.body.length).toBe(1);
            expect(res.body[0].trainId).toBe('train123');
        });
    });

    describe('GET /api/alerts/:id', () => {
        it('should retrieve a maintenance alert by ID', async () => {
            const alert = await MaintenanceAlert.create({
                trainId: 'train123',
                description: 'Engine maintenance required',
                alertDate: '2024-05-01',
            });

            const res = await request(app).get(`/api/alerts/${alert._id}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body.trainId).toBe('train123');
        });

        it('should return 404 if alert not found', async () => {
            const nonExistentId = new mongoose.Types.ObjectId();
            const res = await request(app).get(`/api/alerts/${nonExistentId}`);

            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Alert not found');
        });
    });

    describe('PUT /api/alerts/:id', () => {
        it('should update a maintenance alert', async () => {
            const alert = await MaintenanceAlert.create({
                trainId: 'train123',
                description: 'Engine maintenance required',
                alertDate: '2024-05-01',
            });

            const res = await request(app)
                .put(`/api/alerts/${alert._id}`)
                .send({
                    description: 'Updated description',
                    alertDate: '2024-06-01',
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body.description).toBe('Updated description');
            expect(new Date(res.body.alertDate)).toEqual(new Date('2024-06-01'));
        });

        it('should return 404 if alert to update is not found', async () => {
            const nonExistentId = new mongoose.Types.ObjectId();
            const res = await request(app)
                .put(`/api/alerts/${nonExistentId}`)
                .send({
                    description: 'Updated description',
                    alertDate: '2024-06-01',
                });

            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Alert not found');
        });
    });

    describe('DELETE /api/alerts/:id', () => {
        it('should delete a maintenance alert', async () => {
            const alert = await MaintenanceAlert.create({
                trainId: 'train123',
                description: 'Engine maintenance required',
                alertDate: '2024-05-01',
            });

            const res = await request(app).delete(`/api/alerts/${alert._id}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('message', 'Alert deleted successfully');

            const deletedAlert = await MaintenanceAlert.findById(alert._id);
            expect(deletedAlert).toBeNull();
        });

        it('should return 404 if alert to delete is not found', async () => {
            const nonExistentId = new mongoose.Types.ObjectId();
            const res = await request(app).delete(`/api/alerts/${nonExistentId}`);

            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Alert not found');
        });
    });
});
