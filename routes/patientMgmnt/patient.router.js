const express = require('express');

const { 
    httpGetPatientInfo,
    httpGetPatientInfoById,
    httpPostPatientInfo,
    httpPutPatientInfo,
    httpDeletePatientInfo
 } = require('./patient.controller')

//This route manage patient appointments and availability
const patientInfoRouter = express.Router();

patientInfoRouter.get('/', httpGetPatientInfo);
patientInfoRouter.get('/:id', httpGetPatientInfoById);
patientInfoRouter.post('/', httpPostPatientInfo);
patientInfoRouter.put('/:id', httpPutPatientInfo);
patientInfoRouter.delete('/:id', httpDeletePatientInfo);

module.exports = patientInfoRouter ;