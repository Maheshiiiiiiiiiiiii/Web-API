const NetworkReliability = require('../models/NetworkReliability');

// Create a new network reliability record
exports.createNetworkReliability = async (req, res) => {
    try {
        const { checkId, status, details } = req.body;
        const networkReliability = new NetworkReliability({
            checkId,
            status,
            details
        });
        await networkReliability.save();
        res.status(201).json(networkReliability);
    } catch (error) {
        res.status(500).json({ message: 'Error creating network reliability record', error });
    }
};

// Get all network reliability records
exports.getAllNetworkReliabilities = async (req, res) => {
    try {
        const networkReliabilities = await NetworkReliability.find();
        res.status(200).json(networkReliabilities);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching network reliability records', error });
    }
};

// Get a specific network reliability record by ID
exports.getNetworkReliabilityById = async (req, res) => {
    try {
        const { id } = req.params;
        const networkReliability = await NetworkReliability.findById(id);
        if (!networkReliability) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json(networkReliability);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching network reliability record', error });
    }
};

// Update a network reliability record by ID
exports.updateNetworkReliability = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, details } = req.body;
        const networkReliability = await NetworkReliability.findByIdAndUpdate(id, { status, details }, { new: true });
        if (!networkReliability) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json(networkReliability);
    } catch (error) {
        res.status(500).json({ message: 'Error updating network reliability record', error });
    }
};

// Delete a network reliability record by ID
exports.deleteNetworkReliability = async (req, res) => {
    try {
        const { id } = req.params;
        const networkReliability = await NetworkReliability.findByIdAndDelete(id);
        if (!networkReliability) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting network reliability record', error });
    }
};
