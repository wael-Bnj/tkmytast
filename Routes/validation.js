const Joi = require('@hapi/joi');

const ajoutprofileValidation =(data)=>{
    const schema = {
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email()
}
return Joi.validate(data,schema);
}
module.exports.ajoutprofileValidation=ajoutprofileValidation;
