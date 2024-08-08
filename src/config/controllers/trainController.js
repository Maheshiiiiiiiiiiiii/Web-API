const Train = require('../models/Train');

exports.getTrains = async (req, res) => {
    try {
        const trains = await Train.find();
        res.status(200).json(trains);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addTrain = async (req, res) => {
    try {
        const newTrain = new Train(req.body);
        const savedTrain = await newTrain.save();
        res.status(201).json(savedTrain);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
