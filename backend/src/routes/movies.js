const express = require('express');

const movieController = require('../controllers/movieController');
const auth = require('../middleware/auth');
const upload = require('../utils/multer');

const router = new express.Router();

router.post('/', auth.enhance, movieController.createMovie);
//router.get('/photo/:id', auth.enhance, upload('movies'), movieController.uploadMoviePhoto);
router.get('/', movieController.getAllMovies);


module.exports = router;