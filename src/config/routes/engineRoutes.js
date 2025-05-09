const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engnieController');
const verifyToken = require('../middleware/verifyToken');

router.get('/engines', verifyToken, engineController.getEngines);
router.get('/engines/:id', verifyToken, engineController.getEngineById);
router.post('/engines', verifyToken, engineController.addEngine);
router.put('/engines/:id', verifyToken, engineController.updateEngineStatus);
router.delete('/engines/:id', verifyToken, engineController.deleteEngine);
router.put('/trains/:train_id/engine', verifyToken, engineController.changeEngine);

module.exports = router;