const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

// User routes
router.post('/register', userController.registerUser); // Route for user registration
router.post('/login', userController.loginUser); // Route for user login
router.get('/:id', verifyToken, userController.getUserById); // Route to get a specific user by ID
router.put('/:id', verifyToken, userController.updateUser); // Route to update user details
router.delete('/:id', verifyToken, userController.deleteUser); // Route to delete a user

module.exports = router;
