const Movie = require("../models/movie");
const Slide = require("../models/slide");


const otherController = {
    search: async (req, res) => {
        try {
            const searchTerm = req.query.q;
            const movies = await Movie.find({title: { $regex: searchTerm, $options: 'i'} });
        res.status(200).json({movies, searchTerm});
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    },

    createSlide: async(req, res) => {
        const slide = new Slide(req.body);
        try {
            const slideExists = await Slide.exists({url: req.body.url});
            if (slideExists) {
                return res.status(409).json({error: 'Slide already exists'});
            }
            await slide.save();
        res.status(200).json(slide);
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    },

    uploadSlideImage: async (req, res) => {
        const { file } = req;
        const slideId = req.params.id;
        try {
          if (!file) {
            const error = new Error('Please upload a file');
            error.httpStatusCode = 400;
            return next(error);
          }
          const slide = await Slide.findById(slideId);
          if (!slide) return res.sendStatus(404);
          await slide.updateOne({ imageUrl: req.imageUrl });
          res.status(200).json({ slide, imageUrl });
        } catch (e) {
          console.log(e);
          res.status(400).json({error: e.message});
        }
    },

    getAllSlides: async (req, res) => {
        try {
            const slides = await Slide.find({});
            res.status(200).json(slides);
        } catch (e) {
            res.status(200).json({error: e.message});
        }
    },
}

module.exports = otherController;
