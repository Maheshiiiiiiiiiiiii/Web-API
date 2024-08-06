const Train = require('../models/Train');

// Function to handle engine change
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
    console.error(`Failed to change engine for train ${train_id}:`, error);
    throw error;  // Rethrow the error after logging it
  }
};

module.exports = handleEngineChange;
