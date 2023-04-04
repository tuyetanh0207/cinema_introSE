const mongoose = require('mongoose');

const { Schema } = mongoose;

const seatSchema = new Schema({
 row: {
    type: Number,
    require: true,
 },
 seatNumber: {
    type: Number,
    require: true,
 },
 theatreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theatre',
    require: true,
 },
 isAvailable: {
    type: Boolean,
    default: true,
 }
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
