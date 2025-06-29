import express from "express";
import { body } from "express-validator";
import { createStudents, getAllStudents, updateStudents, getStudentById, deleteStudent } from "../controller/studentController.js";
const router = express.Router();

router.post("/students",
  body("name", "Name id required").notEmpty(),
  body("name", "only alphabet allow").matches(/^[A-Za-z\s]+$/),
  body("email", "Email is required").notEmpty(),
  body("email", "Email must be valid").isEmail(),
  createStudents,
);
router.get("/students", getAllStudents);
router.put("/student/:id", updateStudents);
router.get("/students/:id", getStudentById);
router.delete("/student/:id", deleteStudent);

export default router;
