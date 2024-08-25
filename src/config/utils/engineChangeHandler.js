const Train = require('../models/Train');

/**
 * Handles the process of changing the engine for a specific train.
 * @param {string} train_id - The ID of the train whose engine is to be changed.
 * @param {string} newEngine - The new engine ID to be assigned to the train.
 * @throws {Error} Throws an error if the new engine is not provided or if the train is not found.
 */
const handleEngineChange = async (train_id, newEngine) => {
  if (!newEngine) {
    throw new Error('New engine must be provided');
  }

  try {
    const train = await Train.findById(train_id);
    if (!train) {
      throw new Error('Train not found');
    }

    const newEngine = await Engine.findById(newEngineId);
    if (!newEngine) {
      throw new Error('New engine not found');
    }

    // If train has a current engine and it's different from the new engine, update IoT status
    if (train.primary_engine && !train.primary_engine.equals(newEngine._id)) {
      const currentEngine = await Engine.findById(train.primary_engine);
      if (currentEngine) {
        currentEngine.status = 'inactive';
        await currentEngine.save();
        console.log(`IoT device for engine ${currentEngine.engine_id} switched off`);
      }
    }

    newEngine.status = 'active';
    newEngine.train = train._id;
    await newEngine.save();

    train.engine_history.push(train.primary_engine);
    train.primary_engine = newEngine._id;
    await train.save();

    console.log(`Engine changed successfully for train ${train_id}`);
  } catch (error) {
    console.error(`Failed to change engine for train ${train_id}:`, error);
    throw error;
  }
};

module.exports = handleEngineChange;
