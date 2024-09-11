const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this path is correct
const verifyToken = require('../middleware/verifyToken'); // Import the verifyToken middleware

// Public routes
router.post('/login', authController.loginClient);
router.post('/register', authController.registerClient);

// Protected routes
router.get('/profile', verifyToken, authController.getProfile);// getProfile function is not working that middle ware part is useless 
router.put('/update', verifyToken, authController.updateProfile);

module.exports = router;
