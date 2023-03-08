const Movie = require('../models/movie');

const movieController = {
    // POST /movies - Add a new movie
    addMovie: (req, res) => {
        const movie = new Movie(req.body);
        movie.save().then(() => {
            res.sendStatus(201).json(movie);
        }).catch(err => {
            res.status(400).json({error: err.message});
        });
    },

    // GET /movies - Get all movies
    getAllMovies: (req, res) => {
        Movie.find().then(movies => {
            res.json(movies);
        }).catch(err => {
            res.status(500).json({error: err.message});
        });
    },

    // GET /movies/:id - Get a specific movie by ID
    findMovie: (req, res) => {
        const { id } = req.params;

    }
}