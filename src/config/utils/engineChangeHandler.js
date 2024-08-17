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

    // If train has two engines, turn off one IoT device
    if (train.current_engine && train.current_engine !== newEngine) {
      // Logic to switch off one IoT device (to be implemented based on actual IoT setup)
      console.log(`Switching off IoT device for engine ${train.current_engine}`);
    }

    // Update train's engine information
    train.engine_history.push(train.current_engine);
    train.current_engine = newEngine;
    await train.save();

    console.log(`Engine changed successfully for train ${train_id}`);
  } catch (error) {
    console.error(`Failed to change engine for train ${train_id}: ${error.message}`);
    throw error;  // Rethrow the error after logging it
  }
};

module.exports = handleEngineChange;
