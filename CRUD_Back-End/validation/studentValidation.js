const Joi = require("joi");

// createValidation
const createValidation = (data) => {
    const studentSchema = Joi.object({
        npm: Joi.number().required(),
        name: Joi.string().required(),
        major: Joi.string().required(),
    });

    return studentSchema.validate(data);
};

module.exports ={
    createValidation,
}