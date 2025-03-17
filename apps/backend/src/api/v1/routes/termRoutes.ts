import express, {Router} from "express";
import * as termController from "../controllers/termController";

const router: Router = express.Router();

router.get("/terms", termController.getAllTerms);
router.get("/terms/:id", termController.getTermById);

router.post("/terms", termController.createTerm);

router.put("/terms/:id", termController.updateTerm);

router.delete("/terms/:id", termController.deleteTerm);

export default router;