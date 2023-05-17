const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    hospitalName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    street: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    city: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    category: {
        type: String,
        required: true,
        enum: ['small', 'medium', 'large']
    },
})


module.exports = mongoose.model('Hospital', hospitalSchema);