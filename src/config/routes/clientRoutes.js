const express = require('express');
const { registerClient, loginClient, getClients } = require('../controllers/clientController');
const router = express.Router();
const verifyToken = require('../utils/verifyToken');

router.post('/register', registerClient);
router.post('/login', loginClient);
router.get('/', verifyToken, getClients);

module.exports = router;
