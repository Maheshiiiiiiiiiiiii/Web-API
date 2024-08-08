// controllers/scheduleController.js
const Schedule = require('../models/Schedule');

exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addSchedule = async (req, res) => {
    try {
        const newSchedule = new Schedule(req.body);
        const savedSchedule = await newSchedule.save();
        res.status(201).json(savedSchedule);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
