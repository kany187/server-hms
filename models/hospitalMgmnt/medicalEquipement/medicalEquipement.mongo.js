const mongoose = require('mongoose');

const medicalEquipementSchema = new mongoose.Schema({
    hospitalId: {
       
    },
    purchasePrice: {
        type: String,
    },
    datePurchased: {
        type: Date
    },
    dateAssignToHospital: {
        type: Date
    },
    type: {
        type: String
    },
    make: {
        type: String
    },
    year: {
        type: Date
    },
    color: {
        type: String
    },
    availability: {
        type: Boolean
    },
    lastMaintenanceDate: {
        type: Date
    },
    notes: {
        type: String
    }
})


module.exports = mongoose.model('MedicalEquipment', medicalEquipementSchema);