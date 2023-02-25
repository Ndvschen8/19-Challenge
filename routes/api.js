const express = require('express');
const router = express.Router();
const Text = require('../models/Text');

// Get all texts
router.get('/texts', async (req, res) => {
  const texts = await Text.find();
  res.json(texts);
});

// Create a new text
router.post('/texts', async (req, res) => {
  const { content } = req.body;
  const newText = new Text({ content });
  await newText.save();
  res.json(newText);
});

module.exports = router;