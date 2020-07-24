// importing necessary dependency
const Joi = require("@hapi/joi");

// controls user validation including length of username and password
module.exports = {
    canRegister: data => {
        const schema = Joi.object({
            username: Joi.string().min(6).required(),
            password: Joi.string().min(6).required()
        });
        return schema.validate(data);
    },
    canLogin: data => {
        const schema = Joi.object({
            username: Joi.string().min(6).required(),
            password: Joi.string().min(6).required()
        });
        return schema.validate(data);
    }
};
