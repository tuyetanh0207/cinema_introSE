const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const movieController = require('../controllers/movieController');
const auth = require('../middleware/auth');
const uploadImage = require('../utils/uploadImage');

const router = new express.Router();


router.post('/', auth.enhance, movieController.createMovie);
router.post('/photo/:id', auth.enhance, upload.single('image'), uploadImage, movieController.uploadMovieImage);
router.get('/', movieController.getAllMovies);
router.get('/nowShowing', movieController.getNowShowingMovies);
router.get('/comingSoon', movieController.getComingSoonMovies);
router.get('/:id', movieController.getMovieById);
router.patch('/:id', auth.enhance, movieController.updateById);
router.delete('/:id', auth.enhance, movieController.deleteById);

module.exports = router;