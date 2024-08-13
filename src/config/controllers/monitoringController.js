const Log = require('../models/Log');

exports.getLogs = async (req, res) => {
    try {
        const logs = await Log.find();
        res.status(200).json(logs);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.createLog = async (req, res) => {
    const { message, level } = req.body;

    try {
        const newLog = new Log({ message, level });
        await newLog.save();
        res.status(201).json(newLog);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
