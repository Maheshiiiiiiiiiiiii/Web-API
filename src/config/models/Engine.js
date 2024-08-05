const mongoose = require('mongoose');

const EngineSchema = new mongoose.Schema({
  engine_id: { type: String, required: true, unique: true },
  engine_name: { type: String, required: true },
  engine_type: { type: String, required: true },
});

module.exports = mongoose.model('Engine', EngineSchema);
