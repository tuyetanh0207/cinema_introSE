const express = require('express');
const Cinema = require('../models/cinema');

const cinemaController = {
    createCinema: async (req, res) => {
        const cinema = new Cinema(req.body);
        const cinemaExists = Cinema.exists({ name: req.body.name});
        if (cinemaExists) 
            return res.status(409).json({error: 'Cinema already exists'});
        try {
            await cinema.save();
            res.status(201).json(cinema);
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    },

    getAllCinemas: async (req, res) => {
        try {
            const cinemas = await Cinema.find({});
            res.status(200).json(cinemas);
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    },

    getCinemaById: async (req, res) => {
        const _id = req.params.id;

        try {
            const cinema = await Cinema.findById(_id);
            if (!cinema) return res.status(404).json({eror: 'Cinema does not exist'});
            return res.status(200).json(cinema);
        } catch (e ) {
            return res.status(400).json({error: e.message});
        }
    },

    updateCinemaById: async (req, res) => {
        const _id = req.params.id;
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'ticketPrice', 'city', 'seats', 'seatsAvailable'];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
      
        if (!isValidOperation) return res.status(400).json({ error: 'Invalid updates' });
      
        try {
          const cinema = await Cinema.findById(_id);
          updates.forEach((update) => (cinema[update] = req.body[update]));
          await cinema.save();
          if (!cinema) return res.sendStatus(404);
          return res.status(200).json(cinema);
        } catch (e) {
          return res.status(400).json({error: e.message});
        }
    },

    deleteCinemaById: async (req, res) => {
        const _id = req.params.id;
        try {
            const cinema = await Cinema.findByIdAndDelete(_id);
            if (!cinema) return res.sendStatus(404);
            return res.status(200).json(cinema);
        } catch (e) {
            return res.status(400).json({error: e.message});
        }
    }
}

module.exports = cinemaController;
