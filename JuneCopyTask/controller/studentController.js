import Student from "../models/studentModel.js";
import { validationResult } from "express-validator";


export const createStudents = async (request, response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ error: "Bad request", errorMessages: errors.array() });
        }
        let { name, email } = request.body;
        const stu = await Student.findOne({ where: { email } });
        if (stu) {
            return response.status(400).json("Already existing ");
        }
        let student = await Student.create({ name, email });
        response.status(201).json({ message: "Student created .. ", student });
    }
    catch (err) {
        response.status(500).json({ message: "Error Found", err });
    }
}

export const getAllStudents = async (request, response) => {
    try {
        let student = await Student.findAll();
        response.status(200).json({ message: "Student Details ", data: student });
    } catch (err) {
        response.status(500).json({ message: "Student Detils are not found  ", error: err.message });
    }
};

export const getStudentById = async (request, response) => {

    try {
        let student = await Student.findOne({ where: { stu_id: request.params.id } });
        if (!student) {
            return response.status(404).json({ message: "Student not found" });
        }
        response.status(200).json({ message: "Student Deatils ", data: student });
    } catch (error) {
        response.status(500).json({ message: "Something went error", error: error.message });
    }
}

export const updateStudents = async (request, response) => {
    try {
        const studentId = request.params.id;
        let studentdata = request.body;
        let student = await Student.findOne({ where: { stu_id: studentId } });
        if (!student) {
            return response.status(404).json({ message: "Student data not found" })
        }

        Student.update(studentdata, { where: { stu_id: studentId } });
        const updatedStudent = await Student.findOne({ where: { stu_id: studentId } });

        response.status(200).json({ message: "Student data upadted ", updatesData: updatedStudent });

    } catch (err) {
        response.status(500).json({ message: "Something Went wrong ", err });
    }
}

export const deleteStudent = async (request, response) => {
    try {
        const student = await Student.findOne({ where: { stu_id: request.params.id } });
        if (student) {
            await student.destroy();
            response.json({ message: "Student Deleted.." })
        }

    } catch (err) {
        response.json({ message: "Error in Delete Student ", err });
    }
};
