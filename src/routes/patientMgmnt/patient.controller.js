const Patients = require('../../models/patientManagement/patient.mongo');
const Guardian = require('../../models/patientManagement/guardian.mongo');

const { mongoConnect} = require('../../startup/mongo');

async function httpGetPatientInfo(req, res){
    try {

        const patient =  await Patients.find()
        return res.status(200).json(patient)

    } catch (error) {

        res.status(500).json(error)

    }
}

async function httpGetPatientInfoById(req, res){

    try {
        const patient =  await Patients.findById(req.params.id)
 
        if(!patient) return res.status(404).send('The patient with the given id was not found!');
 
         return res.status(200).json(patient)

     } catch (error) {

         res.status(500).json(error)
     }
}

async function httpPostPatientInfo(req,res){

    const session =  await mongoConnect()

    try {

        const patient = new Patients(req.body);
        await patient.save();
    
        return res.status(200).json(patient)

    } catch (error) {

        res.status(500).json(error)

    } 
}

async function httpPutPatientInfo(req, res){
    try {

        const patient = await Patients.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }); 
    
        if(!patient) return res.status(404).json('The patient with the given id does not exist!');
    
        res.status(200).json("patient with the given Id has been modified.") 
        
        } catch (error) {
            res.status(500).json(error)
        }  
}

async function httpDeletePatientInfo(req, res){
    try {
        const patient = await Patients.findByIdAndRemove(req.params.id);

        if(!patient) return res.status(404).send('No patient was found!');
        res.status(200).json("patient has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    httpGetPatientInfo,
    httpGetPatientInfoById,
    httpPostPatientInfo,
    httpPutPatientInfo,
    httpDeletePatientInfo
}