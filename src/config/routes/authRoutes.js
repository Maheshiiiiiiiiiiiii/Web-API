const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/verifyToken');
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
