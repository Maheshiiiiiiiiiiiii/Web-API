const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engineController'); // Corrected typo
const { verifyToken } = require('../middleware/verifyToken'); 

// Log the imported controller to verify it contains all methods
console.log(engineController);

// Define routes with appropriate middleware and controller methods
router.post('/', engineController.addEngine); 
router.get('/', verifyToken, engineController.getEngines);
router.put('/:id', verifyToken, engineController.updateEngineStatus);
router.delete('/:id', verifyToken, engineController.deleteEngine);
router.get('/:id', verifyToken, engineController.getEngineById);

module.exports = router;