const Train = require('../models/Train');

exports.createTrain = async (req, res) => {
  const { name, engine_id } = req.body;

  try {
    const train = new Train({ name, engine_id });
    await train.save();
    res.status(201).json(train);
  } catch (error) {
    res.status(500).json({ message: 'Error creating train', error });
  }
};

exports.getTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trains', error });
  }
};
