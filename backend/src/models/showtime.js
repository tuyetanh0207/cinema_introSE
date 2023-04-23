const mongoose = require('mongoose');

const { Schema } = mongoose;
const showtimeSchema = new Schema({
  movieId: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  theatreId: {
    type: Schema.Types.ObjectId,
    ref: 'Theatre',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  times: [{
    type: String,
  }], // because the coming soon movie doesnt require show_time_times
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  }
});

const Showtime = mongoose.model('Showtime', showtimeSchema);

module.exports = Showtime;
