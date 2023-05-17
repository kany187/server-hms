const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    deptName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    deptHead: {
        type: String,
        //required: true,
        minlength: 0,
        maxlength: 50
    },
   
})


module.exports = mongoose.model('Department', departmentSchema);