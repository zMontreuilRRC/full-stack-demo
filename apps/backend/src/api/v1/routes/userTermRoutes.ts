import express, {Router} from "express";
// import { validateRequest } from "../middleware/validate";
// import { termSchema } from "../validations/termValidation";
import * as userTermController from "../controllers/userTermController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";

const router: Router = express.Router();

router.post(
    "/terms/:termId/favourite", 
    findOrCreateUser, 
    userTermController.createUserTerm
);

router.delete(
    "/terms/:termId/favourite", 
    findOrCreateUser, 
    userTermController.deleteUserTerm
);

export default router;