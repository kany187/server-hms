const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HospitalEmployee",
        required: true
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
   
})


module.exports = mongoose.model('Doctor', doctorSchema);