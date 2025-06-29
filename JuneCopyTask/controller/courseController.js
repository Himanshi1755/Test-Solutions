import Course from "../models/courseModel.js";
import Instructor from "../models/instructorModel.js";
import { validationResult } from "express-validator";

export const createCourses = async (request, response) => {
    try {

        let error = validationResult(request);
    if(!error.isEmpty()){
         return response.status(400).json({ error: "Bad request"});
    }
        let { title, description, instructorId } = request.body;

        const instructor = await Instructor.findByPk(instructorId);
        if (!instructor) {
            return res.status(400).json({ message: "Instructor not found" });
        }

        let course = await Course.create({title, description, instructorId});

        response.status(201).json({ message: "Sucessfully created course." , course});

    } catch (error) {
        response.status(500).json({ message: "Something error while created course ." }, error);
    }
}

export const getAllInstInfo = async (request, response) => {
    //     GET /courses — Get all courses with instructor info
    // GET /courses/:id — Get course with enrolled students
    try {
        // let instId = request.params.id;
        let check = await Course.findAll({ include: Instructor});
    
        response.status(201).json({ message: "Courses are ", check });

    } catch (error) 
    {
        console.log(error);
        response.status(500).json({ message: "Something error to getCourses" });
    }
}

export const getByEntrolledStu = async (request, response) => {
    try {
const courseId = request.params.id;


    }catch (err) {
        response.status(500).json({ message: "Error while fetching course", err });
    }
};

export const updateCourse = async (request, response) => {
    try {
        const courseId = request.params.id;
        let coursedata = request.body;
        const course = await Course.findByPk(courseId);
        if (!course) {
            return response.status(404).json({ message: "Course not found" })
        }

        let  updatedCourse = await course.update(coursedata);

        response.status(200).json({ message: "Courses data upadted ", updatedCourse });

    } catch (err) {
        response.status(500).json({ message: "Something Went wrong ", err });
    }
}

export const deleteCourse = async (req, res) => {
    try {
         const courseId = req.params.id;
        let course = await Course.findByPk(courseId);

        if(!course) {
            res.status(404).json({ message: "Coursesnot found" });
        }
        await course.destroy();
        res.status(200).json({ message: "Successfully Deleted!!" });

    } catch (err) {
        res.status(200).json({ message: "Something Went Wrong " });

    };
};
