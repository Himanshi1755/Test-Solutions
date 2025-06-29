import express from "express";
import { body } from "express-validator";
import { createEntroll, getAllEntroll ,getEnrollmentsByStudentId,deleteEntroll} from "../controller/enrollmentsController.js";

const router = express.Router();

router.post("/enrollments",createEntroll);
router.get("/enrollments", getAllEntroll);
router.get("/enrollments/:id",getEnrollmentsByStudentId);
router.delete("/enrollments/:id",deleteEntroll);

export default router;
