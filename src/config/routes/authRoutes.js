const express = require('express');
const router = express.Router();
const { registerClient, loginClient, register} = require('../controllers/authController');
const { verifyToken } = require('../utils/verifyToken');

router.post('/register', registerClient);
router.post('/login', loginClient);


//router.post('/register', register);
//router.post('/login', login);



module.exports = router;
