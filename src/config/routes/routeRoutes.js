const express = require('express');
const routeController = require('../controllers/routeController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/', verifyToken, routeController.createRoute);
router.get('/', verifyToken, routeController.getAllRoutes);
router.get('/:id', verifyToken, routeController.getRouteById);

module.exports = router;
