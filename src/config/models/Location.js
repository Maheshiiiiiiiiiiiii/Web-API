const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  location_id: { type: String, required: true, unique: true },
  train_id: { type: String, required: true, ref: 'Train' }, // Assuming you have a Train model
  engine_id: { type: String, required: true }, // To handle engine changing
  timestamp: { type: Date, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  speed: { type: Number, required: true },
  direction: { type: Number, required: true },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('Location', LocationSchema);
