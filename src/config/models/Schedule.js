const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  train_id: { type: String, required: true },
  route: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
  date: { type: Date, required: true },
  day: { type: String, required: true },
  frequency: { type: String, enum: ['daily', 'weekdays', 'weekends'], required: true },
  special: { type: Boolean, default: false }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;
