const express = require('express');
const auth = require('../middleware/auth');
const uploadMiddleware = require('../utils/uploadMiddleware');
const theatreController = require('../controllers/theatreController');
const router = new express.Router();

router.post("/", auth.enhance, theatreController.createTheatre);
router.post("/upload", auth.enhance, uploadMiddleware, theatreController.uploadTheatres);
router.get("/", theatreController.getAllTheatres);
router.delete("/:id", auth.enhance, theatreController.deleteTheatre);
router.patch("/:id", auth.enhance, theatreController.updateTheatre);

module.exports = router;