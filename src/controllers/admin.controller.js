const mongoose = require('mongoose');
const { creditWallet, debitWallet } = require('../services/wallet.service');

const credit = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    await creditWallet(req.body.client_id, req.body.amount, session);
    await session.commitTransaction();
    res.json({ success: true });
  } catch (err) {
    await session.abortTransaction();
    next(err);
  } finally {
    session.endSession();
  }
};

const debit = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    await debitWallet(req.body.client_id, req.body.amount, session);
    await session.commitTransaction();
    res.json({ success: true });
  } catch (err) {
    await session.abortTransaction();
    next(err);
  } finally {
    session.endSession();
  }
};

module.exports = { credit, debit };
