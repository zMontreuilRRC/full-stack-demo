import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { termSchema } from "../validations/termValidation";
import * as termController from "../controllers/termController";

/**
 * Routes determine which endpoints are made available, which controller
 * method to request if that route gets a corresponding request,
 * and invoke validation middleware if needed.
 */

const router: Router = express.Router();

// define routes that Express will listen for requests to
// define method that will be invoked when route gets a request
router.get("/terms", termController.getAllTerms);
router.get("/terms/:id", termController.getTermById);

// methods including data invoked validateRequest middleware
// tested against termSchema
router.post("/terms", validateRequest(termSchema), 
    termController.createTerm);

router.put("/terms/:id", validateRequest(termSchema),
    termController.updateTerm);

router.delete("/terms/:id", termController.deleteTerm);

export default router;