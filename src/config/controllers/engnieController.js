const Engine = require('../models/Engine');
const Train = require('../models/Train');


const getEngines = async (req, res) => {
  try {
    const engines = await Engine.find();
    res.status(200).json({ engines });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get engines' });
  }
};

const getEngineById = async (req, res) => {
  const { id } = req.params;
  try {
    const engine = await Engine.findById(id);
    if (!engine) {
      return res.status(404).json({ error: 'Engine not found' });
    }
    res.status(200).json({ engine });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get engine' });
  }
};

const addEngine = async (req, res) => {
  const { name, status } = req.body;
  try {
    const newEngine = new Engine({ name, status });
    await newEngine.save();
    res.status(201).json({ message: 'Engine added successfully', engine: newEngine });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add engine' });
  }
};

const updateEngineStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const engine = await Engine.findByIdAndUpdate(id, { status }, { new: true });
    if (!engine) {
      return res.status(404).json({ error: 'Engine not found' });
    }
    res.status(200).json({ message: `Engine ${id} updated successfully`, engine });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update engine' });
  }
};

const deleteEngine = async (req, res) => {
  const { id } = req.params;
  try {
    const engine = await Engine.findByIdAndDelete(id);
    if (!engine) {
      return res.status(404).json({ error: 'Engine not found' });
    }
    res.status(200).json({ message: `Engine ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete engine' });
  }
};

const changeEngine = async (req, res) => {
  const { train_id, newEngine } = req.body;
  try {
    const train = await Train.findById(train_id);
    if (!train) {
      return res.status(404).json({ error: 'Train not found' });
    }
    train.engine = newEngine;
    await train.save();
    res.status(200).json({ message: 'Engine changed successfully', train });
  } catch (error) {
    res.status(500).json({ error: 'Failed to change engine' });
  }
};

module.exports = {
  getEngines,
  getEngineById,
  addEngine,
  updateEngineStatus,
  deleteEngine,
  changeEngine,
};