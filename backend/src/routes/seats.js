const express = require('express');
const auth = require('../middleware/auth');
const seatController = require('../controllers/seatController');
const router = new express.Router();

router.post("/", auth.enhance, seatController.uploadSeats);
router.get("/", seatController.getAllSeats);

module.exports = router;