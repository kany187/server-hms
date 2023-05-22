const request = require('supertest');
const HospitalEmployee = require('../../models/hospitalEmployeeMgmnt/hospitalEmployee.mongo')
let app;


describe('/api/hospital/emp', () => {
    beforeEach(() => { app = require('../../server'); })
    afterEach(async () => { 
        app.close(); 
        await HospitalEmployee.remove({})
    })

    describe('Test GET /api/hospital/emp', () => {
        it('It should return all employees', async () => {
            HospitalEmployee.collection.insertMany([
                { firstName: 'firstName1' },
                { lastName: 'lastName2' },
                { spouseFirstName: 'firstName1' },
                { spouseLastName: 'firstName1' },
                { maritalStatus: 'firstName1' },
                { degreeDate: 'firstName1' },
                { highestDegree: 'firstName1' },
                { hiredDate: 'firstName1' },
                { jobTitle: 'firstName1' },
                { dob: 'firstName1' },
                { gender: 'firstName1' },
                { email: 'firstName1' },
                { phone: 'firstName1' },
            ]);

            const res = await request(app)
            .get('/api/hospital/emp')
            .expect('Content-Type', /json/)
            .expect(200);
            //expect(res.body.length).toBe(2);
            // expect(res.body.some(emp => emp.firstName === 'firstName1')).toBeTruthy();
            // expect(res.body.some(emp => emp.lastName === 'lastName2')).toBeTruthy();

        })
    })

    describe('Test GET /:id', () => {
        it('It should return an emp if valid id is passed', async () => {
            const emp = new HospitalEmployee({ 
                firstName: 'firstName',
                 lastName: 'lastName2' ,
                 spouseFirstName: 'firstName1' ,
                 spouseLastName: 'firstName1' ,
                 maritalStatus: 'firstName1' ,
                 degreeDate: 'firstName1' ,
                 highestDegree: 'firstName1' ,
                 hiredDate: 'January 4 1980' ,
                 jobTitle: 'firstName1' ,
                 dob: 'January 4 1980' ,
                 gender: 'firstName1' ,
                 email: 'firstName1' ,
                 phone: 'firstName1' ,
            })
            await emp.save();

            const res = await request(app).get('/api/hospital/emp' + emp._id);

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('firstName');
    

        })
    })

})


//const { mongoConnect, mongoDisconnect } = require('../../startup/mongo');

// describe('', () => {
//     beforeAll(async () => {
//         await mongoConnect()
//     });

//     afterAll(async () => {
//         await mongoDisconnect();
//     })
// })