const Train = require('../models/Train');
const { setCache, getCache } = require('../utils/cache');

exports.getTrainLocation = async (req, res) => {
    const { trainId } = req.params;

    getCache(`trainLocation:${trainId}`, async (err, cachedData) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (cachedData) {
            return res.status(200).json(cachedData);
        }

        try {
            const train = await Train.findById(trainId).populate('engines');
            if (!train) {
                return res.status(404).json({ message: 'Train not found' });
            }

            const trainLocation = {
                id: train._id,
                name: train.name,
                engines: train.engines,
                lastKnownLocation: train.lastKnownLocation // Assuming this field exists
            };

            setCache(`trainLocation:${trainId}`, trainLocation);

            res.status(200).json(trainLocation);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching train location', error });
        }
    });
};

exports.createTrain = async (req, res) => {
    const { name, engines, lastKnownLocation } = req.body;

    try {
        const train = new Train({
            name,
            engines,
            lastKnownLocation
        });
        await train.save();
        res.status(201).json(train);
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
        const train = await Train.findById(id).populate('engines');
        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }
        res.status(200).json(train);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching train', error });
    }
};
