const MaintenanceAlert = require('../models/MaintenanceAlert');

exports.createAlert = async (req, res) => {
    const { trainId, description, alertDate } = req.body;

    try {
        const alert = new MaintenanceAlert({
            trainId,
            description,
            alertDate,
        });

        await alert.save();
        res.status(201).json(alert);
    } catch (error) {
        res.status(500).json({ message: 'Error creating alert', error });
    }
};

exports.getAllAlerts = async (req, res) => {
    try {
        const alerts = await MaintenanceAlert.find();
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching alerts', error });
    }
};

exports.getAlertById = async (req, res) => {
    const { id } = req.params;

    try {
        const alert = await MaintenanceAlert.findById(id);
        if (!alert) {
            return res.status(404).json({ message: 'Alert not found' });
        }
        res.status(200).json(alert);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching alert', error });
    }
};

exports.updateAlert = async (req, res) => {
    const { id } = req.params;
    const { description, alertDate } = req.body;

    try {
        const alert = await MaintenanceAlert.findByIdAndUpdate(
            id,
            { description, alertDate },
            { new: true }
        );
        if (!alert) {
            return res.status(404).json({ message: 'Alert not found' });
        }
        res.status(200).json(alert);
    } catch (error) {
        res.status(500).json({ message: 'Error updating alert', error });
    }
};

exports.deleteAlert = async (req, res) => {
    const { id } = req.params;

    try {
        const alert = await MaintenanceAlert.findByIdAndDelete(id);
        if (!alert) {
            return res.status(404).json({ message: 'Alert not found' });
        }
        res.status(200).json({ message: 'Alert deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting alert', error });
    }
};
