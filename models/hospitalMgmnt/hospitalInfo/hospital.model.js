const Hospital = require('./hospital.mongo');

async function getHospitalInfo(){
    return await Hospital.find({})
}

async function saveHospitalInfo(hospital){
    const newHospital = new Hospital(hospital);
    await newHospital.save();
}

async function modifyHospitalInfo(hospitalId, hospital){
    return await Hospital.findByIdAndUpdate(hospitalId, hospital, {
        new: true
    })
}

async function deleteHospital(hospital){
    return await Hospital.findByIdAndRemove(hospital);
 }

 module.exports = {
    getHospitalInfo,
    saveHospitalInfo,
    modifyHospitalInfo,
    deleteHospital
 }