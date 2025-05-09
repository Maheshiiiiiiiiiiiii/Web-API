const ApiKey = require('../models/apiKey');

// Create a new API key
exports.createApiKey = async (req, res) => {
    try {
        const { key, clientId, expiresAt } = req.body;
        const apiKey = new ApiKey({ key, clientId, expiresAt });
        await apiKey.save();
        res.status(201).json(apiKey);
    } catch (error) {
        res.status(500).json({ message: 'Error creating API key', error });
    }
};

// Get all API keys
exports.getApiKeys = async (req, res) => {
    try {
        const apiKeys = await ApiKey.find().populate('clientId');
        res.status(200).json(apiKeys);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving API keys', error });
    }
};

// Get a single API key by ID
exports.getApiKeyById = async (req, res) => {
    try {
        const apiKey = await ApiKey.findById(req.params.id).populate('clientId');
        if (!apiKey) {
            return res.status(404).json({ message: 'API key not found' });
        }
        res.status(200).json(apiKey);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving API key', error });
    }
};

// Delete an API key by ID
exports.deleteApiKey = async (req, res) => {
    try {
        const apiKey = await ApiKey.findByIdAndDelete(req.params.id);
        if (!apiKey) {
            return res.status(404).json({ message: 'API key not found' });
        }
        res.status(200).json({ message: 'API key deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting API key', error });
    }
};