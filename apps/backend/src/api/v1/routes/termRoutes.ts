import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { termSchema } from "../validations/termValidation";
import * as termController from "../controllers/termController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";

const router: Router = express.Router();

router.get("/terms", findOrCreateUser, termController.getAllTerms);
router.get("/terms/:id", findOrCreateUser, termController.getTermById);

router.post("/terms", validateRequest(termSchema), 
    termController.createTerm);

router.put("/terms/:id", validateRequest(termSchema),
    termController.updateTerm);

router.delete("/terms/:id", termController.deleteTerm);

export default router;