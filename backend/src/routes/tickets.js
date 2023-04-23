const express = require('express');
const auth = require('../middleware/auth');
const uploadMiddleware = require('../utils/uploadMiddleware');
const ticketController = require('../controllers/ticketController');
const router = new express.Router();

router.post("/", auth.user,ticketController.createTicket);

module.exports = router;