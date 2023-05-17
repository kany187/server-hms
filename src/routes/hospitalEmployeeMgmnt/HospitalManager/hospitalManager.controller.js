const {
    getHospitalManagerInfo,
    saveHospitalManagerInfo,
    modifyHospitalManagerInfo,
    deleteHospitalManager
} = require('../../../models/hospitalEmployeeMgmnt/HospitalManager/hospitalManger.model');


async function httpGetHospitalManagerInfo(req, res){
    try {
        return res.status(200).json(await getHospitalManagerInfo())
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpPostSaveHospitalManagerInfo(req,res){
    try {
        const employeeId = req.body.employee;
        const hospitalManager = req.body;
        
        await saveHospitalManagerInfo(employeeId,hospitalManager);
    
        return res.status(200).json(hospitalManager)
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPutModifyHospitalManagerInfo(req, res){
    try {
    const hospitalManager = await modifyHospitalManagerInfo(req.params.id, req.body); 

    if(!hospitalManager) return res.status(404).json('The hospitalManager with the given id does not exist!');

    res.status(200).json("hospitalManager with the given Id has been modified.") 
    
    } catch (error) {
        res.status(500).json(error)
    }  
}

async function httpDeleteHospitalManager(req, res){
    try {
        const hospitalManager = await deleteHospitalManager(req.params.id);

        if(!hospitalManager) return res.status(404).send('No hospitalManager was found!');
        res.status(200).json("hospitalManager has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }
   
}

module.exports = {
    httpGetHospitalManagerInfo,
    httpPostSaveHospitalManagerInfo,
    httpPutModifyHospitalManagerInfo,
    httpDeleteHospitalManager
}