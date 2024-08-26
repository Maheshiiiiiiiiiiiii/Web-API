const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController'); // Ensure this line is not duplicated

// Route definitions
router.post('/', routeController.createRoute);
router.get('/', routeController.getAllRoutes);
router.get('/:id', routeController.getRouteById);
// Add other routes as needed

module.exports = router;

