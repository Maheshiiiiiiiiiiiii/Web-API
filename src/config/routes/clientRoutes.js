const express = require('express');
const { registerClient, loginClient, getClients } = require('../controllers/clientController');
const router = express.Router();
const verifyToken = require('../utils/verifyToken');

const { getClients, registerClient } = require('../controllers/clientController');

const clientController = require('../controllers/clientController');


router.post('/register', registerClient);
router.post('/login', loginClient);
router.get('/', verifyToken, getClients);


router.get('/', verifyToken, getClients);
router.post('/', verifyToken, registerClient);

router.get('/', verifyToken, clientController.getAllClients);
router.get('/:id', verifyToken, clientController.getClientById);

module.exports = router;
