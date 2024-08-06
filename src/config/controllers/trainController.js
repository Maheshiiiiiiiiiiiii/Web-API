const Train = require('../models/Train');
const Engine = require('../models/Engine');

const getTrains = async (req, res) => {
  try {
    const trains = await Train.find().populate('primary_engine secondary_engine').populate('engine_history');
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trains', error });
  }
};

const getTrainById = async (req, res) => {
  const { id } = req.params;
  try {
    const train = await Train.findById(id).populate('primary_engine secondary_engine').populate('engine_history');
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching train', error });
  }
};

const updateEngines = async (req, res) => {
  const { id } = req.params;
  const { primary_engine_id, secondary_engine_id } = req.body;

  try {
    const train = await Train.findById(id);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }

    if (primary_engine_id) {
      const primaryEngine = await Engine.findById(primary_engine_id);
      if (!primaryEngine) {
        return res.status(404).json({ message: 'Primary engine not found' });
      }
      train.primary_engine = primary_engine_id;
      primaryEngine.status = 'active';
      await primaryEngine.save();
    }

    if (secondary_engine_id) {
      const secondaryEngine = await Engine.findById(secondary_engine_id);
      if (!secondaryEngine) {
        return res.status(404).json({ message: 'Secondary engine not found' });
      }
      train.secondary_engine = secondary_engine_id;
      secondaryEngine.status = 'active';
      await secondaryEngine.save();
    }

    await train.save();
    res.status(200).json({ message: 'Engines updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating engines', error });
  }
};

module.exports = {
  getTrains,
  getTrainById,
  updateEngines,
};
