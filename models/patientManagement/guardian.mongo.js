const mongoose = require('mongoose');

const guardianSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    addressStreet: {
        type: String,
        minlength: 5,
        maxlength: 50
    },
    addressCity: {
        type: String,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    dob: {
        type: Date,
        required: true
    },
    desc: {
        type: String,
    },
    relation: {
        type: String
    },
    occupation: {
        type: String
    },
    desc: {
        type: String,
    },
})

module.exports = mongoose.model('Guardian', guardianSchema);