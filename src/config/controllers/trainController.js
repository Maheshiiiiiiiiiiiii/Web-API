const Train = require('../models/Train');
const Location = require('../models/Location');

exports.createTrain = async (req, res) => {
    const { name, type, engines } = req.body;

    try {
        const newTrain = new Train({ name, type, engines });
        await newTrain.save();
        res.status(201).json(newTrain);
    } catch (error) {
        res.status(500).json({ message: 'Error creating train', error });
    }
};

exports.getAllTrains = async (req, res) => {
    try {
        const trains = await Train.find();
        res.status(200).json(trains);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trains', error });
    }
};

exports.getTrainById = async (req, res) => {
    const { id } = req.params;

    try {
        const train = await Train.findById(id);
        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }
        res.status(200).json(train);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching train', error });
    }
};

exports.updateTrainLocation = async (req, res) => {
    const { trainId } = req.params;
    const { latitude, longitude } = req.body;

    try {
        const location = new Location({ trainId, latitude, longitude });
        await location.save();
        res.status(201).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Error updating train location', error });
    }
};

exports.getTrainLocation = async (req, res) => {
    const { trainId } = req.params;

    try {
        const location = await Location.findOne({ trainId }).sort({ createdAt: -1 });
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching train location', error });
    }
};
