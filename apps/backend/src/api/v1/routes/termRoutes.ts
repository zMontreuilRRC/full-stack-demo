import express, {Router} from "express";
import * as termController from "../controllers/termController";

const router: Router = express.Router();

router.get("/", termController.getAllTerms);
router.post("/", termController.createTerm);
router.put("/:id", termController.updateTerm);
router.delete("/:id", termController.deleteTerm);

export default router;