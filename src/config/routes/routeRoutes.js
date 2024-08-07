const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');
const verifyToken = require('../utils/verifyToken');

router.post('/', verifyToken, routeController.createRoute);
router.get('/', routeController.getRoutes);
router.get('/:id', routeController.getRouteById);
router.put('/:id', verifyToken, routeController.updateRoute);
router.delete('/:id', verifyToken, routeController.deleteRoute);

module.exports = router;
