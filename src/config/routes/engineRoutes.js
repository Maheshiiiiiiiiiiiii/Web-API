const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engineController');
const { verifyToken } = require('../utils/verifyToken');
const { addEngine, removeEngine, getEngines } = require('../controllers/engineController');
const engineController = require('../controllers/engineController');
const verifyToken = require('../utils/verifyToken');

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

module.exports = router;
