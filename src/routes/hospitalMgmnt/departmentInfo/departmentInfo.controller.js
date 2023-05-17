const {
    getDepartmentInfo,
    saveDepartmentInfo,
    modifyDepartmentInfo,
    deleteDepartment
} = require('../../../models/hospitalMgmnt/departmentInfo/department.model')

const Hospital = require('../../../models/hospitalMgmnt/hospitalInfo/hospital.mongo');

async function httpGetDepartmentInfo(req, res){
    try {
        return res.status(200).json(await getDepartmentInfo())
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpPostSaveDepartmentInfo(req,res){
    try {
        const hospital = await Hospital.findById(req.body.hospitalId);
        if(!hospital) return res.status(400).send('Invalid hospital');
        
        const department = req.body;
        await saveDepartmentInfo(department);
    
        return res.status(200).json(department)
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPutModifyDepartmentInfo(req, res){
    try {
    const department = await modifyDepartmentInfo(req.params.id, req.body); 

    if(!department) return res.status(404).json('The Department with the given id does not exist!');

    res.status(200).json("Department with the given Id has been modified.") 
    
    } catch (error) {
        res.status(500).json(error)
    }  
}

async function httpDeleteDepartment(req, res){
    try {
        const department = await deleteDepartment(req.params.id);

        if(!department) return res.status(404).send('No Department was found!');
        res.status(200).json("Department has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }
   
}

module.exports = {
    httpGetDepartmentInfo,
    httpPostSaveDepartmentInfo,
    httpPutModifyDepartmentInfo,
    httpDeleteDepartment
}