import Joi, { ObjectSchema } from "joi";
/**
 * Because Joi's responsibility is for request validation (not auth),
 * we do not validate for userId (which is not included in body/query/params)
 * */ 

// schema for getting terms by ID
export const getTermByIdSchema: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "Term Id is required",
        "string.empty": "Term Id cannot be empty"
    }),
    userId: Joi.string().optional()
});

export const postTermSchema: ObjectSchema = Joi.object({
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

export const deleteTermSchema: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "Term Id is required",
        "string.empty": "Term Id cannot be empty"
    }),
});