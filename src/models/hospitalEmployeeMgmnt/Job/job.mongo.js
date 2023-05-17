const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    minDegree: {
        type: String,
    },
    minSalary: {
        type: String
    },
   
})


module.exports = mongoose.model('Job', jobSchema);