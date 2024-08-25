const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

clientSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

clientSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

module.exports = mongoose.model('Client', clientSchema);
