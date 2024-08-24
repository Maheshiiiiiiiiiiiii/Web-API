const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/verifyToken');
const { register, login } = require('../controllers/authController');

const authController = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
