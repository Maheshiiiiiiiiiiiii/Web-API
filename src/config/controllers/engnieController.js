const Train = require('../models/Train');

exports.handleEngineChange = async (train_id, newEngine) => {
  if (!newEngine) {
    throw new Error('New engine must be provided');
  }

  try {
    const train = await Train.findById(train_id);
    if (!train) {
      throw new Error('Train not found');
    }

    // Handle engine ID update
    if (train.current_engine && train.engine_history.includes(train.current_engine)) {
      train.engine_history.push(train.current_engine);
    }

    train.current_engine = newEngine;

    // Check for dual engine situation
    if (train.engine_history.length === 2) {
      // Logic to switch off one IoT device (placeholder logic)
      if (train.iotDevices && train.iotDevices.length > 1) {
        train.iotDevices[1].status = 'off';  // Example: turn off the second IoT device
        // Save IoT device status changes if applicable
        // await train.saveIoTDevices(); // Uncomment if you have a save method for IoT devices
      }
    }

    await train.save();
    console.log(`Engine changed successfully for train ${train_id}`);
  } catch (error) {
    console.error(`Failed to change engine for train ${train_id}:`, error);
    throw error;
  }
};
