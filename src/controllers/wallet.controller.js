const Wallet = require('../models/wallet.model');

const balance = async (req, res) => {
  const wallet = await Wallet.findOne({ clientId: req.clientId });
  res.json({ balance: wallet?.balance || 0 });
};

module.exports = { balance };
