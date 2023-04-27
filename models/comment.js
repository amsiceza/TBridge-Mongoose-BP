const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const commentSchema = new mongoose.Schema({
    body: String,
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    postId: {
        type: ObjectId,
        ref: 'Post'
    },
    likes: [{ type: ObjectId, ref: 'User' }],

}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;