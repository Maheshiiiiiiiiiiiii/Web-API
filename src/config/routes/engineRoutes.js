const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engnieController');
//const { verifyToken } = require('../utils/verifyToken');

router.post('/change', async (req, res) => {
  const { train_id, newEngine } = req.body;
  try {
    await handleEngineChange(train_id, newEngine);
    res.status(200).json({ message: 'Engine changed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error changing engine', error });
  }
});

router.post('/', engineController.addEngine);
router.get('/', engineController.getEngines);
router.get('/:engine_id', engineController.getEngineById);
router.get('/', engineController.getEngines);


module.exports = router;
