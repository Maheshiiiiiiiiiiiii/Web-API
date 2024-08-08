const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Register new client
router.post('/register', register);

// Client login
router.post('/login', login);

module.exports = router;
