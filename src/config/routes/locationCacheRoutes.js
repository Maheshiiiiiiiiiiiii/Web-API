const express = require('express');
const router = express.Router();
const locationCacheController = require('../controllers/locationCacheController');
const verifyToken = require('../middleware/authMiddleware'); // Assuming you have an auth middleware

router.post('/', verifyToken, locationCacheController.cacheLocation);
router.get('/:trainId', verifyToken, locationCacheController.getCachedLocation);
router.delete('/:trainId', verifyToken, locationCacheController.deleteCachedLocation);

module.exports = router;
