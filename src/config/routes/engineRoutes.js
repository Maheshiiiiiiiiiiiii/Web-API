const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engineController');
const { verifyToken } = require('../utils/verifyToken');
const { addEngine, removeEngine, getEngines } = require('../controllers/engineController');

router.post('/', engineController.addEngine);
router.get('/', engineController.getEngines);
router.put('/:id', engineController.updateEngine);
router.delete('/:id', engineController.deleteEngine);
router.post('/', verifyToken, addEngine);
router.delete('/:engine_id', verifyToken, removeEngine);
router.get('/', verifyToken, getEngines);

module.exports = router;
