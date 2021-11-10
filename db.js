// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose'),
    URLSlugs = require('mongoose-url-slugs');


const UserSchema = new mongoose.Schema({
    theme : { type : String, default: 'Light'},
    // username provided by authentication plugin
    // password hash provided by authentication plugin
});

/*
an Item of which records time stamp of both start and end,
also includes whether or not user chose to have short break
[reference: http://mongoosejs.com/docs/guide.html]
 */
const ItemSchema = new mongoose.Schema({
    start : { type : Date, default: Date.now},
    set: {type: Number, min: 1, required: true},
    checked: {type: Boolean, default: false, required: true}
});


const User = mongoose.model('User', UserSchema);
User.Item = mongoose.model('Item', ItemSchema);
mongoose.connect('mongodb://localhost/pomodoroDb')

module.exports = {
    User : User
}

// TODO: add remainder of setup for slugs, connection, registering models, etc. below

