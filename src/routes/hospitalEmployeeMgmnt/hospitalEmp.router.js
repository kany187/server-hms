const express = require('express');

const { 
    httpGetHospitalEmployeeInfo,
    httpGetHospitalEmployeeInfoById,
    httpPostSaveHospitalEmployeeInfo,
    httpPostSaveHospitalEmployeeInfoAndCreateStaff,
    httpPostSaveHospitalEmployeeInfoAndCreateDoctor,
    httpPutModifyHospitalEmployeeInfo,
    httpDeleteHospitalEmployee,
    uploadImg
 } = require('./HospitalEmp.controller')

//This route manage patient appointments and availability
const hospitalEmployeeInfoRouter = express.Router();

hospitalEmployeeInfoRouter.get('/', httpGetHospitalEmployeeInfo);
hospitalEmployeeInfoRouter.get('/:id', httpGetHospitalEmployeeInfoById);
hospitalEmployeeInfoRouter.post('/', httpPostSaveHospitalEmployeeInfo);
hospitalEmployeeInfoRouter.post('/staff', httpPostSaveHospitalEmployeeInfoAndCreateStaff);
hospitalEmployeeInfoRouter.post('/doctor',uploadImg, httpPostSaveHospitalEmployeeInfoAndCreateDoctor);
hospitalEmployeeInfoRouter.put('/:id', httpPutModifyHospitalEmployeeInfo);
hospitalEmployeeInfoRouter.delete('/:id', httpDeleteHospitalEmployee);

module.exports = hospitalEmployeeInfoRouter;