const express = require('express');
const { createRoute, getAllRoutes, getRouteById } = require('../controllers/routeController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/', verifyToken, createRoute);
router.get('/', verifyToken, getAllRoutes);
router.get('/:id', verifyToken, getRouteById);

module.exports = router;
