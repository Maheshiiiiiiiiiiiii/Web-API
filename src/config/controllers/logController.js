const Log = require('../models/log');

// Create a new log entry
exports.createLog = async (req, res) => {
    try {
        const { level, message, meta } = req.body;
        const log = new Log({ level, message, meta });
        await log.save();
        res.status(201).json(log);
    } catch (error) {
        res.status(500).json({ message: 'Error creating log entry', error });
    }
};

// Get all log entries
exports.getLogs = async (req, res) => {
    try {
        const logs = await Log.find();
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving log entries', error });
    }
};

// Get a single log entry by ID
exports.getLogById = async (req, res) => {
    try {
        const log = await Log.findById(req.params.id);
        if (!log) {
            return res.status(404).json({ message: 'Log entry not found' });
        }
        res.status(200).json(log);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving log entry', error });
    }
};

// Delete a log entry by ID
exports.deleteLog = async (req, res) => {
    try {
        const log = await Log.findByIdAndDelete(req.params.id);
        if (!log) {
            return res.status(404).json({ message: 'Log entry not found' });
        }
        res.status(200).json({ message: 'Log entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting log entry', error });
    }
};