const Movie = require('../models/movie');

const movieController = {
    // create a movie 
    createMovie: async (req, res) => {
        const movie = new Movie(req.body);
        try {
            const movieExists = await Movie.exists({ title: req.body.title });
            if (movieExists) {
                return res.status(409).json({error: 'Movie already exists'});
            }
            await movie.save();
            res.status(201).json(movie);
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    },
    
    uploadMovieImage: async (req, res, next) => {
        const { file } = req;
        const movieId = req.params.id;
        try {
          const movieExists = await Movie.exists({ _id: movieId });
          if (!movieExists) {
            return res.status(409).json({ error: 'Movie not found' });
          }
          if (!file) {
            const error = new Error('Please upload a file');
            error.httpStatusCode = 400;
            return next(error);
          }
          const movie = await Movie.findById(movieId);
          if (!movie) return res.sendStatus(404);
      
          await movie.updateOne({ image: req.image });
          res.status(201).json({ movie: { ...movie.toObject(), image: req.image } });
        } catch (e) {
          console.log(e);
          res.sendStatus(400).send(e);
        }
    },

    getAllMovies: async (req, res) => {
        try {
            const movies = await Movie.find({});
            res.status(200).json(movies);
        } catch (e) {
            res.status(200).json({error: e.message});
        }
    },

    getMovieById: async (req, res) => {
        const _id = req.params.id;

        try {
            const movie = await Movie.findById(_id);
            if (!movie) return res.status(404).json({eror: 'Movie does not exist'});
            return res.status(200).json(movie);
        } catch (e ) {
            return res.status(400).json({error: e.message});
        }
    },

    updateById: async (req, res) => {
        const _id = req.params.id;
        const updates = Object.keys(req.body);
        const allowedUpdates = [
          'title',
          'image',
          'language',
          'genre',
          'director',
          'cast',
          'description',
          'duration',
          'releaseDate',
          'endDate',
          'rating',
        ];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
      
        if (!isValidOperation) return res.status(400).json({ error: 'Invalid updates!' });
      
        try {
          const movie = await Movie.findById(_id);
          updates.forEach((update) => (movie[update] = req.body[update]));
          await movie.save();
          return !movie ? res.status(404).json({error: 'Movie does not exists'}) : res.status(200).json(movie);
        } catch (e) {
          return res.status(400).json({error: e.message});
        }
    },

    deleteById: async (req, res) => {
        const _id = req.params.id;
        try {
          const movie = await Movie.findByIdAndDelete(_id);
          return !movie ? res.status(404).json({error: 'Movie does not exists'}) : res.status(200).json(movie);
        } catch (e) {
          return res.status(400).json({error: e.message});
        }
    },
}

module.exports = movieController;