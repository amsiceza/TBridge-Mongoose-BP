const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
username: String,
title: String,
body: String,
date: Date
}, { timestamps: true });

const post = mongoose.model('post', PostSchema);

module.exports = post;