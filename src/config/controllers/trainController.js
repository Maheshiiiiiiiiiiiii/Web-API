const Train = require('../models/Train');
const Engine = require('../models/Engine');

const getTrains = async (req, res) => {
  try {
    const trains = await Train.find().populate('current_engine').populate('engine_history');
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trains', error });
  }
};

const getTrainById = async (req, res) => {
  const { id } = req.params;
  try {
    const train = await Train.findById(id).populate('current_engine').populate('engine_history');
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching train', error });
  }
};

module.exports = {
  getTrains,
  getTrainById,
};
