const Schedule = require('../models/Schedule');

exports.createSchedule = async (req, res) => {
    const { trainId, departureTime, arrivalTime, days, date } = req.body;

    try {
        const schedule = new Schedule({
            trainId,
            departureTime,
            arrivalTime,
            days,
            date,
        });
        await schedule.save();
        res.status(201).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Error creating schedule', error });
    }
};

exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching schedules', error });
    }
};

exports.getScheduleById = async (req, res) => {
    const { id } = req.params;

    try {
        const schedule = await Schedule.findById(id);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching schedule', error });
    }
};
