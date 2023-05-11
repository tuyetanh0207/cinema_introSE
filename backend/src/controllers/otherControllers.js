const Slide = require("../models/slide");
const Showtime = require("../models/showtime");
const Theatre = require("../models/theatre");
const Movie = require("../models/movie");


const otherController = {
    search: async (req, res) => {
        try {
            const searchTerm = req.query.q;
            const movies = await Movie.find({ title: { $regex: searchTerm, $options: 'i' } });
            const movieIds = movies.map(movie => movie._id);
            const showtimes = await Showtime.find({ movieId: { $in: movieIds } })
                .populate('movieId', 'title image');

            const searchResult = showtimes.map((showtime) => ({
                showtimeId: showtime._id,
                movieTitle: showtime.movieId.title,
                movieImage: showtime.movieId.image,
            }));

            res.status(200).json(searchResult);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    createSlide: async (req, res) => {
        const slide = new Slide(req.body);
        try {
            const slideExists = await Slide.exists({ url: req.body.url });
            if (slideExists) {
                return res.status(409).json({ error: 'Slide already exists' });
            }
            await slide.save();
            res.status(200).json(slide);
        } catch (e) {
            res.status(400).json({ error: e.message })
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
            await slide.updateOne({ imageUrl: req.imageurl });
            res.status(200).json({ slide, imageUrl: req.imageurl });
        } catch (e) {
            console.log(e);
            res.status(400).json({ error: e.message });
        }
    },

    getAllSlides: async (req, res) => {
        try {
            const slides = await Slide.find({});
            res.status(200).json(slides);
        } catch (e) {
            res.status(200).json({ error: e.message });
        }
    },

    deleteAllSlides: async (req, res) => {
        try {
            Slide.deleteMany({});
            res.status(200).json({ message: 'All slides have been deleted.' });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    quickBuyTicket: async (req, res) => {
        const showtimeId = req.params.id;
        try {
            const showtime = await Showtime.findById(showtimeId);
            if (!showtime) {
                return res.status(404).json({ message: 'Showtime not found' });
            }

            const theatreIds = showtime.times.map((timeSlot) => timeSlot[0].theatreId);
            const times = showtime.times.map((timeSlot) => timeSlot[0].time);

            const theatrePromises = theatreIds.map((theatreId) => {
                return Theatre.findById(theatreId);
            });
            const theatres = await Promise.all(theatrePromises);

            const theatreNames = theatres.map((theatre) => theatre.name);

            const data = {
                showtimeId: showtime._id,
                theatreNames,
                times,
            };

            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

}

module.exports = otherController;
