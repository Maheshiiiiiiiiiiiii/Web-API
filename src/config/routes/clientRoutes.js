const express = require('express');
const { getAllClients, getClientById } = require('../controllers/clientController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.get('/', verifyToken, getAllClients);
router.get('/:id', verifyToken, getClientById);

module.exports = router;
