const express = require('express');
const { getTrains, getTrainById, updateEngines } = require('../controllers/trainController');

const router = express.Router();

router.get('/', getTrains);
router.get('/:id', getTrainById);
router.post('/:id/engines', updateEngines);

module.exports = router;
