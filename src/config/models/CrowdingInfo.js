const mongoose = require('mongoose');

const crowdingInfoSchema = new mongoose.Schema({
  train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
  crowdingLevels: {
    firstClass: { type: Number, required: true },
    secondClass: { type: Number, required: true },
    thirdClass: { type: Number, required: true }
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CrowdingInfo', crowdingInfoSchema);