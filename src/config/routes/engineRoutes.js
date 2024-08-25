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
const engineController = require('../controllers/engineController');
const { verifyToken } = require('../utils/verifyToken');
const { addEngine, removeEngine, getEngines } = require('../controllers/engineController');
const engineController = require('../controllers/engineController');
const verifyToken = require('../utils/verifyToken');

const { getEngines, changeEngine } = require('../controllers/engineController');

router.post('/', engineController.addEngine);
router.get('/', engineController.getEngines);
router.put('/:id', engineController.updateEngine);
router.delete('/:id', engineController.deleteEngine);
router.post('/', verifyToken, addEngine);
router.delete('/:engine_id', verifyToken, removeEngine);
router.get('/', verifyToken, getEngines);

router.post('/', verifyToken, engineController.createEngine);
router.get('/', verifyToken, engineController.getAllEngines);
router.get('/:id', verifyToken, engineController.getEngineById);
router.put('/:id', verifyToken, engineController.updateEngine);
router.delete('/:id', verifyToken, engineController.deleteEngine);

router.get('/', getEngines);
router.post('/change', changeEngine);

module.exports = router;
