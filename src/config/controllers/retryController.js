const Retry = require('../models/Retry');

exports.createRetryRecord = async (req, res) => {
    try {
        const { operationId, status } = req.body;

        const newRetry = new Retry({ operationId, status });
        await newRetry.save();

        res.status(201).json(newRetry);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create retry record' });
    }
};

exports.updateRetryStatus = async (req, res) => {
    try {
        const { operationId } = req.params;
        const { status } = req.body;

        const retryRecord = await Retry.findOneAndUpdate({ operationId }, { status }, { new: true });

        if (!retryRecord) {
            return res.status(404).json({ error: 'Retry record not found' });
        }

        res.status(200).json(retryRecord);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update retry status' });
    }
};

exports.incrementRetryCount = async (req, res) => {
    try {
        const { operationId } = req.params;

        const retryRecord = await Retry.findOneAndUpdate(
            { operationId },
            { $inc: { retryCount: 1 }, lastAttempt: Date.now() },
            { new: true }
        );

        if (!retryRecord) {
            return res.status(404).json({ error: 'Retry record not found' });
        }

        res.status(200).json(retryRecord);
    } catch (error) {
        res.status(500).json({ error: 'Failed to increment retry count' });
    }
};
