const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  clientId: { type: String, unique: true, index: true },
  balance: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Wallet', walletSchema);
