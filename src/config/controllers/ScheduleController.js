const Schedule = require('../models/Schedule');

exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find({});
        res.json(schedules);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createSchedule = async (req, res) => {
    const { train, route, time } = req.body;

    try {
        const newSchedule = new Schedule({ train, route, time });
        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
