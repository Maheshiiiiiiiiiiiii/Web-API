const Train = require('../models/Train');

exports.createTrain = async (req, res) => {
    const { name, type } = req.body;

    try {
        const train = new Train({ name, type });
        await train.save();
        res.status(201).json({ message: 'Train created successfully', train });
    } catch (error) {
        res.status(500).json({ message: 'Error creating train', error });
    }
};

exports.getTrains = async (req, res) => {
    try {
        const trains = await Train.find().populate('schedules').populate('engines');
        res.status(200).json(trains);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trains', error });
    }
};

exports.getTrainById = async (req, res) => {
    const { id } = req.params;

    try {
        const train = await Train.findById(id).populate('schedules').populate('engines');
        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }
        res.status(200).json(train);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching train', error });
    }
};

exports.updateTrain = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const train = await Train.findByIdAndUpdate(id, updates, { new: true });
        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }
        res.status(200).json({ message: 'Train updated successfully', train });
    } catch (error) {
        res.status(500).json({ message: 'Error updating train', error });
    }
};

exports.deleteTrain = async (req, res) => {
    const { id } = req.params;

    try {
        const train = await Train.findByIdAndDelete(id);
        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }
        res.status(200).json({ message: 'Train deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting train', error });
    }
};
