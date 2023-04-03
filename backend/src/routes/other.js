const express = require('express');
const otherController = require('../controllers/otherControllers');

const router = express.Router();

router.get('/search', otherController.search);

module.exports = router;