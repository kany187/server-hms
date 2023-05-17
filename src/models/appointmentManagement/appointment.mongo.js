const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    title: {
        type: String
    },
    doctorID: {
        type: String,
        //required: true
    },
    phone: {
        type: String,
    },
    service: {
        type: String
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        //required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    desc: {
        type: String
    }
})

//Connect appointmentSchema with the "appointment" collection in the db.
module.exports = mongoose.model('Appointment', appointmentSchema);