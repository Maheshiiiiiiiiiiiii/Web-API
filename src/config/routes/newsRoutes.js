const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const verifyToken = require('../middleware/verifyToken');

// Routes for news management
router.post('/news', verifyToken, newsController.createNews);
router.get('/news', newsController.getAllNews);
router.get('/news/:id', newsController.getNewsById);
router.put('/news/:id', verifyToken, newsController.updateNews);
router.delete('/news/:id', verifyToken, newsController.deleteNews);

module.exports = router;
