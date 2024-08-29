const Optimization = require('../models/Optimization');

exports.logOptimization = async (req, res) => {
    try {
        const { query, result, executionTime } = req.body;

        const newLog = new Optimization({ query, result, executionTime });
        await newLog.save();

        res.status(201).json(newLog);
    } catch (error) {
        res.status(500).json({ error: 'Failed to log optimization data' });
    }
};

exports.getOptimizationLogs = async (req, res) => {
    try {
        const logs = await Optimization.find().sort({ createdAt: -1 });

        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve optimization logs' });
    }
};
