const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    body: {
        type: String,
        required: [true, "Please enter a post content"],
    },
    userId: {
        type: ObjectId,
        ref: 'user'
    },
    commentIds: [{ type: ObjectId, ref: 'Comment' }],
    likes: [{ type: ObjectId, ref: 'User' }],
}, { timestamps: true });

//adaptar para que devuelva el nombre del usuario que tiene la id

PostSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;
    }

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;