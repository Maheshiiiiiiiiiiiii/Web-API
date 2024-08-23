const { v4: uuidv4 } = require('uuid');
const Train = require('../models/Train');
const Location = require('../models/Location');
const handleEngineChange = require('../utils/engineChangeHandler');
const networkRetryHandler = require('../utils/networkRetryHandler');

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

    // Attempt to save the location with retry mechanism
    await networkRetryHandler(async () => await location.save());

    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save location data' });
  }
};

// Fetch All Train Data think about it . how to apply on frontend
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
    await handleEngineChange(id, newEngine);
    res.status(200).json({ message: 'Engine changed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to change engine' });
  }
};
