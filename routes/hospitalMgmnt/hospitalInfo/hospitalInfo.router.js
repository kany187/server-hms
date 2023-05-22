const express = require('express');

const { 
    httpGetHospitalInfo,
    httpPostSaveHospitalInfo,
    httpPutModifyHospitalInfo,
    httpDeleteHospital
 } = require('./hospitalInfo.controller')

//This route manage patient appointments and availability
const hospitalInfoRouter = express.Router();

hospitalInfoRouter.get('/', httpGetHospitalInfo);
hospitalInfoRouter.post('/', httpPostSaveHospitalInfo);
hospitalInfoRouter.put('/:id', httpPutModifyHospitalInfo);
hospitalInfoRouter.delete('/:id', httpDeleteHospital);

module.exports = hospitalInfoRouter;