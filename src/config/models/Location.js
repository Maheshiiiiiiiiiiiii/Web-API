const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  location_id: { type: String, required: true, unique: true },
  train_id: { type: String, required: true },
  timestamp: { type: Date, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  speed: { type: Number, required: true },
  direction: { type: Number, required: true },
});

module.exports = mongoose.model('Location', LocationSchema);
