const express = require('express');
const Medicine = require('../models/Medicine');

const router = express.Router();

// Get all medicines
router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;