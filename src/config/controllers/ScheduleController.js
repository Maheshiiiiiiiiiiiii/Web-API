const Schedule = require('../models/Schedule');

exports.createSchedule = async (req, res) => {
    const { trainId, departureTime, arrivalTime } = req.body;

    try {
        const newSchedule = new Schedule({ trainId, departureTime, arrivalTime });
        await newSchedule.save();
        res.status(201).json(newSchedule);
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

exports.createSchedule = async (req, res) => {
    const { trainId, routeId, departureTime, arrivalTime, date, dayType } = req.body;
    
    try {
        const schedule = new Schedule({ trainId, routeId, departureTime, arrivalTime, date, dayType });
        await schedule.save();
        res.status(201).json({ message: 'Schedule created successfully', schedule });
    } catch (error) {
        res.status(500).json({ message: 'Error creating schedule', error });
    }
};

exports.updateSchedule = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    
    try {
        const schedule = await Schedule.findByIdAndUpdate(id, updates, { new: true });
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }
        res.status(200).json({ message: 'Schedule updated successfully', schedule });
    } catch (error) {
        res.status500.json({ message: 'Error updating schedule', error });
    }
};

exports.deleteSchedule = async (req, res) => {
    const { id } = req.params;
    
    try {
        const schedule = await Schedule.findByIdAndDelete(id);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }
        res.status(200).json({ message: 'Schedule deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting schedule', error });
    }
};
