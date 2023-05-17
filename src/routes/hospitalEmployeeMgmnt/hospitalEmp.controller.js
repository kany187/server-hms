const multer = require('multer');

const HospitalEmployee = require('../../models/hospitalEmployeeMgmnt/hospitalEmployee.mongo');
const Staff = require('../../models/hospitalEmployeeMgmnt/Staff/staff.mongo');
const Doctor = require('../../models/hospitalEmployeeMgmnt/Doctors/doctor.mongo')

const { mongoConnect} = require('../../startup/mongo');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImg = multer({storage: storage}).single('image');

async function httpGetHospitalEmployeeInfo(req, res){
    try {
       const emp =  await HospitalEmployee.find()
        return res.status(200).json(emp)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpGetHospitalEmployeeInfoById(req, res){
    try {
       const emp =  await HospitalEmployee.findById(req.params.id)

       if(!emp) return res.status(404).send('The employee with the given id was not found!');

        return res.status(200).json(emp)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpPostSaveHospitalEmployeeInfo(req,res){
    try {
        const emp = new HospitalEmployee(req.body);
        await emp.save();
    
        return res.status(200).json(emp)
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPostSaveHospitalEmployeeInfoAndCreateStaff(req,res){
   const session =  await mongoConnect()

   const { firstName, lastName, role, deptName, status } = req.body;
  

    try {

      await session.withTransaction(async() => {

        // Create new HospitalEmployee document
        const hospitalEmployee = await HospitalEmployee.create({ firstName, lastName });

        // Create new Staff document with employeeId referencing the newly created HospitalEmployee document
        const staff = await Staff.create({ employeeId: hospitalEmployee._id, role, deptName, status });

        return res.status(200).json(staff)
        })    

    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPostSaveHospitalEmployeeInfoAndCreateDoctor(req,res){
    const session =  await mongoConnect()
 
    const { firstName, lastName, departmentId, specialty, phone, email } = req.body;
    const { image } = req.file;

     try {
 
       await session.withTransaction(async() => {
        
        let user = await HospitalEmployee.findOne({email})
        if(user) return res.status(400).send('User already registed');

         // Create new HospitalEmployee document
         const hospitalEmployee = await HospitalEmployee.create({ firstName, lastName, phone, email, image });
 
         // Create new Staff document with employeeId referencing the newly created HospitalEmployee document
         const doctor = await Doctor.create({ employeeId: hospitalEmployee._id, departmentId, specialty });

         //const staff = await Staff.create({ employeeId: hospitalEmployee._id, role, deptName, status });
 
         return res.status(200).json(doctor)
         })    
 
     } catch (error) {
         res.status(500).json(error)
     } 
 }

async function httpPutModifyHospitalEmployeeInfo(req, res){
    try {

    const emp = await HospitalEmployee.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }); 

    if(!emp) return res.status(404).json('The hospitalEmp with the given id does not exist!');

    res.status(200).json("HospitalEmp with the given Id has been modified.") 
    
    } catch (error) {
        res.status(500).json(error)
    }  
}

async function httpDeleteHospitalEmployee(req, res){
    try {
        const emp = await HospitalEmployee.findByIdAndRemove(req.params.id);

        if(!emp) return res.status(404).send('No hospitalEmp was found!');
        res.status(200).json("HospitalEmp has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }
   
}

module.exports = {
    httpGetHospitalEmployeeInfo,
    httpGetHospitalEmployeeInfoById,
    httpPostSaveHospitalEmployeeInfo,
    httpPostSaveHospitalEmployeeInfoAndCreateStaff,
    httpPostSaveHospitalEmployeeInfoAndCreateDoctor,
    httpPutModifyHospitalEmployeeInfo,
    httpDeleteHospitalEmployee,
    uploadImg
}