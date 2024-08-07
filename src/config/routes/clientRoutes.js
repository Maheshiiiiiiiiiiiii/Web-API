const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/verifyToken');
const { getClients, registerClient } = require('../controllers/clientController');

const clientController = require('../controllers/clientController');
const verifyToken = require('../utils/verifyToken');

router.get('/', verifyToken, getClients);
router.post('/', verifyToken, registerClient);

router.get('/', verifyToken, clientController.getAllClients);
router.get('/:id', verifyToken, clientController.getClientById);

module.exports = router;
