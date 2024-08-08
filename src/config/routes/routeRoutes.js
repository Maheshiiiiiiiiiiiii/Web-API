const express = require('express');
const { getRoutes, getRouteById, createRoute, updateRoute, deleteRoute } = require('../controllers/routeController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

// Get all routes
router.get('/', verifyToken, getRoutes);

// Get a single route by ID
router.get('/:id', verifyToken, getRouteById);

// Create a new route
router.post('/', verifyToken, createRoute);

// Update a route
router.put('/:id', verifyToken, updateRoute);

// Delete a route
router.delete('/:id', verifyToken, deleteRoute);

module.exports = router;
