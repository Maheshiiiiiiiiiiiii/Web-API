const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
  engine_id: { type: String, required: true, unique: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train' },
  lastKnownLocation: {
    type: {
      latitude: Number,
      longitude: Number,
    },
    required: false,
  },
});

module.exports = mongoose.model('Engine', engineSchema);