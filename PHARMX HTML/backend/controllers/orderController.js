const Order = require('../models/orderModel');

const createOrder = async (req, res) => {
  const { userId, medicines, totalAmount } = req.body;
  try {
    const order = await Order.create({ userId, medicines, totalAmount });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId').populate('medicines');
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createOrder, getOrders };