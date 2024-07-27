const Train = require('../models/Train');

const handleEngineChange = async (train_id, newEngine) => {
  try {
    const train = await Train.findById(train_id);
    if (!train) {
      throw new Error('Train not found');
    }

    if (!train.engine_history) {
      train.engine_history = [];
    }

    train.engine_history.push(train.current_engine);
    train.current_engine = newEngine;

    await train.save();
  } catch (error) {
    console.error('Error changing engine:', error.message);
    throw error;
  }
};

module.exports = handleEngineChange;
