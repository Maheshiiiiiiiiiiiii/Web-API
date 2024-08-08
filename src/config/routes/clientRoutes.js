const express = require('express');
const { registerClient, listClients } = require('../controllers/clientController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/clients', verifyToken, registerClient);
router.get('/clients', verifyToken, listClients);

module.exports = router;
