import express from "express";
import bodyParser from "body-parser";
import db from './db/dbConfig.js';
// import Student  from "./models/studentModel.js";
// import Instructor from "./models/instructorModel.js";
// import Course from "./models/courseModel.js";
import studentRoutes from "./routes/studentRoute.js";
import instructorRoutes from "./routes/instructorRoute.js";
import courseRoute from "./routes/courseRoute.js";
import enrollmentRoute from "./routes/enrollementRoute.js";
import {Instructor , Course , Enrollment ,Student} from "./models/association.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/" , studentRoutes);
app.use("/" , instructorRoutes);
app.use("/" ,courseRoute);
app.use("/" , enrollmentRoute);

app.listen(3000, ()=>{
    console.log("Server Started...")
})