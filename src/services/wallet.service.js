const Wallet = require('../models/wallet.model');
const WalletLedger = require('../models/walletLedger.model');

const creditWallet = async (clientId, amount, session) => {
  if (amount <= 0) throw new Error('Invalid amount');

  await Wallet.updateOne(
    { clientId },
    { $inc: { balance: amount } },
    { upsert: true, session }
  );

  await WalletLedger.create([{
    clientId,
    amount,
    type: 'CREDIT'
  }], { session });
};

const debitWallet = async (clientId, amount, session) => {
  const wallet = await Wallet.findOneAndUpdate(
    { clientId, balance: { $gte: amount } },
    { $inc: { balance: -amount } },
    { session }
  );

  if (!wallet) throw new Error('Insufficient balance');

  await WalletLedger.create([{
    clientId,
    amount,
    type: 'DEBIT'
  }], { session });
};

module.exports = {
  creditWallet,
  debitWallet
};
