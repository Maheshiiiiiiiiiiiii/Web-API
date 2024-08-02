const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engineController');

router.post('/', engineController.addEngine);
router.get('/', engineController.getEngines);
router.put('/:id', engineController.updateEngine);
router.delete('/:id', engineController.deleteEngine);

module.exports = router;
