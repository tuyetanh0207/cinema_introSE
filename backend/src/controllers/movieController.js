const Movie = require('../models/movie');

const movieController = {
    // create a movie 
    createMovie: async (req, res) => {
        const movie = new Movie(req.body);
        try {
            await movie.save();
            res.status(201).json(movie);
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    },
    
    uploadMoviePhoto: async (req, res, next) => {
        const url = `${req.protocol}://${req.get('host')}`;
        const { file } = req;
        const movieId = req.params.id;
        try {
          if (!file) {
            const error = new Error('Please upload a file');
            error.httpStatusCode = 400;
            return next(error);
          }
          const movie = await Movie.findById(movieId);
          if (!movie) return res.sendStatus(404);
          movie.image = `${url}/${file.path}`;
          await movie.save();
          res.send({ movie, file });
        } catch (e) {
          console.log(e);
          res.sendStatus(400).send(e);
        }
    },


    // get all movies
    getAllMovies: async (req, res) => {
        try {
            const movies = await Movie.find({});
            res.status(200).json(movies);
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    },

    // 
}

module.exports = movieController;