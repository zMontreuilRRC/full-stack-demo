import express, {Router} from "express";
// TODO: Add validation schema and middleware
// import { validateRequest } from "../middleware/validate";
// import { termSchema } from "../validations/termValidation";
import * as userTermController from "../controllers/userTermController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";
import { validateRequest } from "../middleware/validate";
import { userTermSchema } from "../validations/userTermValidations";

const router: Router = express.Router();

router.post(
    "/terms/:termId/favourite",
    requireAuth(),
    findOrCreateUser, 
    validateRequest(userTermSchema),
    userTermController.createUserTerm
);

router.delete(
    "/terms/:termId/favourite",
    requireAuth(),
    findOrCreateUser,
    validateRequest(userTermSchema),
    userTermController.deleteUserTerm
);

export default router;