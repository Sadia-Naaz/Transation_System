const mongoose = require('mongoose');

const walletLedgerSchema = new mongoose.Schema({
  clientId: { type: String, index: true },
  amount: Number,
  type: { type: String, enum: ['CREDIT', 'DEBIT'] },
  reference: String
}, { timestamps: true });

module.exports = mongoose.model('WalletLedger', walletLedgerSchema);
