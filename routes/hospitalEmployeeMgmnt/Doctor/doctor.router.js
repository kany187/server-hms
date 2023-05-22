const express = require('express');

const {
    httpGetDoctor,
    httpDeleteDoctorlEmployee,
    httpGetDoctorByID,
    httpPostSaveDoctorInfo,
    httpPutModifyDoctorInfo
} = require('./doctor.controller');

const doctorInfoRouter = express.Router();

doctorInfoRouter.get('/', httpGetDoctor);
doctorInfoRouter.get('/:id', httpGetDoctorByID);
doctorInfoRouter.post('/', httpPostSaveDoctorInfo);
doctorInfoRouter.put('/:id', httpPutModifyDoctorInfo);
doctorInfoRouter.delete('/:id', httpDeleteDoctorlEmployee);

module.exports = doctorInfoRouter;