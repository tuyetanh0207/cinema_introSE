const Showtime = require('../models/showtime');

const showtimeController = {
    createShowtime: async (req, res) => {
        const showtime = new Showtime(req.body);
    
        const showtimeExists = await Showtime.exists({ movieId: req.body.movieId });
        if (showtimeExists) 
            return res.status(409).json({ error: 'Showtime already exists' });

        try {
            await showtime.save();
            res.status(201).json(showtime);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    getAllShowtimes: async (req, res) => {
        try {
            const showtimes = await Showtime.find({});
            res.status(200).json(showtimes);
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    },

    getShowtimeById: async (req, res) => {
        const _id = req.params.id;

        try {
            const showtime = await Showtime.findById(_id);
            if (!showtime) return res.status(404).json({ error: 'Showtime does not exist' });
            return res.status(200).json(showtime);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    },

    updateShowtimeById: async (req, res) => {
        const _id = req.params.id;
        const updates = Object.keys(req.body);
        const allowedUpdates = ['movieId', 'theatreId', 'startDate', 'endDate'];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
        
        if (!isValidOperation) return res.status(400).json({ error: 'Invalid updates' });
        
        try {
            const showtime = await Showtime.findById(_id);
            if (!showtime) return res.sendStatus(404);
            updates.forEach((update) => (showtime[update] = req.body[update]));
            await showtime.save();
            return res.status(200).json(showtime);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    },

    deleteShowtimeById: async (req, res) => {
        const _id = req.params.id;
        try {
            const showtime = await Showtime.findByIdAndDelete(_id);
            if (!showtime) return res.sendStatus(404);
            return res.status(200).json(showtime);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}

module.exports = showtimeController;
