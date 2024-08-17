const Schedule = require('../models/Schedule');

exports.addSchedule = async (req, res) => {
  const { train_id, route, departureTime, arrivalTime } = req.body;

  try {
    const schedule = new Schedule({ train_id, route, departureTime, arrivalTime });
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add schedule' });
  }
};

exports.fetchSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
};
