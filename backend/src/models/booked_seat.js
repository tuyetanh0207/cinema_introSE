const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookedSeatSchema = new Schema({
    showtimeId: {
        type: Schema.Types.ObjectId,
        ref: 'Showtime',
        required: true,
    },
    theatreId: {
        type: Schema.Types.ObjectId,
        ref: 'Theatre',
        required: true,
    },
    seatId: {
        type: Schema.Types.ObjectId,
        ref: 'Seat',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Booked']
      }
})

const BookedSeat = mongoose.model('BookedSeat', BookedSeatSchema);

module.exports = BookedSeat;