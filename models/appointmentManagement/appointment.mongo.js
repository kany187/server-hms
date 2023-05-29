const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    doctorID: {
        type: String,
        //required: true
    },
    phone: {
        type: String,
    },
    visitType: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    desc: {
        type: String
    }
})

//Connect appointmentSchema with the "appointment" collection in the db.
module.exports = mongoose.model('Appointment', appointmentSchema);