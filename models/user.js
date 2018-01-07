const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    googleId: String,
    name: String
});

mongoose.model('users', userSchema);