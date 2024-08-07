const express = require('express');
const { createEngine, getAllEngines, getEngineById, updateEngineStatus } = require('../controllers/engineController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/', verifyToken, createEngine);
router.get('/', verifyToken, getAllEngines);
router.get('/:id', verifyToken, getEngineById);
router.put('/:id', verifyToken, updateEngineStatus);

module.exports = router;
