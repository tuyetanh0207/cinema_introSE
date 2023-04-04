const mongoose = require('mongoose');

const { Schema } = mongoose;
const slideSchema = new Schema ({
    name: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String
    },
    url: {
        type: String,
        require: true,
    }
}
)

const Slide = mongoose.model('Slide', slideSchema);

module.exports = Slide;