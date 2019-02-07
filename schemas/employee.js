const Joi = require('joi');

exports.employeeSchema = {
    employee_id: Joi.string().required(), // employee id --> mandatory
    name: Joi.string().required(), // employee name --> mandatory
    age: Joi.number().optional(), // employee age --> optional
    email: Joi.string().required(), // employee email --> mandatory
    phone: Joi.number().required() // employee phone number --> mandatory
};
