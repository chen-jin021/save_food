// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose'),
    URLSlugs = require('mongoose-url-slugs');
const Regex = require('regex');

const validateEmail = function(email) {
    const re = new Regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return re.test(email)
};

const UserSchema = new mongoose.Schema({
    // username provided by authentication plugin
    // password hash provided by authentication plugin
    name: {type: String},
    email: {type: String, unique: true, required: "Email Address is required", validate: [validateEmail, 'Please fill a valid email address'],},
    phone: {type: String, unique: true, required: true},
    readlist: []
});


const User = mongoose.model('User', UserSchema);
mongoose.connect('mongodb://localhost/zanyoDb')

module.exports = {
    User : User
}
