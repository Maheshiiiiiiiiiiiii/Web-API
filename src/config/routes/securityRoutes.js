const express = require('express');
const securityController = require('../controllers/securityController');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/generate-api-key', verifyToken, securityController.generateApiKey);

module.exports = router;
