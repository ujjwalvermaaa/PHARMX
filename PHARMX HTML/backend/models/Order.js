const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' }],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Order', orderSchema);