const Train = require('../models/Train');

exports.addTrain = async (req, res) => {
    const { engineId, routeId, status } = req.body;
    try {
        const train = new Train({ engineId, routeId, status });
        await train.save();
        res.status(201).json(train);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTrains = async (req, res) => {
    try {
        const trains = await Train.find().populate('routeId').populate('engineId');
        res.json(trains);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
