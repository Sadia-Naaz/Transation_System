const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  clientId: { type: String, index: true },
  amount: Number,
  status: {
    type: String,
    enum: ['PENDING', 'FULFILLED', 'FAILED'],
    default: 'PENDING'
  },
  fulfillmentId: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
