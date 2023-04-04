const express = require('express');
const auth = require('../middleware/auth');
const cinemaController = require('../controllers/cinemaController');
const router = new express.Router();

router.post('/', auth.enhance, cinemaController.createCinema);
router.get('/', cinemaController.getAllCinemas);
router.get('/:id', cinemaController.getCinemaById);
router.patch('/:id', auth.enhance, cinemaController.updateCinemaById);
router.delete('/:id', auth.enhance, cinemaController.deleteCinemaById);


module.exports = router;