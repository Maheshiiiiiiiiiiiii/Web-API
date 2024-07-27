const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  train_id: { type: String, required: true },
  route: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
