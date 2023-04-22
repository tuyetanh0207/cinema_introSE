const mongoose = require('mongoose');

const { Schema } = mongoose;

const theatreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  screens: {
    type: Number,
    required: true,
    min: 1
  }
});

const Theatre = mongoose.model('Theatre', theatreSchema);

module.exports = Theatre;
