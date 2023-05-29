const express = require('express');

const appointmentsRouter = require('../routes/appointmentManagement/appointment.router');
const hospitalInfoRouter = require('../routes/hospitalMgmnt/hospitalInfo/hospitalInfo.router');
const departmentInfoRouter = require('../routes/hospitalMgmnt/departmentInfo/departmentInfo.router');
const hospitalEmployeeInfoRouter = require('../routes/hospitalEmployeeMgmnt/hospitalEmp.router');
const staffInfoRouter = require('../routes/hospitalEmployeeMgmnt/Staff/staff.router')
const patientInfoRouter = require('../routes/patientMgmnt/patient.router');
const doctorInfoRouter = require('../routes/hospitalEmployeeMgmnt/Doctor/doctor.router');
const userRouter = require('../routes/user/user.router');
const authRouter = require('../routes/user/auth.router');
const conversationRouter = require('../routes/chat/conversation/conversation.router')
const messageRouter = require('../routes/chat/message/message.router')

module.exports = function(app){
    app.use(express.json());
    app.use('/api/appointments', appointmentsRouter);
    app.use('/api/staff', staffInfoRouter);
    app.use('/api/patient', patientInfoRouter);
    app.use('/api/doctor', doctorInfoRouter);
    app.use('/api/hospital', hospitalInfoRouter);
    app.use('/api/department', departmentInfoRouter);
    app.use('/api/hospital/emp', hospitalEmployeeInfoRouter);
    app.use('/api/hospital/conversation', conversationRouter);
    app.use('/api/hospital/message', messageRouter);
    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter)
}