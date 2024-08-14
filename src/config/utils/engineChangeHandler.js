const Train = require('../models/Train');

const handleEngineChange = async (train_id, newEngine) => {
  if (!newEngine) {
    throw new Error('New engine must be provided');
  }

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

    console.log(`Engine changed successfully for train ${train_id}`);
  } catch (error) {
    console.error(`Failed to change engine for train ${train_id}:`, error);
    throw error;
  }
};

module.exports = handleEngineChange;
