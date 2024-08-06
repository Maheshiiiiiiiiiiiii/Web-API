const express = require('express');
const { getEngines, getEngineById, addEngine, updateEngineStatus } = require('../controllers/engineController');

const router = express.Router();

router.get('/', getEngines);
router.get('/:id', getEngineById);
router.post('/', addEngine);
router.put('/:id/status', updateEngineStatus);

module.exports = router;
