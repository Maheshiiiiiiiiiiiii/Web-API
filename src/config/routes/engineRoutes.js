const express = require('express');
const { addEngine, updateEngineStatus } = require('../controllers/engineController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/engines', verifyToken, addEngine);
router.put('/engines/:id', verifyToken, updateEngineStatus);

module.exports = router;
