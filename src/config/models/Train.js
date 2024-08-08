const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  current_engine: { type: mongoose.Schema.Types.ObjectId, ref: 'Engine', required: true },
  engine_history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Engine' }],
});

module.exports = mongoose.model('Train', trainSchema);
