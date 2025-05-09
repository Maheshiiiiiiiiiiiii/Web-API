const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiKeySchema = new Schema({
	key: {
		type: String,
		required: true,
		unique: true
	},
	clientId: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('ApiKey', apiKeySchema);