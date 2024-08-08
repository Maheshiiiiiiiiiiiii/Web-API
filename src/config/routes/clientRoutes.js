const express = require('express');
const { getClients, getClientById, updateClient, deleteClient } = require('../controllers/clientController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

// Get all clients
router.get('/', verifyToken, getClients);

// Get a single client by ID
router.get('/:id', verifyToken, getClientById);

// Update a client
router.put('/:id', verifyToken, updateClient);

// Delete a client
router.delete('/:id', verifyToken, deleteClient);

module.exports = router;
