const express = require('express');
const auth = require('../middleware/auth');
const reservationController = require('../controllers/reservationControoler');
const generateQR = require('../utils/generateQRCode');
const router = new express.Router();

router.post('/', auth.simple, reservationController.createReservation);
router.get('/', auth.simple, reservationController.getAllReservations);
router.get('/:id', reservationController.getReservationById);
router.get('/checkin/:id', reservationController.getReservationCheckinById);
router.patch('/:id', auth.enhance, reservationController.updateReservationById);
router.delete('/:id', auth.enhance, reservationController.deleteReservationById);


module.exports = router;