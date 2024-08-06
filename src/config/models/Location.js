const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train' },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
