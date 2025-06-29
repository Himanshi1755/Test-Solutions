import Course from "../models/courseModel.js";
import Enrollment from "../models/enrollmentsModel.js";
import Student from "../models/studentModel.js";
import { validationResult } from "express-validator";


export const createEntroll = async (req, res) => {
    try {
        let {studentId, courseId } = req.body;
        let error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(404).json({ message: "Bad Requset" });
        }
        let enroll = await Enrollment.create({studentId, courseId });
        res.status(201).json({ message: "Succesfully created " });


    } catch (error) {
        res.status(500).json({ message: "Somrthing went wrong ", error });

    }

}
export const getAllEntroll = async (req, res) => {
    try {
        let enroll = await Enrollment.findAll({ include: [Student,Course] });
        res.status(200).json({ message: "Enrolled Details  ", enroll });

    } catch (error) {
        res.status(404).json({ message: "Somrthing went wrong ", error });

    }
}
export const getEnrollmentsByStudentId = async (req, res) => {
    try {
        let studentId = req.params.id;
        let enroll = await Enrollment.findAll({ where: {studentId} ,  include : [Course]});
        res.status(200).json({ message: "Entrolled Students  ", enroll });
    } catch (error) {
        res.status(500).json({ message: "Somrthing went wrong ", error });
    }
}
export const deleteEntroll = async (req, res) => {
    try {
        let { id } = req.params;
        let enroll = await Enrollment.findByPk(id);
        if (!enroll) {
            return res.status(404).json({ message: "Not found Enrollement  ", enroll });
        }
        await enroll.destroy();
         res.status(200).json({ message: "Successfully celeted enrollment" });
    } catch (error) {
        res.status(500).json({ message: "Error  ", error });
    }
}
