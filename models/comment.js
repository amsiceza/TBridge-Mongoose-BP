const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
username: String,
body: String,
date: Date
}, { timestamps: true });

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;