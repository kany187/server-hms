const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HospitalEmployee",
        required: true
    },
    role: {
        type: String
    },
    deptName: {
        type: String
    },
    phone: {
        type: String
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('Staff', staffSchema);