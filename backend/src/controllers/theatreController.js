const fs = require('fs');

const Theatre = require('../models/theatre');

const theatreController = {
    createTheatre: async (req, res) => {
        const theatre = new Theatre(req.body);
        const theatreExists = Theatre.exists({ name: req.body.name});
        if  (theatreExists) 
            return res.status(409).json({error: 'theatre already exists'});
        try {
            await Theatre.save();
            res.status(201).json(theatre);
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    },

    uploadTheatres: async (req, res) => {
        try {
            const file = req.file;
            if (!file) {
              return res.status(400).json({ error: 'No file uploaded' });
            }
        
            // Read the uploaded file
            const fileData = fs.readFileSync(file.path, 'utf-8');
            const theatres = JSON.parse(fileData);
            
            await fs.unlinkSync(file.path);

            // Check if any of the theatres already exist in the database
            const existingTheatre = await Theatre.find({ title: { $in: theatres.map(theatre => theatre.name) } });
            if (existingTheatre.length > 0) {
              const existingTitles = existingTheatre.map(theatre => theatre.name).join(', ');
              return res.status(400).json({ error: `The following theatres already exist: ${existingTitles}` });
            }
            // Add theatres to the database
            const createdTheatres = await Theatre.insertMany(theatres);
        
            // Send response
            res.status(201).json({ message: 'Theatres added successfully', createdTheatres });
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding theatres' });
          }
    },

    getAllTheatres: async (req, res) => {
        try {
            const theatres = await Theatre.find({});
            res.status(200).json(theatres);
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    },

    deleteTheatre: async (req, res) => {
        try {
          const theatre = await Theatre.findById(req.params.id);
          if (!theatre) {
            return res.status(404).json({ error: 'Theatre not found' });
          }
          await Theatre.deleteOne({ _id: req.params.id });
          res.json({ message: 'Theatre deleted successfully' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: e.message });
        }
      },

    updateTheatre: async (req, res) => {
        try {
          const theatre = await Theatre.findByIdAndUpdate(req.params.id, req.body, {
            new: true
          });
          if (!theatre) {
            return res.status(404).send('Theatre not found');
          }
          res.send(theatre);
        } catch (err) {
          console.error(err.message);
          res.status(500).json({ error: e.message });
        }
      },
}


module.exports = theatreController;