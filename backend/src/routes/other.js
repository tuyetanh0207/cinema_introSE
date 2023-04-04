const express = require('express');
const otherController = require('../controllers/otherControllers');
const uploadToBlob = require('../utils/blob');

const router = express.Router();

router.get('/search', otherController.search);
router.post('/slides/', otherController.createSlide);
router.post('/slides/:id', uploadToBlob('slides', 'imageUrl'),otherController.uploadSlideImage);
router.get('/slides/', otherController.getAllSlides);
module.exports = router;