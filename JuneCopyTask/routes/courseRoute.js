import express from "express";
import {body} from "express-validator";
import { createCourses, getAllInstInfo, getByEntrolledStu, updateCourse, deleteCourse } from "../controller/courseController.js";

const router = express.Router();

router.post("/courses" , 
    body("title" , "Title field is required").notEmpty(),
    body("title" , "Only Alphabetics is allowed").matches(/^[A-Za-z\s]+$/),
    body("description" , "desc. field is required").notEmpty(),
    createCourses
 );
 router.get("/courses" , getAllInstInfo );
 router.get("/courses/:id" , getByEntrolledStu);
 router.put("/courses/:id" , updateCourse);
 router.delete("/courses/:id" , deleteCourse);

 export default router;
