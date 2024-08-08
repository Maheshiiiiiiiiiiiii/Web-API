const Schedule = require('../models/Schedule');
const Train = require('../models/Train');

const addSchedule = async (req, res) => {
  try {
    const { trainId, date, day, time, type } = req.body;
    const train = await Train.findById(trainId);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }

    const schedule = new Schedule({ train: trainId, date, day, time, type });
    await schedule.save();

    res.status(201).json({ message: 'Schedule added successfully', schedule });
  } catch (error) {
    res.status(500).json({ message: 'Error adding schedule', error });
  }
};

const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find().populate('train');
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving schedules', error });
  }
};

module.exports = { addSchedule, getSchedules };
