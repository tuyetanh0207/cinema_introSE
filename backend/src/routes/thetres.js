const express = require('express');
const auth = require('../middleware/auth');
const theatreController = require('../controllers/theatreController');
const router = new express.Router();

router.post("/", auth.enhance, theatreController.createTheatre);
router.post("/upload", auth.enhance, theatreController.uploadAllTheatres);
router.get("/", auth.enhance, theatreController.getAllTheatres);
router.delete("/:id", auth.enhance, theatreController.deleteTheatre);
router.patch("/:id", auth.enhance, theatreController.updateTheatre);

module.exports = router;