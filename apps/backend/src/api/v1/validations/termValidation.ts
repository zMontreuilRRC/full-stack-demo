import Joi, { ObjectSchema } from "joi";

// define the correct shape of a term object received in JSON
// Require a title and definition string at minimum
export const termSchema: ObjectSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": "Title is required",
        "string.empty": "Title cannot be empty"
    }),
    definition: Joi.string().required().messages({
        "any.required": "Definition is required",
        "string.empty": "Definition cannot be empty"
    }),
    id: Joi.string().optional(),
    isFavourite: Joi.boolean().optional()
});