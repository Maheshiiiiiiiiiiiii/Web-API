const Engine = require('../models/Engine'); // Assuming you have an Engine model
const Train = require('../models/Train'); // Assuming you have a Train model

const getEngines = async (req, res) => {
    try {
        const engines = await Engine.find().populate('train');
        res.status(200).json(engines);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch engines' });
    }
};

const getEngineById = async (req, res) => {
    const { id } = req.params;
    try {
        const engine = await Engine.findById(id).populate('train');
        if (!engine) {
            return res.status(404).json({ error: 'Engine not found' });
        }
        res.status(200).json(engine);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch engine' });
    }
};

const addEngine = async (req, res) => {
    const { engine_id, train, status, lastKnownLocation } = req.body;
    try {
        const newEngine = new Engine({ engine_id, train, status, lastKnownLocation });
        await newEngine.save();

        res.status(201).json({ message: 'Engine added successfully', engine: newEngine });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add engine' });
    }
};

const updateEngineStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const engine = await Engine.findByIdAndUpdate(id, { status }, { new: true }).populate('train');
        if (!engine) {
            return res.status(404).json({ error: 'Engine not found' });
        }
        res.status(200).json({ message: `Engine ${id} updated successfully`, engine });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update engine' });
    }
};

const deleteEngine = async (req, res) => {
    const { id } = req.params;
    try {
        const engine = await Engine.findByIdAndDelete(id);
        if (!engine) {
            return res.status(404).json({ error: 'Engine not found' });
        }
        res.status(200).json({ message: `Engine ${id} deleted successfully` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete engine' });
    }
};

const changeEngine = async (req, res) => {

    const { train_id } = req.params;
    const { newEngineId } = req.body;

    try {
        const train = await Train.findById(train_id);
        if (!train) {
            return res.status(404).json({ error: 'Train not found' });
        }

        const newEngine = await Engine.findById(newEngineId);

        if (!newEngine) {
            return res.status(404).json({ error: 'Engine not found' });
        }

        train.engine = newEngine._id;

        await train.save();
        res.status(200).json({ message: 'Engine changed successfully', train });
    } catch (error) {
        res.status(500).json({ error: 'Failed to change engine' });
    }
};

module.exports = {
    getEngines,
    getEngineById,
    addEngine,
    updateEngineStatus,
    deleteEngine,
    changeEngine
};