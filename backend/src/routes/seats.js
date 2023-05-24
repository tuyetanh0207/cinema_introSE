const express = require('express');
const auth = require('../middleware/auth');
const uploadMiddleware = require('../utils/uploadMiddleware');
const seatController = require('../controllers/seatController');
const BookedSeatController = require('../controllers/bookedSeatController');
const router = new express.Router();

router.post("/upload", auth.manager, uploadMiddleware,seatController.uploadSeats);
router.get("/", seatController.getAllSeats);
router.delete("/", auth.manager, seatController.clearAllSeats); 
router.post("/book", auth.user, BookedSeatController.createBookedSeat);
router.patch("/:id", auth.user, BookedSeatController.changeStatus);

module.exports = router;