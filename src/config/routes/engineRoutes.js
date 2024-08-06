const express = require('express');
const { getEngines, changeEngine } = require('../controllers/engineController');

const router = express.Router();

router.get('/', getEngines);
router.post('/change', changeEngine);

module.exports = router;
