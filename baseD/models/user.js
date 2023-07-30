const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true 
    },
    Calle: {
        type: String,
        required: true
    },
    Casa: {
        type: String,
        required: true
    },
    Cel: {
        type: String,
        required: true
    }


}); 

module.exports = mongoose.model('User', UserSchema);