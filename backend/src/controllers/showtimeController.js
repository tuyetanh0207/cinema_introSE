const express = require('express');
const Showtime = require('../models/showtime');

const showtimeController = {
    createShowtime: async (req, res) => {
        const showtime = new showtime(req.body);
        const showtimeExists = showtime.exists({ name: req.body.name});
        if (showtimeExists) 
            return res.status(409).json({error: 'showtime already exists'});
        try {
            await showtime.save();
            res.status(201).json(showtime);
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    },

    getAllshowtimes: async (req, res) => {
        try {
            const showtimes = await showtime.find({});
            res.status(200).json(e);
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    },

    getshowtimeById: async (req, res) => {
        const _id = req.params.id;

        try {
            const showtime = await showtime.findById(_id);
            if (!showtime) return res.status(404).json({eror: 'Showtime does not exist'});
            return res.status(200).json(showtime);
        } catch (e ) {
            return res.status(400).json({error: e.message});
        }
    },

    updateshowtimeById: async (req, res) => {
        const _id = req.params.id;
        const updates = Object.keys(req.body);
        const allowedUpdates = ['startAt', 'startDate', 'endDate', 'movieId', 'cinemaId'];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
        
        if (!isValidOperation) return res.status(400).json({ error: 'Invalid updates' });
        
        try {
            const showtime = await showtime.findById(_id);
            updates.forEach((update) => (showtime[update] = req.body[update]));
            await showtime.save();
            if (!showtime) return res.sendStatus(404);
            return res.status(200).json(showtime);
        } catch (e) {
            return res.status(400).json({error: e.message});
        }
    },

    deleteshowtimeById: async (req, res) => {
        const _id = req.params.id;
        try {
            const showtime = await showtime.findByIdAndDelete(_id);
            if (!showtime) return res.sendStatus(404);
            return res.status(200).json(showtime);
        } catch (e) {
            return res.status(400).json({error: e.message});
        }
    }
}

    

module.exports = showtimeController;