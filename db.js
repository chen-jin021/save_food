// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

// users
// * our site requires authentication...
// * so users have a username and password
// * they also can have 0 or more lists
const User = new mongoose.Schema({
    // username provided by authentication plugin
    // password hash provided by authentication plugin

    //TODO: set the theme
    lists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});


/*
an Item of which records time stamp of both start and end,
also includes whether or not user chose to have short break
[reference: http://mongoosejs.com/docs/guide.html]
 */
const Item = new mongoose.Schema({
    start : { type : Date, default: Date.now},
    set: {type: Number, min: 1, required: true},
    checked: {type: Boolean, default: false, required: true}
}, {
    _id: true
});

// a grocery list
// * each list must have a related user
// * a list can have 0 or more items
const Users = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    name: {type: String, required: true},
    createdAt: {type: Date, required: true},
    // for whether it is dark themed
    theme: {type: Boolean, default: false, required: true},
    items: [Item]
});

// TODO: add remainder of setup for slugs, connection, registering models, etc. below