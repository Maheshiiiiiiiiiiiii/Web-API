const Engine = require('../models/Engine');
const Train = require('../models/Train');

const getEngines = async (req, res) => {
  try {
    const engines = await Engine.find();
    res.status(200).json(engines);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching engines', error });
  }
};

const getEngineById = async (req, res) => {
  const { id } = req.params;
  try {
    const engine = await Engine.findById(id);
    if (!engine) {
      return res.status(404).json({ message: 'Engine not found' });
    }
    res.status(200).json(engine);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching engine', error });
  }
};

const addEngine = async (req, res) => {
  const { engine_id } = req.body;

  try {
    const existingEngine = await Engine.findOne({ engine_id });
    if (existingEngine) {
      return res.status(400).json({ message: 'Engine ID already exists' });
    }

    const newEngine = new Engine({ engine_id });
    await newEngine.save();
    res.status(201).json({ message: 'Engine added successfully', engine: newEngine });
  } catch (error) {
    res.status(500).json({ message: 'Error adding engine', error });
  }
};

const updateEngineStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const engine = await Engine.findById(id);
    if (!engine) {
      return res.status(404).json({ message: 'Engine not found' });
    }

    engine.status = status;
    await engine.save();
    res.status(200).json({ message: 'Engine status updated successfully', engine });
  } catch (error) {
    res.status(500).json({ message: 'Error updating engine status', error });
  }
};

module.exports = {
  getEngines,
  getEngineById,
  addEngine,
  updateEngineStatus,
};
