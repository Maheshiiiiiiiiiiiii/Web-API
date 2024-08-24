const Train = require('../models/Train');
const Engine = require('../models/Engine');

exports.addEngine = async (req, res) => {
    const { train_id, engine_id } = req.body;
    
    try {
        const train = await Train.findById(train_id);
        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }

        const engine = new Engine({ engine_id, train: train_id });
        train.engines.push(engine);

        await engine.save();
        await train.save();

        res.status(201).json({ message: 'Engine added successfully', engine });
    } catch (error) {
        res.status(500).json({ message: 'Error adding engine', error });
    }
};

exports.removeEngine = async (req, res) => {
    const { engine_id } = req.params;

    try {
        const engine = await Engine.findByIdAndDelete(engine_id);
        if (!engine) {
            return res.status(404).json({ message: 'Engine not found' });
        }

        // Remove engine from train
        const trainUrl = `http://your-train-service-url/trains/${engine.train_id}/engines/${engine_id}`;
        await networkRetryHandler(trainUrl, { method: 'DELETE' });

        res.status(200).json({ message: 'Engine removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing engine', error });
    }
};

exports.getEngines = async (req, res) => {
    try {
        const engines = await Engine.find();
        res.status(200).json(engines);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching engines', error });
    }
};
