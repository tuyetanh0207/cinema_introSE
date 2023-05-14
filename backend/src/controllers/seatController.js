const fs = require('fs');

const Seat = require('../models/seat');
const BookedSeat = require('../models/booked_seat')

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
      
          
      
          // Add seats to the database
          const createdSeats = await Seat.insertMany(seats);

          await fs.unlinkSync(file.path);

          // Send response
          res.status(201).json({ message: 'Seats added successfully', createdSeats });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error adding seats' });
        }
    },

    getAllSeats: async (req, res) => {
      try {
        const { showtimeId, theatreId, time } = req.body;
        const booked_seats = await BookedSeat.find({ showtimeId, theatreId, time });
        const seats = await Seat.find({});
        // exclude booked seats from the available seats array
        const available_seats = seats.filter(seat => !booked_seats.some(bookedSeat => bookedSeat.seatId === seat._id));
        res.status(200).json({seats, available_seats});
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    }
    
}

module.exports = seatController;