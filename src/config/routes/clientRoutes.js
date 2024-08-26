const express = require('express');
const { registerClient, loginClient, getAllClients, getClientById } = require('../controllers/clientController');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

// Public routes
router.post('/register', registerClient);
router.post('/login', loginClient);

// Protected routes
router.get('/', verifyToken, getAllClients);
router.get('/:id', verifyToken, getClientById);

module.exports = router;
