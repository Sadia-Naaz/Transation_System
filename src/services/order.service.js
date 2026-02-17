const mongoose = require('mongoose');
const axios = require('axios');
const Order = require('../models/order.model');
const { debitWallet } = require('./wallet.service');

const createOrder = async (clientId, amount) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  let order;

  try {
    await debitWallet(clientId, amount, session);

    [order] = await Order.create([{
      clientId,
      amount
    }], { session });

    await session.commitTransaction();
    session.endSession();

  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }

  // External API AFTER transaction commit
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        userId: clientId,
        title: order._id.toString()
      },
      { timeout: 3000 }
    );

    await Order.findByIdAndUpdate(order._id, {
      fulfillmentId: response.data.id,
      status: 'FULFILLED'
    });

  } catch {
    await Order.findByIdAndUpdate(order._id, { status: 'FAILED' });
  }

  return order;
};

module.exports = { createOrder };
