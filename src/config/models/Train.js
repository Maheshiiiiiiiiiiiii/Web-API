const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  primary_engine: { type: mongoose.Schema.Types.ObjectId, ref: 'Engine' },
  secondary_engine: { type: mongoose.Schema.Types.ObjectId, ref: 'Engine' },
  engine_history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Engine' }],
  schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
  current_location: { type: [Number], required: false },  // Existing field
  coordinates: {  // New field for coordinates
    type: [Number], 
    required: false,
    validate: {
      validator: function(value) {
        return value.length === 2;
      },
      message: props => `Coordinates should have exactly two numbers [longitude, latitude]`
    }
  }
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
