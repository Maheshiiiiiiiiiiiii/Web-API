const express = require('express');
const { getClients, addClient } = require('../controllers/clientController');
const router = express.Router();

router.get('/', getClients);
router.post('/', addClient);

module.exports = router;
