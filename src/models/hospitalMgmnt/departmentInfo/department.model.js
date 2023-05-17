const Department = require('./department.mongo');

async function getDepartmentInfo(){
    return await Department
    .find()
    .populate('hospitalId', 'hospitalName -_id')
}

async function saveDepartmentInfo(department){
    const newDepartment= new Department(department);
    await newDepartment.save();
}

async function modifyDepartmentInfo(departmentId, department){
    return await Department.findByIdAndUpdate(departmentId, department, {
        new: true
    })
}

async function deleteDepartment(department){
    return await Department.findByIdAndRemove(department);
 }

 module.exports = {
    getDepartmentInfo,
    saveDepartmentInfo,
    modifyDepartmentInfo,
    deleteDepartment
 }