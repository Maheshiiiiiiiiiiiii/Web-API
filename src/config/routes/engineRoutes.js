const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engineController');
//const { verifyToken } = require('../utils/verifyToken');
const { addEngine, removeEngine, getEngines,changeEngine} = require('../controllers/engineController');


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
router.put('/:id', engineController.updateEngine);
router.delete('/:id', engineController.deleteEngine);
router.post('/', addEngine);
router.delete('/:engine_id', removeEngine);
router.get('/', getEngines);

router.post('/', engineController.createEngine);
router.get('/:id', engineController.getEngineById);
router.post('/change', changeEngine);

module.exports = router;
