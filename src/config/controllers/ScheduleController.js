const Schedule = require('../models/Schedule');

exports.addSchedule = async (req, res) => {
    const { trainId, date, time, status } = req.body;
    try {
        const schedule = new Schedule({ trainId, date, time, status });
        await schedule.save();
        res.status(201).json(schedule);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.json(schedules);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
