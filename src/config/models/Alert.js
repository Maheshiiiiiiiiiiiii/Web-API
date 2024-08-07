const mongoose = require('mongoose');

const MaintenanceAlertSchema = new mongoose.Schema({
    trainId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Train',
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    alertDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Alert', AlertSchema);
