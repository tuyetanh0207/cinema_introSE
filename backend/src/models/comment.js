const mongoose = require('mongoose');

const { Schema } = mongoose;
const commentSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
},
    {
        timestamps: true,
    }
)

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;