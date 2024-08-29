const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthCheckSchema = new Schema({
	status: {
		type: String,
		required: true
	},
	database: {
		type: String,
		required: true
	},
	checkedAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('HealthCheck', healthCheckSchema);