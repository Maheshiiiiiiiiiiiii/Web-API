const express = require('express');
const clientController = require('../controllers/clientController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.get('/', verifyToken, clientController.getAllClients);
router.get('/:id', verifyToken, clientController.getClientById);

module.exports = router;
