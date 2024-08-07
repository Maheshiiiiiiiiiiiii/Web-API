const express = require('express');
const engineController = require('../controllers/engineController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/', verifyToken, engineController.createEngine);
router.get('/', verifyToken, engineController.getAllEngines);
router.get('/:id', verifyToken, engineController.getEngineById);
router.put('/:id', verifyToken, engineController.updateEngine);
router.delete('/:id', verifyToken, engineController.deleteEngine);

module.exports = router;
