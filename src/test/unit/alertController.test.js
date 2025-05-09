// alertController.test.js
const { createAlert, getAllAlerts, getAlertById, updateAlert, deleteAlert } = require('../../config/controllers/alertController');
const MaintenanceAlert = require('../../config/models/MaintenanceAlert');

jest.mock('../models/MaintenanceAlert');

describe('Alert Controller', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                trainId: 'train123',
                description: 'Test alert',
                alertDate: '2023-10-01'
            },
            params: {
                id: 'alertId'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    describe('createAlert', () => {
        it('should create a new alert and return 201 status', async () => {
            MaintenanceAlert.mockImplementation(() => ({
                save: jest.fn().mockResolvedValue(req.body)
            }));

            await createAlert(req, res);

            expect(MaintenanceAlert).toHaveBeenCalledWith(req.body);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(req.body);
        });

        it('should return 500 status if there is an error', async () => {
            MaintenanceAlert.mockImplementation(() => ({
                save: jest.fn().mockRejectedValue(new Error('Save error'))
            }));

            await createAlert(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error creating alert', error: expect.any(Error) });
        });
    });

    describe('getAllAlerts', () => {
        it('should fetch all alerts and return 200 status', async () => {
            const alerts = [req.body];
            MaintenanceAlert.find.mockResolvedValue(alerts);

            await getAllAlerts(req, res);

            expect(MaintenanceAlert.find).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(alerts);
        });

        it('should return 500 status if there is an error', async () => {
            MaintenanceAlert.find.mockRejectedValue(new Error('Find error'));

            await getAllAlerts(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching alerts', error: expect.any(Error) });
        });
    });

    describe('getAlertById', () => {
        it('should fetch an alert by ID and return 200 status', async () => {
            MaintenanceAlert.findById.mockResolvedValue(req.body);

            await getAlertById(req, res);

            expect(MaintenanceAlert.findById).toHaveBeenCalledWith('alertId');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(req.body);
        });

        it('should return 404 status if alert is not found', async () => {
            MaintenanceAlert.findById.mockResolvedValue(null);

            await getAlertById(req, res);

            expect(MaintenanceAlert.findById).toHaveBeenCalledWith('alertId');
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Alert not found' });
        });

        it('should return 500 status if there is an error', async () => {
            MaintenanceAlert.findById.mockRejectedValue(new Error('FindById error'));

            await getAlertById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching alert', error: expect.any(Error) });
        });
    });

    describe('updateAlert', () => {
        it('should update an alert and return 200 status', async () => {
            MaintenanceAlert.findByIdAndUpdate.mockResolvedValue(req.body);

            await updateAlert(req, res);

            expect(MaintenanceAlert.findByIdAndUpdate).toHaveBeenCalledWith('alertId', { description: 'Test alert', alertDate: '2023-10-01' }, { new: true });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(req.body);
        });

        it('should return 404 status if alert is not found', async () => {
            MaintenanceAlert.findByIdAndUpdate.mockResolvedValue(null);

            await updateAlert(req, res);

            expect(MaintenanceAlert.findByIdAndUpdate).toHaveBeenCalledWith('alertId', { description: 'Test alert', alertDate: '2023-10-01' }, { new: true });
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Alert not found' });
        });

        it('should return 500 status if there is an error', async () => {
            MaintenanceAlert.findByIdAndUpdate.mockRejectedValue(new Error('Update error'));

            await updateAlert(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error updating alert', error: expect.any(Error) });
        });
    });

    describe('deleteAlert', () => {
        it('should delete an alert and return 200 status', async () => {
            MaintenanceAlert.findByIdAndDelete.mockResolvedValue(req.body);

            await deleteAlert(req, res);

            expect(MaintenanceAlert.findByIdAndDelete).toHaveBeenCalledWith('alertId');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Alert deleted successfully' });
        });

        it('should return 404 status if alert is not found', async () => {
            MaintenanceAlert.findByIdAndDelete.mockResolvedValue(null);

            await deleteAlert(req, res);

            expect(MaintenanceAlert.findByIdAndDelete).toHaveBeenCalledWith('alertId');
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Alert not found' });
        });

        it('should return 500 status if there is an error', async () => {
            MaintenanceAlert.findByIdAndDelete.mockRejectedValue(new Error('Delete error'));

            await deleteAlert(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error deleting alert', error: expect.any(Error) });
        });
    });
});