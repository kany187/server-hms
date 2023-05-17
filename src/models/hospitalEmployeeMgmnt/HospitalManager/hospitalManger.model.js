const HospitalManager = require('./HospitalManager.mongo');
const HospitalEmployee = require('../hospitalEmployee.mongo')

async function getHospitalManagerInfo(){
    return await HospitalManager.find()
}

async function saveHospitalManagerInfo(employeeId, hospitalManager){

    await HospitalEmployee.findByIdAndUpdate(
        {_id: employeeId},
        {isManager: true}
    )

    const newHospitalManager = new HospitalManager(hospitalManager);
    await newHospitalManager.save();
}

async function modifyHospitalManagerInfo(hospitalManagerId, hospitalManager){
    return await HospitalManager.findByIdAndUpdate(hospitalManagerId, hospitalManager, {
        new: true
    })
}

async function deleteHospitalManager(hospitalManager){
    
    await HospitalEmployee.findByIdAndUpdate(
        {_id: employeeId},
        {isManager: true}
    )
    return await HospitalManager.findByIdAndRemove(hospitalManager);
 }

 module.exports = {
    getHospitalManagerInfo,
    saveHospitalManagerInfo,
    modifyHospitalManagerInfo,
    deleteHospitalManager
 }