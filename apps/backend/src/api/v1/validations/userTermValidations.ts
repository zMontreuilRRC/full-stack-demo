import Joi, { ObjectSchema } from "joi";

// schema for 
export const userTermSchema: ObjectSchema = Joi.object({
    termId: Joi.string().required().messages({
        "any.required": "Term Id is required",
        "string.empty": "Term Id cannot be empty"
    })
});