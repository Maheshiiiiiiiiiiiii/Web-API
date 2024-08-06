const Engine = require('../models/Engine');
const handleEngineChange = require('../utils/engineChangeHandler');

const getEngines = async (req, res) => {
  try {
    const engines = await Engine.find();
    res.status(200).json(engines);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching engines', error });
  }
};

const changeEngine = async (req, res) => {
  const { train_id, newEngineId } = req.body;
  try {
    await handleEngineChange(train_id, newEngineId);
    res.status(200).json({ message: 'Engine changed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error changing engine', error });
  }
};

module.exports = {
  getEngines,
  changeEngine,
};
