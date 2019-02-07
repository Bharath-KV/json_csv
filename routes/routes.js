const Joi = require("joi");
const employeeSchema = require('../schemas/employee').employeeSchema;
const employee = require('../controllers/employee');

module.exports.routes = [

    // Default route
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h
                .response({message: "It's working"})
                .type('application/json')
                .code(200);
        }
    },

    // Route for JSON to CSV Conversion
    {
        method: 'POST',
        path: '/jsonToCSV',
        config: {
            validate: {
                payload: Joi.array().items(Joi.object(employeeSchema))
            }
        },
        handler: async (request, h) => {
    
            let result = null;
            try {
    
                await employee.jsonToCSV(request.payload, (err, res) => {
                    if (err) {
                        console.log(err);
                        result = h
                        .response({error: 'Conversion Failed!!!'})
                        .type('application/json')
                        .code(400);
                    } else {
                        result = h
                        .response({message: 'Conversion successfull!!'})
                        .type('application/json')
                        .code(200);
                    }
                });

                return result;
    
            } 
            catch (err) {
                console.log(err);
                return h
                .response({error: 'Conversion Failed!!!'})
                .type('application/json')
                .code(400);
            }
    
        }
    },

    // Route for saving CSV file
    {
        method: 'POST',
        path: '/saveCSV',
        config: {
            payload: {
                maxBytes: 209715200,
                output: 'stream',
                parse: false
            }
        },
        handler: async (request, h) => {

            try {
                
                let result = null;
                await employee.saveCSV(request.payload, (err, res) => {
                    if (err) {
                        result = h
                        .response({error: 'Could not save the file!'})
                        .type('application/json')
                        .code(400);
                    } else {
                        result = h
                        .response({message: 'File saved successfully...'})
                        .type('application/json')
                        .code(200);
                    }
                });

                return result;
                
    
            } catch (err) {
                // error handling
                console.log(err);
               return h
               .response({error: 'Could not save the file!'})
               .type('application/json')
               .code(400);
            }

        }
    }
];