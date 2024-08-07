const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/verifyToken');
const { addEngine, removeEngine, getEngines } = require('../controllers/engineController');

router.post('/', verifyToken, addEngine);
router.delete('/:engine_id', verifyToken, removeEngine);
router.get('/', verifyToken, getEngines);

module.exports = router;
