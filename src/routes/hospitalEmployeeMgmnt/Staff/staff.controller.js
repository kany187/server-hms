const Staff = require('../../../models/hospitalEmployeeMgmnt/Staff/staff.mongo');

async function httpGetStaff(req, res){

     let query = {};

      // Check for search query parameter
  if (req.query.search) {
    const search = req.query.search;
    // Add search term to the query
    query = { $or: [ 
        { 'employeeId.firstName': { $regex: search, $options: 'i' } }, 
    { "employeeId.lastName": { $regex: search, $options: 'i' } } ] };
  }

  // Loop through optional query parameters
  const keys = Object.keys(req.query);
  keys.forEach((key) => {
    if (key === 'search') {
      // Skip search parameter
    } else if (req.query[key] === 'All') {
      // If 'All' is provided, do not add it to the filter
      //query[key] = req.query[key];
    } else {
      query[key] = req.query[key];
    }
  });

  // Check for ordering query parameter
  if (req.query.ordering) {
    const ordering = req.query.ordering;
    // Add ordering field to the query
    query[ordering] = { $exists: true };
    // If ordering field is deptName, set its value to ordering value
    if (ordering === 'deptName') {
      query[ordering] = 'Chirurgie';
    }
  }


     //console.log(query);

    try {

        const filteredProducts = await Staff.aggregate([
            { $lookup: {
                from: 'hospitalemployees',
                localField: 'employeeId',
                foreignField: '_id',
                as: 'employeeId'
              }
            },
            { $unwind: '$employeeId' },
            { $match: query },
            {
                $project: {
                    _id: 1,
                    role: 1,
                    deptName: 1,
                    status: 1,
                    'employeeId.firstName': 1,
                    'employeeId.lastName': 1,
                    'employeeId._id': 1
                  }
            }
          ])

          res.status(200).send(filteredProducts);
           
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpGetStaffRole(req, res){
    try {
       const staff =  await Staff.find().populate('employeeId', 'firstName lastName -_id')
        return res.status(200).json(staff)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpGetStaffByRole(req, res){
    try {
    
        let key = Object.keys(req.query)[0]
        let value = Object.values(req.query)[0]
        //console.log(req.query.value)
        let staff =  await Staff.find({
            [key] : value
           }).populate('employeeId', 'firstName lastName -_id')

           if(staff.length === 0){

            staff =  await Staff.find().populate('employeeId', 'firstName lastName -_id')
            return res.status(200).json(staff)
           }

           return res.status(200).json(staff)
  
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpGetStaffInfoById(req, res){
    try {
       const staff =  await Staff.findById(req.params.id)

       if(!staff) return res.status(404).send('The staff with the given id was not found!');

        return res.status(200).json(staff)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpPostSaveStaffInfo(req,res){
    try {
        const staff = new Staff(req.body);
        await staff.save();
    
        return res.status(200).json(staff)
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPutModifyStaffInfo(req, res){
    try {

    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }); 

    if(!staff) return res.status(404).json('The hospitalStaff with the given id does not exist!');

    res.status(200).json("Hospitalstaff with the given Id has been modified.") 
    
    } catch (error) {
        res.status(500).json(error)
    }  
}

async function httpDeleteStafflEmployee(req, res){
    try {
        const staff = await Staff.findByIdAndRemove(req.params.id);

        if(!staff) return res.status(404).send('No hospital staff was found!');
        res.status(200).json("Hospital staff has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }
   
}

module.exports = {
    httpGetStaff,
    httpGetStaffRole,
    httpGetStaffByRole,
    httpDeleteStafflEmployee,
    httpGetStaffInfoById,
    httpPostSaveStaffInfo,
    httpPutModifyStaffInfo
}