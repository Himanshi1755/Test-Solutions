import Course from "../models/courseModel.js";
import Instructor from "../models/instructorModel.js";
import Enrollment from "../models/enrollmentsModel.js";
import Student from "../models/studentModel.js";


Instructor.hasMany(Course, { foreignKey: "instructorId" });
Course.belongsTo(Instructor, { foreignKey: "instructorId"});

Student.hasMany(Enrollment, { foreignKey: 'studentId' });
Enrollment.belongsTo(Student, { foreignKey: "studentId" });

Course.hasMany(Enrollment, { foreignKey: 'courseId' });
Enrollment.belongsTo(Course, { foreignKey: "courseId" });



export {Instructor , Course,Student,Enrollment};