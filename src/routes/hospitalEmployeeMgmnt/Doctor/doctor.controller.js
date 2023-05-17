const Doctor = require('../../../models/hospitalEmployeeMgmnt/Doctors/doctor.mongo');

async function httpGetDoctor(req, res){
    try {
        const doctor =  await Doctor.find()
        .populate('employeeId', 'firstName lastName phone email-_id')
        .populate('departmentId', 'deptName -_id')

         return res.status(200).json(doctor)
     } catch (error) {
         res.status(500).json(error)
     }
}


async function httpGetDoctorByID(req, res){
    try {
        const doctor =  await Doctor.findById(req.params.id)
 
        if(!doctor) return res.status(404).send('The doctor with the given id was not found!');
 
         return res.status(200).json(doctor)
     } catch (error) {
         res.status(500).json(error)
     }
}

async function httpPostSaveDoctorInfo(req,res){
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
    
        return res.status(200).json(doctor)
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPutModifyDoctorInfo(req, res){
    try {

    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }); 

    if(!doctor) return res.status(404).json('The doctor with the given id does not exist!');

    res.status(200).json("The Doctor with the given Id has been modified.") 
    
    } catch (error) {
        res.status(500).json(error)
    }  
}

async function httpDeleteDoctorlEmployee(req, res){
    try {
        const doctor = await Doctor.findByIdAndRemove(req.params.id);

        if(!doctor) return res.status(404).send('No doctor was found!');
        res.status(200).json("Doctor has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }
   
}

module.exports = {
    httpGetDoctor,
    httpDeleteDoctorlEmployee,
    httpGetDoctorByID,
    httpPostSaveDoctorInfo,
    httpPutModifyDoctorInfo
}