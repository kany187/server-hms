const express = require('express');

const { 
    httpGetDepartmentInfo,
    httpPostSaveDepartmentInfo,
    httpPutModifyDepartmentInfo,
    httpDeleteDepartment
 } = require('./departmentInfo.controller')

//This route manage patient appointments and availability
const departmentInfoRouter = express.Router();

departmentInfoRouter.get('/', httpGetDepartmentInfo);
departmentInfoRouter.post('/', httpPostSaveDepartmentInfo);
departmentInfoRouter.put('/:id', httpPutModifyDepartmentInfo);
departmentInfoRouter.delete('/:id', httpDeleteDepartment);

module.exports = departmentInfoRouter;