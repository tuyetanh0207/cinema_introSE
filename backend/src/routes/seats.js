const express = require('express');
const auth = require('../middleware/auth');
const uploadMiddleware = require('../utils/uploadMiddleware');
const seatController = require('../controllers/seatController');
const router = new express.Router();

router.post("/upload", auth.manager, uploadMiddleware,seatController.uploadSeats);
router.get("/", seatController.getAllSeats);

module.exports = router;