const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const otherController = require('../controllers/otherControllers');
const auth = require('../middleware/auth');
const uploadImage = require('../utils/uploadImage');

const router = express.Router();

router.get('/search', otherController.search);
router.post('/slides/', otherController.createSlide);
router.post('/slides/:id', auth.manager, upload.single('image'), uploadImage,otherController.uploadSlideImage);
router.get('/slides/', otherController.getAllSlides);
router.get('/quick-buy/:id', otherController.quickBuyTicket);
module.exports = router;