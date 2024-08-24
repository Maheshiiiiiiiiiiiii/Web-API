const express = require('express');
const { getLogs } = require('../controllers/monitoringController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.get('/', verifyToken, getLogs);

module.exports = router;
