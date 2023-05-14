const mongoose = require('mongoose');

const { Schema } = mongoose;

const seatSchema = new Schema({
   row: {
      type: String,
      required: true,
      enum: ['A', 'B', 'C', 'D', 'E', 'F']
   },
   seatNumber: {
      type: Number,
      required: true,
   },
   coordinates: {
      type: [Number],
      required: true,
   },
   type: {
      type: Number,
      default: 1,
      enum: [1, 2],
   },
   isAvailable: {
      type: Boolean,
      default: true,
   }
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
