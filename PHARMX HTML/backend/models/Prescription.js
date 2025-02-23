const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Prescription', prescriptionSchema);