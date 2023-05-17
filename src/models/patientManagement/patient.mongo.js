const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
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
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    desc: {
        type: String,
    },
    religion: {
        type: String
    },
    nationality: {
        type: String
    },
    marital: {
        type: String
    },
    occupation: {
        type: String
    },
    admission_date: {
        type: String
    },
    discharge_date: {
        type: String
    },
    condition: {
        type: String
    },
    doctorId: {
        type: String,
        // required: true
    },
   
})


module.exports = mongoose.model('Patient', patientSchema);