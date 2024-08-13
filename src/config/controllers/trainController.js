const Train = require('../models/Train');

exports.getAllTrains = async (req, res) => {
    try {
        const trains = await Train.find();
        res.status(200).json(trains);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getTrainById = async (req, res) => {
    try {
        const train = await Train.findById(req.params.id);
        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }
        res.status(200).json(train);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.createTrain = async (req, res) => {
    const { name, engineId, status } = req.body;

    try {
        const newTrain = new Train({ name, engineId, status });
        await newTrain.save();
        res.status(201).json(newTrain);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.updateTrain = async (req, res) => {
    try {
        const updatedTrain = await Train.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTrain) {
            return res.status(404).json({ message: 'Train not found' });
        }
        res.status(200).json(updatedTrain);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.deleteTrain = async (req, res) => {
    try {
        const train = await Train.findByIdAndDelete(req.params.id);
        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }
        res.status(200).json({ message: 'Train deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
