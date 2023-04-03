const Movie = require("../models/movie")

const otherController = {
    search: async (req, res) => {
        try {
            const searchTerm = req.query.q;
            const movies = await Movie.find({title: { $regex: searchTerm, $options: 'i'} });
        res.status(200).json({movies, searchTerm});
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    }
}

module.exports = otherController;
