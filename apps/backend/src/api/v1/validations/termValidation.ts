import Joi, { ObjectSchema } from "joi";

export const termSchema: ObjectSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": "Title is required",
        "string.empty": "Title cannot be empty"
    }),
    definition: Joi.string().required().messages({
        "any.required": "Definition is required",
        "string.empty": "Definition cannot be empty"
    }),
    isFavourite: Joi.boolean()
});