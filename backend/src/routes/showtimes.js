const express = require('express');
const auth = require('../middleware/auth');
const showtimeController = require('../controllers/showtimeController');
const uploadMiddleware = require('../utils/uploadMiddleware');
const router = new express.Router();

router.post('/', auth.manager, showtimeController.createShowtime);
router.get('/', showtimeController.getAllShowtimes);
router.get('/nowShowing', showtimeController.getNowShowing);
router.get('/comingSoon', showtimeController.getComingSoon);
router.get('/:id', showtimeController.getShowtimeById);
router.patch('/:id', auth.manager, showtimeController.updateShowtimeById);
router.delete('/:id', auth.manager, showtimeController.deleteShowtimeById);
router.post('/upload', auth.manager, uploadMiddleware, showtimeController.uploadShowtimes);

module.exports = router;