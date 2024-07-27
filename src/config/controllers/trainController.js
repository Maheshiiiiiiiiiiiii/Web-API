const Train = require('../models/Train');
const Location = require('../models/Location');
const engineChangeHandler = require('../utils/engineChangeHandler');
const networkRetryHandler = require('../utils/networkRetryHandler');
const { v4: uuidv4 } = require('uuid');

// Receive GPS Data
exports.receiveGPSData = async (req, res) => {
  const { id } = req.params;
  const { latitude, longitude, speed, direction, timestamp } = req.body;

  try {
    const location = new Location({
      location_id: uuidv4(),
      train_id: id,
      timestamp: timestamp || new Date(),
      latitude,
      longitude,
      speed,
      direction,
    });

    // Save the location with retry mechanism
    await networkRetryHandler({
      method: 'post',
      url: process.env.MONGO_URI, // Use the MongoDB URI from environment variables
      data: location
    });

    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save location data' });
  }
};

// Fetch All Train Data
exports.fetchTrainData = async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch train data' });
  }
};

// Fetch Specific Train Data
exports.fetchSpecificTrainData = async (req, res) => {
  const { id } = req.params;
  try {
    const train = await Train.findById(id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }
    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch train data' });
  }
};

// Fetch Train Location History
exports.fetchTrainLocationHistory = async (req, res) => {
  const { id } = req.params;
  try {
    const locations = await Location.find({ train_id: id }).sort({ timestamp: -1 }).limit(90 * 24 * 60);
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch location history' });
  }
};

// Change Engine
exports.changeEngine = async (req, res) => {
  const { id } = req.params;
  const { newEngine } = req.body;

  try {
    const train = await Train.findById(id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }

    await engineChangeHandler(id, newEngine);

    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ error: 'Failed to change engine' });
  }
};
