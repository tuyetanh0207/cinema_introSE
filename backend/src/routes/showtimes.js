const express = require('express');
const auth = require('../middleware/auth');
const showtimeController = require('../controllers/showtimeController');
const router = new express.Router();

router.post('/', auth.enhance, showtimeController.createShowtime);
// router.get('/', showtimeController.getAllshowtimes);
// router.get('/:id', showtimeController.getshowtimeById);
// router.patch('/:id', auth.enhance, showtimeController.updateshowtimeById);
// router.delete('/:id', auth.enhance, showtimeController.deleteshowtimeById);


module.exports = router;