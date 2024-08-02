const Engine = require('../models/Engine');

exports.addEngine = async (req, res) => {
  const { engine_id, engine_name, engine_type } = req.body;

  try {
    const engine = new Engine({ engine_id, engine_name, engine_type });
    await engine.save();
    res.status(201).json(engine);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add engine' });
  }
};

exports.getEngines = async (req, res) => {
  try {
    const engines = await Engine.find();
    res.status(200).json(engines);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch engines' });
  }
};

exports.updateEngine = async (req, res) => {
  const { id } = req.params;
  const { engine_name, engine_type } = req.body;

  try {
    const engine = await Engine.findByIdAndUpdate(id, { engine_name, engine_type }, { new: true });
    if (!engine) {
      return res.status(404).json({ error: 'Engine not found' });
    }
    res.status(200).json(engine);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update engine' });
  }
};

exports.deleteEngine = async (req, res) => {
  const { id } = req.params;

  try {
    const engine = await Engine.findByIdAndDelete(id);
    if (!engine) {
      return res.status(404).json({ error: 'Engine not found' });
    }
    res.status(200).json({ message: 'Engine deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete engine' });
  }
};
