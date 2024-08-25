const express = require('express');
const router = express.Router();
const { handleEngineChange } = require('../controllers/engineController');

router.post('/change', async (req, res) => {
  const { train_id, newEngine } = req.body;
  try {
    await handleEngineChange(train_id, newEngine);
    res.status(200).json({ message: 'Engine changed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error changing engine', error });
  }
});

module.exports = router;
