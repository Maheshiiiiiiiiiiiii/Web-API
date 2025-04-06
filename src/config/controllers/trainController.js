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
    // Validate required fields
    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    // Validate data types
    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ error: 'Latitude and longitude must be numbers' });
    }

    // Find the train to get its primary engine
    const train = await Train.findById(id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }

    if (!train.primary_engine) {
      return res.status(400).json({ error: 'Train has no primary engine assigned' });
    }

    const location = new Location({
      location_id: uuidv4(),
      train_id: id,
      engine_id: train.primary_engine.toString(),
      timestamp: timestamp || new Date(),
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      speed: speed ? parseFloat(speed) : 0,
      direction: direction ? parseFloat(direction) : 0,
    });

    console.log('Attempting to save location data:', {
      train_id: id,
      engine_id: train.primary_engine,
      latitude,
      longitude,
      speed,
      direction,
      timestamp: location.timestamp
    });

    // Save the location directly
    await location.save();

    console.log('Location data saved successfully');
    res.status(201).json(location);
  } catch (error) {
    console.error('Error saving location data:', error);
    res.status(500).json({ 
      error: 'Failed to save location data',
      details: error.message 
    });
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

// Fetch Specific Train Data by ID
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
    const locations = await Location.find({ train_id: id }).sort({ timestamp: -1 });
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch location history' });
  }
};

// Change Engine
exports.changeEngine = async (req, res) => {
  const { id } = req.params;
  const { newEngineId } = req.body;

  try {
    await handleEngineChange(id, newEngineId);
    res.status(200).json({ message: 'Engine changed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to change engine' });
  }
};

// Create Train
exports.createTrain = async (req, res) => {
  const { name, type, status } = req.body;

  try {
    const train = new Train({
      train_id: uuidv4(),
      name,
      type,
      status,
    });

    await train.save();
    res.status(201).json(train);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create train' });
  }
};

// Get All Trains
exports.getTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trains' });
  }
};

// Get Train by ID
exports.getTrainById = async (req, res) => {
  const { id } = req.params;

  try {
    const train = await Train.findById(id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }
    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch train' });
  }
};

// Update Train Live
exports.updateTrainLive = async (req, res) => {
  const { id } = req.params;
  const { lat, lng } = req.body;

  try {
    const train = await Train.findById(id);
    train.current_location = [lat, lng]
    await train.updateOne(id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }
    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch train' });
  }
};

// Update Train
exports.updateTrain = async (req, res) => {
  const { id } = req.params;
  const { name, type, status } = req.body;

  try {
    const train = await Train.findByIdAndUpdate(id, { name, type, status }, { new: true });
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }
    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update train' });
  }
};

// Delete Train
exports.deleteTrain = async (req, res) => {
  const { id } = req.params;

  try {
    const train = await Train.findByIdAndDelete(id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }
    res.status(200).json({ message: 'Train deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete train' });
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

// Change Engine..... remove
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
