const express = require('express');
const auth = require('../middleware/auth');
const uploadMiddleware = require('../utils/uploadMiddleware');
const seatController = require('../controllers/seatController');
const router = new express.Router();

router.post("/upload/:id", auth.enhance, uploadMiddleware,seatController.uploadSeats);
router.get("/:id", seatController.getAllSeats);

module.exports = router;