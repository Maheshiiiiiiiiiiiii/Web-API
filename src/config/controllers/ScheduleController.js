const Schedule = require('../models/Schedule');
const Train = require('../models/Train');
const Location = require('../models/Location');
const handleEngineChange = require('../utils/engineChangeHandler');
const networkRetryHandler = require('../utils/networkRetryHandler');
const { v4: uuidv4 } = require('uuid');



// Update Schedule
exports.updateSchedule = async (req, res) => {
  const { id } = req.params;
  const { date, day, frequency, special } = req.body;

  try {
    // Find and update the schedule
    const schedule = await Schedule.findByIdAndUpdate(id, {
      date,
      day,
      frequency,
      special
    }, { new: true });

    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }

    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update schedule' });
  }
};




// Fetch Specific Schedule
exports.fetchSchedules = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch schedule' });
  }
};

// Manage Engine ID and IoT Device


/*
exports.manageEngineAndIoT = async (req, res) => {
  const { train_id, newEngine } = req.body;

  try {
    const train = await Train.findById(train_id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }

    // Handle engine change
    await handleEngineChange(train_id, newEngine);

    // Check if train has two engines
    if (train.engines.length > 1) {
      // Logic to switch off one IoT device
      const deviceToSwitchOff = train.engines[1].iot_device; // Example logic
      await networkRetryHandler({
        method: 'post',
        url: `${process.env.IOT_API_URL}/switch-off/${deviceToSwitchOff}`
      });

      // Optionally, remove the engine or mark it as inactive
      train.engines[1].active = false;
      await train.save();
    }

    res.status(200).json({ message: 'Engine updated and IoT device managed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to manage engine and IoT device' });
  }
};

// Add Schedule
exports.addSchedule = async (req, res) => {
  const { train_id, date, day, frequency, special } = req.body;

  try {
    // Find the train
    const train = await Train.findById(train_id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }

    // Create a new schedule
    const schedule = new Schedule({
      schedule_id: uuidv4(),
      train_id,
      date,
      day,
      frequency, // daily, weekdays, weekends
      special,   // special train information
    });

    // Save the schedule
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add schedule' });
  }
};
*/

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
