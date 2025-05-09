import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
// import { termSchema } from "../validations/termValidation";
import * as userTermController from "../controllers/userTermController";

const router: Router = express.Router();

router.post("/userTerms", userTermController.createUserTerm);

router.delete("/userterms", userTermController.deleteUserTerm);

export default router;