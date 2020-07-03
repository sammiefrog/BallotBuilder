const Joi = require('@hapi/joi');

module.exports = {
    canRegister: (data) => {
        const schema = Joi.object({
            username: Joi.string().min(6).required(),
            password: Joi.string().min(6).required()
        });
        return schema.validate(data);
    },
    canLogin: (data) => {
        const schema = Joi.object({
            username: Joi.string().min(6).required(),
            password: Joi.string().min(6).required(),
        });
        return schema.validate(data);
    }
}