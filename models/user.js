const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
username: String,
password: String,
email: String,
date: Date
}, { timestamps: true });

const user = mongoose.model('user', userSchema);

module.exports = user;