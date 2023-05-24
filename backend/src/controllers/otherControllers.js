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

            const dates = showtime.times.flatMap((timeSlot) => timeSlot.map(t => t.date));
            const theatreIds = showtime.times.flatMap((timeSlot) => timeSlot.map(t => t.theatreId));
            const times = showtime.times.flatMap((timeSlot) => timeSlot.map(t => t.time));

            const theatrePromises = theatreIds.map((theatreId) => Theatre.findById(theatreId));
            const theatres = await Promise.all(theatrePromises);

            const theatreNames = theatres.map((theatre) => theatre.name);

            const data = {
                showtimeId: showtime._id,
                dates,
                theatreNames,
                times,
            };

            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    getDateOfShowtime: async (req, res) => {
        const showtimeId = req.params.id;

        try {
            const showtime = await Showtime.findById(showtimeId);
            if (!showtime) {
                return res.status(404).json({ message: 'Showtime not found' });
            }

            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);

            const dates = [...new Set(showtime.times.flatMap((timeSlot) => timeSlot.map(async (t) => {
                const showtimeDate = new Date(t.date);
                if (showtimeDate > currentDate) {
                    return showtimeDate.toISOString().split('T')[0]; // Extracting only the date part
                }
                return null;
            })))];

            const validDates = (await Promise.all(dates)).filter(date => date !== null);

            return res.status(200).json({ dates: [...new Set(validDates)] }); // Returning distinct dates

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    getTheatreOfShowtime: async (req, res) => {
        const showtimeId = req.params.id;
        const dateParam = req.params.date;
        const dateFormatted = dateParam.replace(/-/g, "/");
    
        try {
            const showtime = await Showtime.findById(showtimeId);
            if (!showtime) {
                return res.status(404).json({ message: 'Showtime not found' });
            }
    
            const theatres = [];
            const theatreIds = [];
    
            const getTheatreName = async (theatreId) => {
                try {
                    const theatre = await Theatre.findById(theatreId);
                    return theatre ? theatre.name : '';
                } catch (error) {
                    console.error(error);
                    return '';
                }
            };
    
            for (const timeSlot of showtime.times) {
                for (const t of timeSlot) {
                    if (t.date === dateFormatted) {
                        const theatreName = await getTheatreName(t.theatreId);
                        theatres.push(theatreName);
                        theatreIds.push(t.theatreId);
                    }
                }
            }
    
            return res.status(200).json({ theatres, theatreIds });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    getTimeOfShowtime: async (req, res) => {
        const showtimeId = req.params.id;
        const dateParam = req.params.date;
        const theatreId = req.params.theatreId;
        
        const dateFormatted = dateParam.replace(/-/g, "/");

        try {
            const showtime = await Showtime.findById(showtimeId);
            if (!showtime) {
                return res.status(404).json({ message: 'Showtime not found' });
            }
            
            const timeSlots = showtime.times.flat().filter(t => t.date === dateFormatted && t.theatreId === theatreId);
            const times = timeSlots.map(t => t.time);
            
            return res.status(200).json({ times });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }


}

module.exports = otherController;
