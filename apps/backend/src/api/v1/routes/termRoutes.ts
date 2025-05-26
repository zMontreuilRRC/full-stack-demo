import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { termSchema } from "../validations/termValidation";
import * as termController from "../controllers/termController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

const router: Router = express.Router();

router.get(
    "/terms", 
    findOrCreateUser, 
    termController.getAllTerms
);

router.get(
    "/terms/:id", 
    findOrCreateUser, 
    termController.getTermById
);

router.post(
    "/terms", 
    requireAuth(),
    validateRequest(termSchema), 
    termController.createTerm
);

router.put(
    "/terms/:id", 
    requireAuth(),
    validateRequest(termSchema),
    termController.updateTerm
);

router.delete(
    "/terms/:id",
    requireAuth(),
    termController.deleteTerm
);

export default router;