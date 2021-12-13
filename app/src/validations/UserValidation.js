const Joi=require("joi")

const createValidation=Joi.object({
    first_name:Joi.string().required().min(3),
    last_name:Joi.string().required().min(3),
    nicname:Joi.string().required().min(3),
    password:Joi.string().required().min(8),
    email:Joi.string().required().email().min(8)
})


module.exports={
    createValidation,

}