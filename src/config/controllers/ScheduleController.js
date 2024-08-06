const Schedule = require('../models/Schedule');
const Train = require('../models/Train');

exports.createSchedule = async (req, res) => {
  const { train_id, date, day, frequency, special } = req.body;

  try {
    const train = await Train.findById(train_id);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }

    const schedule = new Schedule({
      train: train_id,
      date,
      day,
      frequency,
      special
    });

    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ message: 'Error creating schedule', error });
  }
};

exports.getSchedule = async (req, res) => {
  try {
    const schedules = await Schedule.find().populate('train');
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedules', error });
  }
};
