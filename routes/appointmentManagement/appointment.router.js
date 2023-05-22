const express = require('express');

const { httpGetAllAppointments,
        httpGetAppointmentById,
        httpPostNewAppointment,
        httpDeleteAppointment,
        httpPutAppointment
 } = require('./appointment.controller')

//This route manage patient appointments and availability
const appointmentsRouter = express.Router();

appointmentsRouter.get('/', httpGetAllAppointments);
appointmentsRouter.get('/:id', httpGetAppointmentById);
appointmentsRouter.post('/', httpPostNewAppointment);
appointmentsRouter.put('/:id', httpPutAppointment);
appointmentsRouter.delete('/:id', httpDeleteAppointment);

module.exports = appointmentsRouter;