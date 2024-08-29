const express = require('express');
const router = express.Router();
const apiKeyController = require('../controllers/apiKeyController');

// Create a new API key
router.post('/', apiKeyController.createApiKey);

// Get all API keys
router.get('/', apiKeyController.getApiKeys);

// Get a single API key by ID
router.get('/:id', apiKeyController.getApiKeyById);

// Delete an API key by ID
router.delete('/:id', apiKeyController.deleteApiKey);

module.exports = router;