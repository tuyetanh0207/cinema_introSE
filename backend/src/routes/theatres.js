const express = require('express');
const auth = require('../middleware/auth');
const uploadMiddleware = require('../utils/uploadMiddleware');
const theatreController = require('../controllers/theatreController');
const router = new express.Router();

router.post("/", auth.manager, theatreController.createTheatre);
router.post("/upload", auth.manager, uploadMiddleware, theatreController.uploadTheatres);
router.get("/", theatreController.getAllTheatres);
router.delete("/:id", auth.manager, theatreController.deleteTheatre);
router.patch("/:id", auth.manager, theatreController.updateTheatre);

module.exports = router;