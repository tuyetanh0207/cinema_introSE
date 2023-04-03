const mongoose = require('mongoose');

const { Schema } = mongoose;

const theatreSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  
  image: {
    type: String,
  },
});

const Theatre = mongoose.model('Theatre', theatreSchema);

module.exports = Theatre;
