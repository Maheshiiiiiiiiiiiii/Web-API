const Log = require('../models/log.js');

exports.logActivity = async (req, res) => {
    const { endpoint, method, status, responseTime } = req.body;
    try {
        const log = new Log({ endpoint, method, status, responseTime });
        await log.save();
        res.status(201).json(log);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getLogs = async (req, res) => {
    try {
        const logs = await Log.find();
        res.json(logs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
