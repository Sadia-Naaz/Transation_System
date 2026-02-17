const Order = require('../models/order.model');
const { createOrder } = require('../services/order.service');

const create = async (req, res, next) => {
  try {
    const order = await createOrder(
      req.clientId,
      req.body.amount
    );
    res.json(order);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.id,
    clientId: req.clientId
  });

  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
};

module.exports = { create, getById };
