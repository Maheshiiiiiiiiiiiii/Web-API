const Log = require('../models/log.js');
const logger = require('../utils/logger');

exports.getLogs = async (req, res) => {
    try {
        const logs = await Log.find().sort({ timestamp: -1 }).limit(100);
        res.status(200).json(logs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.logMessage = async (req, res) => {
    const { level, message, meta } = req.body;
    logger.log(level, message, { meta });
    res.status(200).send('Log entry created');
};
