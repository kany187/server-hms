const Appointments = require('./appointment.mongo');
//CREATE
//UPDATE
//DELETE
//GET
//GET ALL

async function getAllAppointments(){
    return await Appointments.find({}, {
        '__v': 0
    })
}

async function getAppointmentById(appointment){
    return await Appointments.findById(appointment);
}

async function scheduleNewAppointment(appointment){
    const newAppointment = new Appointments(appointment);
    await newAppointment.save();;
}

async function modifyAppointment(appointmentId, appointment){
    return await Appointments.findByIdAndUpdate(appointmentId, appointment, {
        new: true
    })
}

async function deleteAppointment(appointment){
   return await Appointments.findByIdAndRemove(appointment);
}

module.exports = {
    getAllAppointments,
    getAppointmentById,
    scheduleNewAppointment,
    deleteAppointment,
    modifyAppointment
}