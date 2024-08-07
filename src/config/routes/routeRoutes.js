const express = require('express');
const routeController = require('../controllers/routeController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.get('/', verifyToken, routeController.getRoutes);
router.post('/', verifyToken, routeController.createRoute);
router.put('/:id', verifyToken, routeController.updateRoute);
router.delete('/:id', verifyToken, routeController.deleteRoute);

module.exports = router;
