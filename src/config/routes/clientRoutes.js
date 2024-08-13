const express = require('express');
const router = express.Router();
const { listClients, registerClient } = require('../controllers/clientController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, listClients);
router.post('/', verifyToken, registerClient);

module.exports = router;
