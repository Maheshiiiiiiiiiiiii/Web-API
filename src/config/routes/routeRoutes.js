const express = require('express');
const { addRoute, getRoutes } = require('../controllers/routeController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/routes', verifyToken, addRoute);
router.get('/routes', verifyToken, getRoutes);

module.exports = router;
