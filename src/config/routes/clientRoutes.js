const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/verifyToken');
const { getClients, registerClient } = require('../controllers/clientController');

router.get('/', verifyToken, getClients);
router.post('/', verifyToken, registerClient);

module.exports = router;
