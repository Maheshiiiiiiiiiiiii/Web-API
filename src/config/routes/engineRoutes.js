const express = require('express');
const router = express.Router();
const {
    getAllEngines,
    getEngineById,
    createEngine,
    updateEngine,
    deleteEngine
} = require('../controllers/engineController');

router.get('/', getAllEngines);
router.get('/:id', getEngineById);
router.post('/', createEngine);
router.put('/:id', updateEngine);
router.delete('/:id', deleteEngine);

module.exports = router;
