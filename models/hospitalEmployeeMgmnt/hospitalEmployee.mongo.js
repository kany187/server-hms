const mongoose = require('mongoose');

const hospitalEmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    street: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    city: {
        type: String,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
       // required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        //required: true
    },
    gender: {
        type: String,
        //required: true
    },
    dob: {
        type: Date,
        //required: true
    },
    jobTitle: {
        type: String,
        //required: true
    },
    hiredDate: {
        type: Date,
       // required: true
    },
    isManager: {
        type: Boolean,
        default: false
    },
    managerId: {
        type: String,
    },
    highestDegree: {
        type: String,
        //required: true
    },
    degreeDate: {
        type: String,
        //required: true
    },
    maritalStatus: {
        type: String,
        //required: true
    },
    spouseFirstName: {
        type: String,
        //required: true
    },
    spouseLastName: {
        type: String,
        //required: true
    },
    image: {
        data: Buffer,
        type: String
    }
   
})


module.exports = mongoose.models.HospitalEmployee || mongoose.model('HospitalEmployee', hospitalEmployeeSchema);



