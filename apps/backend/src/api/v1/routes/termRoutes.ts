import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { 
    deleteTermSchema, 
    getTermByIdSchema, 
    postTermSchema 
} from "../validations/termValidation";
import * as termController from "../controllers/termController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

const router: Router = express.Router();

// Note: Joi validates request components but not authorization
// therefore we leave user id out of the validation (since clerk alone supplies it)

// HTTP Request authorization header includes session token
// this is used by Clerk in the back-end to get the user's id from Clerk
// we store it in our database to manage user-specific data in our app
router.get(
    "/terms", 
    findOrCreateUser,
    termController.getAllTerms
);

router.get(
    "/terms/:id", 
    findOrCreateUser,
    validateRequest(getTermByIdSchema), 
    termController.getTermById
);

router.post(
    "/terms", 
    requireAuth(),
    validateRequest(postTermSchema), 
    termController.createTerm
);

router.put(
    "/terms/:id", 
    requireAuth(),
    validateRequest(postTermSchema),
    termController.updateTerm
);

router.delete(
    "/terms/:id",
    requireAuth(),
    validateRequest(deleteTermSchema),
    termController.deleteTerm
);

export default router;