const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const commentSchema = new mongoose.Schema({
username: String,
body: String,
postId: {
    type: ObjectId,
    ref: 'post'
}
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;