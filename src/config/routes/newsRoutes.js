const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const verifyToken = require('../middleware/verifyToken');

// Routes for news management
router.post('/news', verifyToken, newsController.createNewsUpdate);
router.get('/news', newsController.getNewsUpdates);
router.delete('/news/:id', verifyToken, newsController.deleteNewsUpdate);
router.put('/news/:id/approve', verifyToken, newsController.approveNewsUpdate);
router.get('/news/:id', newsController.getNewsById);
router.put('/news/:id', verifyToken, newsController.updateNews);

module.exports = router;
