const express = require('express');

const { 
    httpGetHospitalManagerInfo,
    httpPostSaveHospitalManagerInfo,
    httpPutModifyHospitalManagerInfo,
    httpDeleteHospitalManager
 } = require('./hospitalManager.controller')

//This route manage patient appointments and availability
const hospitalManagerInfoRouter = express.Router();

hospitalManagerInfoRouter.get('/', httpGetHospitalManagerInfo);
hospitalManagerInfoRouter.post('/', httpPostSaveHospitalManagerInfo);
hospitalManagerInfoRouter.put('/:id', httpPutModifyHospitalManagerInfo);
hospitalManagerInfoRouter.delete('/:id', httpDeleteHospitalManager);

module.exports = hospitalManagerInfoRouter;