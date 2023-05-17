const express = require('express');

const {
    httpGetStaff,
    httpGetStaffRole,
    httpGetStaffByRole,
    httpDeleteStafflEmployee,
    httpGetStaffInfoById,
    httpPostSaveStaffInfo,
    httpPutModifyStaffInfo
} = require('./staff.controller');

const staffInfoRouter = express.Router();

staffInfoRouter.get('/', httpGetStaff);
staffInfoRouter.get('/r', httpGetStaffRole);
staffInfoRouter.get('/v', httpGetStaffByRole);
staffInfoRouter.get('/:id', httpGetStaffInfoById);
staffInfoRouter.post('/', httpPostSaveStaffInfo);
staffInfoRouter.put('/:id', httpPutModifyStaffInfo);
staffInfoRouter.delete('/:id', httpDeleteStafflEmployee);

module.exports = staffInfoRouter;