const Medicine = require('../models/medicineModel');

const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addMedicine = async (req, res) => {
  const { name, description, price, expiryDate } = req.body;
  try {
    const medicine = await Medicine.create({ name, description, price, expiryDate });
    res.status(201).json(medicine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getMedicines, addMedicine };