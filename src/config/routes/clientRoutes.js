const express = require('express');
const { registerClient, loginClient,getAllClients,getClientById } = require('../controllers/clientController');
const router = express.Router();
const verifyToken = require('../utils/verifyToken');

//router.post('/register', registerClient);
router.post('/login', loginClient);
router.post('/register',registerClient);
router.get('/',getAllClients);
router.get('/:id',getClientById);

module.exports = router;
