const MaintenanceAlert = require('../models/MaintenanceAlert');

// Create a new maintenance alert
exports.createMaintenanceAlert = async (req, res) => {
    try {
        const newAlert = new MaintenanceAlert(req.body);
        await newAlert.save();
        res.status(201).json(newAlert);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create maintenance alert' });
    }
};

// Get all maintenance alerts
exports.getAllMaintenanceAlerts = async (req, res) => {
    try {
        const alerts = await MaintenanceAlert.find().populate('trainId');
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve maintenance alerts' });
    }
};

// Get a specific maintenance alert by ID
exports.getMaintenanceAlertById = async (req, res) => {
    try {
        const alert = await MaintenanceAlert.findById(req.params.id).populate('trainId');
        if (!alert) {
            return res.status(404).json({ error: 'Maintenance alert not found' });
        }
        res.status(200).json(alert);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve maintenance alert' });
    }
};

// Update a maintenance alert
exports.updateMaintenanceAlert = async (req, res) => {
    try {
        const updatedAlert = await MaintenanceAlert.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAlert) {
            return res.status(404).json({ error: 'Maintenance alert not found' });
        }
        res.status(200).json(updatedAlert);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update maintenance alert' });
    }
};

// Delete a maintenance alert
exports.deleteMaintenanceAlert = async (req, res) => {
    try {
        const deletedAlert = await MaintenanceAlert.findByIdAndDelete(req.params.id);
        if (!deletedAlert) {
            return res.status(404).json({ error: 'Maintenance alert not found' });
        }
        res.status(200).json({ message: 'Maintenance alert deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete maintenance alert' });
    }
};
