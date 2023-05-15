const Seat = require('../models/seat');
const BookedSeat = require('../models/booked_seat')

const BookedSeatController = {
    createBookedSeat: async (req, res) => {
        try {
            const { showtimeId, theatreId, seatId, time } = req.body;
            const booked_seat = new BookedSeat({
                showtimeId,
                theatreId,
                seatId,
                time,
                status: 'Pending'
            });
            res.status(201).json(booked_seat);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating bookedSeat' });
        }
    },

    changeStatus: async (req, res) => {
        try {
            const id = req.param.id;
            const { status } = req.body;
            const updatedSeat = await BookedSeat.findByIdAndUpdate(id, { status }, { new: true });
            res.status(200).json(updatedSeat);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
}

module.exports = BookedSeatController;