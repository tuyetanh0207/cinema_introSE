const mongoose = require('mongoose');

const { Schema } = mongoose;
const showtimeSchema = new Schema({
  movieId: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  times: [{
    type: Schema.Types.Array,
    items: {
      type: Schema.Types.Object,
      properties: {
        time: [{
          type: String,
        }],
        theatreId: {
          type: Schema.Types.ObjectId,
          ref: 'Theatre',
        },
      },
    },
  }], // because the coming soon movie doesnt require show_time_times
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  }
});

const Showtime = mongoose.model('Showtime', showtimeSchema);

module.exports = Showtime;
