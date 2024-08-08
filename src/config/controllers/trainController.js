const Train = require('../models/Train');
const optimizationUtils = require('../utils/optimizationUtils');

exports.getAllTrains = async (req, res) => {
    try {
        const trains = await optimizationUtils.applyQueryOptimization(Train, {});
        res.json(trains);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTrain = async (req, res) => {
    const { name, route, engines } = req.body;

    try {
        const newTrain = new Train({ name, route, engines });
        await newTrain.save();
        res.status(201).json(newTrain);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
