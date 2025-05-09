const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');
const verifyToken = require('../middleware/verifyToken'); // Import the verifyToken middleware

// Route definitions
router.post('/', verifyToken, routeController.createRoute);
router.get('/', verifyToken, routeController.getAllRoutes);
router.get('/:id', verifyToken, routeController.getRouteById);
// Add other routes as needed

module.exports = router;

