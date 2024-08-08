const Log = require('../models/log.js');

exports.getLogs = async (req, res) => {
    try {
        const logs = await Log.find({}).limit(100).sort({ createdAt: -1 }).exec();
        res.json(logs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
