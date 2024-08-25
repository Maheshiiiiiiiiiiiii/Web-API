const express = require('express');
const router = express.Router();
const { registerClient, loginClient } = require('../controllers/authController');

const { verifyToken } = require('../utils/verifyToken');
const { register, login } = require('./config/controllers/authController');

const authController = require('./config/controller/authController');

router.post('/register', registerClient);
router.post('/login', loginClient);


router.post('/register', register);
router.post('/login', login);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
