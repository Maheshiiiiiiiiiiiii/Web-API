const Schedule = require('../models/Schedule');

exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }
        res.status(200).json(schedule);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.createSchedule = async (req, res) => {
    const { trainId, routeId, date, time } = req.body;

    try {
        const newSchedule = new Schedule({ trainId, routeId, date, time });
        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.updateSchedule = async (req, res) => {
    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSchedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }
        res.status(200).json(updatedSchedule);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(req.params.id);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }
        res.status(200).json({ message: 'Schedule deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
