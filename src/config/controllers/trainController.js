const Train = require('../models/Train');

exports.addTrain = async (req, res) => {
    const { name, engineId, routeId } = req.body;
    try {
        const newTrain = new Train({ name, engineId, routeId });
        await newTrain.save();
        res.status(201).json({ message: 'Train added successfully', train: newTrain });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the train' });
    }
};

exports.getTrains = async (req, res) => {
    try {
        const trains = await Train.find();
        res.status(200).json(trains);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving trains' });
    }
};

exports.getTrainById = async (req, res) => {
    try {
        const train = await Train.findById(req.params.id);
        if (!train) return res.status(404).json({ message: 'Train not found' });
        res.status(200).json(train);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the train' });
    }
};
