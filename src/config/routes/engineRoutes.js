const express = require('express');
const router = express.Router();
const { addEngine, getEngines } = require('../controllers/engineController');

router.post('/add', addEngine);
router.get('/list', getEngines);

module.exports = router;
