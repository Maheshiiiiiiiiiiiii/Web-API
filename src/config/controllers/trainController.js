const Train = require('../models/Train');

const addTrain = async (req, res) => {
  try {
    const { name, engineId } = req.body;
    const newTrain = new Train({ name, current_engine: engineId, engine_history: [engineId] });
    await newTrain.save();
    res.status(201).json({ message: 'Train added successfully', newTrain });
  } catch (error) {
    res.status(500).json({ message: 'Error adding train', error });
  }
};

const getTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving trains', error });
  }
};

module.exports = { addTrain, getTrains };
