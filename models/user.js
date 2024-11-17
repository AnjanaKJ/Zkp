const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  did: { type: String, required: true, unique: true },
  ehrData: { type: Object, required: true }
});

module.exports = mongoose.model('User', userSchema);
