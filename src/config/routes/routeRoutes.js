const express = require('express');
const { getAllRoutes, createRoute } = require('../controllers/routeController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.get('/', verifyToken, getAllRoutes);
router.post('/', verifyToken, createRoute);

module.exports = router;
