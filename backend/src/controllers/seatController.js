const express = require('express');
const fs = require('fs');

const Seat = require('../models/seat');

const seatController = {
    uploadSeats: async (req, res) => {
        try {
            const file = req.file;
            if (!file) {
              return res.status(400).json({ error: 'No file uploaded' });
            }
        
            // Read the uploaded file
            const fileData = fs.readFileSync(file.path, 'utf-8');
            const seats = JSON.parse(fileData);
        
            // Add theatres to the database
            const createdSeats = await Seat.insertMany(seats);
        
            // Send response
            res.status(201).json({ message: 'Seats added successfully', createdSeats });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding seats' });
        }
    },

    getAllSeats: async (req, res) => {
        try {
            const seats = await Seat.find({});
            res.status(200).json(seats);
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    }
}

module.exports = seatController;