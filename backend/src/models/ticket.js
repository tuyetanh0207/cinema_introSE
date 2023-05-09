const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  seatId: {
    type: Schema.Types.ObjectId,
    ref: 'Seat',
    required: true,
  },
  showtimeId: {
    type: Schema.Types.ObjectId,
    ref: 'Showtime',
    required: true,
  },
  reservationId: {
    type: Schema.Types.ObjectId,
    ref: 'Reservation',
    required: true,
  },
  room: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Booked', 'Canceled']
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
