const Seat = require('../models/seat');
const BookedSeat = require('../models/booked_seat')
const Showtime = require('../models/showtime')

const BookedSeatController = {
    createBookedSeat: async (req, res) => {
        try {
            const { showtimeId, theatreId, seatId, date, time } = req.body;
            const errors = [];

            const theatreExists = await Theatre.exists({ _id: theatreId });
            const seatExists = await Seat.exists({ _id: seatId });

            if (!theatreExists) {
                errors.push('Invalid theatreId');
            }

            if (!seatExists) {
                errors.push('Invalid seatId');
            }

            if (!date) {
                errors.push('Date is required');
            }

            if (!time) {
                errors.push('Time is required');
            } else {
                const showtime = await Showtime.findById(showtimeId);
                if (!showtime) {
                    errors.push('Invalid showtimeId');
                } else {
                    const timeExists = showtime.times.some(timeSlot =>
                        timeSlot.some(t => t.date === date && t.time === time)
                    );
                    if (!timeExists) {
                        errors.push('Invalid date or time');
                    }
                }
            }

            if (errors.length > 0) {
                return res.status(400).json({ errors });
            }

            const booked_seat = new BookedSeat({
                showtimeId,
                theatreId,
                seatId,
                date,
                time,
                status: 'Pending'
            });

            await booked_seat.save();

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