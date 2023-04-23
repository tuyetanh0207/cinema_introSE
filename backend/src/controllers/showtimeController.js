const Showtime = require('../models/showtime');
const fs = require('fs');


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
            const showtimes = await Showtime.find({}).populate('movieId');
            res.status(200).json(showtimes);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    
      

    getNowShowing: async (req, res) => {
        try {
            const now = new Date();
            const showtimes = await Showtime.find({
              startDate: { $lte: now },
              endDate: { $gte: now },
              isActive: true,
            })
              .populate('movieId')
              .populate('theatreId');
        
            const movies = showtimes.map((showtime) => showtime.movieId);
        
            res.status(200).json(movies);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    },

    getComingSoon: async (req, res) => {
        try {
            const now = new Date();
            const upcomingShowtimes = await Showtime.find({ startDate: { $gt: now } })
              .populate('movieId')
              .populate('theatreId');
            const upcomingMovies = upcomingShowtimes.map(showtime => showtime.movieId);
            res.status(200).json(upcomingMovies);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getShowtimeById: async (req, res) => {
        const _id = req.params.id;
      
        try {
          const showtime = await Showtime.findById(_id);
          if (!showtime) return res.status(404).json({ error: 'Showtime does not exist' });
      
          const movie = await Movie.findById(showtime.movieId);
          if (!movie) return res.status(404).json({ error: 'Movie does not exist' });
      
          const showtimes = await Showtime.find({ movieId: showtime.movieId });
      
          return res.status(200).json({ movie, showtimes });
        } catch (e) {
          return res.status(400).json({ error: e.message });
        }
      },
      
      

    updateShowtimeById: async (req, res) => {
        const _id = req.params.id;
        const updates = Object.keys(req.body);
        const allowedUpdates = ['movieId', 'theatreId', 'startDate', 'endDate', 'isActive'];
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
    },

    uploadShowtimes: async (req, res) => {
        try {
          const file = req.file;
          if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
          }
      
          // Read the uploaded file
          const fileData = fs.readFileSync(file.path, 'utf-8');
          let showtimes = JSON.parse(fileData);
      
          // Modify the date format of startDate and endDate fields
          showtimes = showtimes.map(showtime => {
            const startDateParts = showtime.startDate.split('/');
            showtime.startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
            
            const endDateParts = showtime.endDate.split('/');
            showtime.endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);
            
            return showtime;
          });
      
          await fs.unlinkSync(file.path);
          
          // Check if any of the showtimes already exist in the database
          const existingShowtimes = await Showtime.find({ 
            movieId: { $in: showtimes.map(showtime => showtime.movieId) },
            theatreId: { $in: showtimes.map(showtime => showtime.theatreId) },
            startDate: { $in: showtimes.map(showtime => showtime.startDate) },
            endDate: { $in: showtimes.map(showtime => showtime.endDate) }
          });
          if (existingShowtimes.length > 0) {
            const existingShowtimesMsg = existingShowtimes.map(showtime => 
            `Movie ID ${showtime.movieId} already has a showtime on ${showtime.startDate.toISOString()} - ${showtime.endDate.toISOString()}`
            ).join(', ');
            return res.status(400).json({ error: `The following showtimes already exist: ${existingShowtimesMsg}` });
          }
  
          // Add showtimes to the database
          const createdShowtimes = await Showtime.insertMany(showtimes);
      
          // Send response
          res.status(201).json({ message: 'Showtimes added successfully', createdShowtimes });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error adding showtimes' });
        }
      }      
      
}

module.exports = showtimeController;
