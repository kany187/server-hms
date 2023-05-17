const { getAllAppointments,
        getAppointmentById,
        scheduleNewAppointment,
        modifyAppointment,
        deleteAppointment
 } = require('../../models/appointmentManagement/appointment.model')

async function httpGetAllAppointments(req, res){
    try {
        return res.status(200).json(await getAllAppointments())
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpGetAppointmentById(req, res){

    try {
        const appointmentId =  await getAppointmentById(req.params.id)
 
        if(!appointmentId) return res.status(404).send('The patient with the given id was not found!');
 
         return res.status(200).json(appointmentId)

     } catch (error) {

         res.status(500).json(error)
     }
}

async function httpPostNewAppointment(req,res){
    try {
        const appointment = req.body;
        await scheduleNewAppointment(appointment);
    
        return res.status(200).json(appointment)
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPutAppointment(req, res){
    try {
    const appointment = await modifyAppointment(req.params.id, req.body);

    if(!appointment) return res.status(404).send('The appointment with the given id does not exist!');

    res.status(200).res.json("Appointment has been modified.")  
    } catch (error) {
        res.status(500).json(error)
    }  
}

async function httpDeleteAppointment(req, res){
    try {
        const appointment = await deleteAppointment(req.params.id);

        if(!appointment) return res.status(404).send('No appointment was found!');
        res.status(200).res.json("Appointment has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }
   
}


module.exports = {
    httpGetAllAppointments,
    httpGetAppointmentById,
    httpPostNewAppointment,
    httpPutAppointment,
    httpDeleteAppointment
}

