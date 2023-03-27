const express = require('express');

const movieController = require('../controllers/movieController');
const auth = require('../middleware/auth');
const uploadToBlob = require('../utils/blob');

const router = new express.Router();


router.post('/', auth.enhance, movieController.createMovie);
router.post('/photo/:id', auth.enhance, uploadToBlob('movies', 'image'), movieController.uploadMovieImage);
router.get('/', movieController.getAllMovies);


module.exports = router;