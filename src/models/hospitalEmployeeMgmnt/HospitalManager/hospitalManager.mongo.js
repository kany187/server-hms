const mongoose = require('mongoose');

const hospitalManagerSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HospitalEmployee",
        required: true
    },
    assignDate: {
        type: Date,
        required: true
    },
   
})


module.exports = mongoose.model('HospitalManager', hospitalManagerSchema);