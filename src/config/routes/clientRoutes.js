const express = require('express');
const clientController = require('../controllers/clientController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.get('/', verifyToken, clientController.getClients);
router.post('/', verifyToken, clientController.createClient);

module.exports = router;
