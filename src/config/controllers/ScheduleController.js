const Schedule = require('../models/Schedule');

exports.addSchedule = async (req, res) => {
    const { trainId, date, time, isWeekend } = req.body;
    try {
        const newSchedule = new Schedule({ trainId, date, time, isWeekend });
        await newSchedule.save();
        res.status(201).json({ message: 'Schedule added successfully', schedule: newSchedule });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the schedule' });
    }
};

exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving schedules' });
    }
};

exports.getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the schedule' });
    }
};
