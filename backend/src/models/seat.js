const mongoose = require('mongoose');

const { Schema } = mongoose;

const seatSchema = new Schema({
 row: {
    type: Number,
    required: true,
    min: 1,
    max: 5
 },
 seatNumber: {
    type: Number,
    required: true,
 },
 theatreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theatre',
    required: true,
 },
 type: {
   type: Number,
   default: 1,
   enum: [1, 2],
 },
 isAvailable: {
    type: Boolean,
    default: false,
 }
});

seatSchema.virtual('rowLetter').get(function() {
  const rowLetters = ['A', 'B', 'C', 'D', 'E'];
  return rowLetters[this.row - 1];
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
