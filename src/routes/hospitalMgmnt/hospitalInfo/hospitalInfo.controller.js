const {
    getHospitalInfo,
    saveHospitalInfo,
    modifyHospitalInfo,
    deleteHospital
} = require('../../../models/hospitalMgmnt/hospitalInfo/hospital.model')

async function httpGetHospitalInfo(req, res){
    try {
        return res.status(200).json(await getHospitalInfo())
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpPostSaveHospitalInfo(req,res){
    try {
        const hospital = req.body;
        await saveHospitalInfo(hospital);
    
        return res.status(200).json(hospital)
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPutModifyHospitalInfo(req, res){
    try {
    const hospital = await modifyHospitalInfo(req.params.id, req.body); 

    if(!hospital) return res.status(404).json('The hospital with the given id does not exist!');

    res.status(200).json("Hospital with the given Id has been modified.") 
    
    } catch (error) {
        res.status(500).json(error)
    }  
}

async function httpDeleteHospital(req, res){
    try {
        const hospital = await deleteHospital(req.params.id);

        if(!hospital) return res.status(404).send('No hospital was found!');
        res.status(200).json("Hospital has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }
   
}

module.exports = {
    httpGetHospitalInfo,
    httpPostSaveHospitalInfo,
    httpPutModifyHospitalInfo,
    httpDeleteHospital
}