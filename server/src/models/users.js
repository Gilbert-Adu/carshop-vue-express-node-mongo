const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    first_name: {type: String, default: null},
    last_name: {type: String, default: null},
    email: {type: String, unique: true},
    password: {type: String},
    role: {type: String, enum:["normal", "admin"], default:"admin"},
    token: {type: String},
    phone_num: {type: String},
    date_joined: {type: String, default: Date.now()},
    is_admin: {type: Boolean, default: false},
    purchases: {type: Array},
    owner_of: {type: Array}
});

module.exports = mongoose.model('user', userSchema);