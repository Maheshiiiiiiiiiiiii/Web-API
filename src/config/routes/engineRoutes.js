const express = require('express');
const engineController = require('../controllers/engineController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.get('/', verifyToken, engineController.getEngines);
router.post('/', verifyToken, engineController.createEngine);

module.exports = router;
