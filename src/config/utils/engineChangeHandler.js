const Train = require('../models/Train');

const handleEngineChange = async (train_id, new_engine_id) => {
    try {
        const train = await Train.findById(train_id);
        if (!train) {
            throw new Error('Train not found');
        }

        // Add new engine to the train
        train.engines.push(new_engine_id);

        // Optional: Remove old engine if required
        if (train.engines.length > 2) {
            train.engines.shift();
        }

        await train.save();
        return train;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = handleEngineChange;
