const express = require('express');
const { getClients } = require('../controllers/clientController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.get('/', verifyToken, getClients);

module.exports = router;
