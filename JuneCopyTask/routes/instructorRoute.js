import express from "express";
import { body } from "express-validator";
import { createInstructor, getAllInstructor,getIById,updateInstructor,deleteInstructor} from "../controller/instructorController.js";
const router = express.Router();

router.post("/instructors",
  body("name", "Name id required").notEmpty(),
  body("name", "only alphabet allow").matches(/^[A-Za-z\s.'-]+$/),
  body("bio", "bio required").notEmpty(),
  createInstructor,
);
router.get("/instructors", getAllInstructor);
router.put("/instructors/:id",updateInstructor);
router.get("/instructors/:id",getIById);
router.delete("/instructors/:id", deleteInstructor);

export default router;
