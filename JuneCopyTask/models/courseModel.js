// Course:-	  id, title, description, instructorId
import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";

const Course = sequelize.define("course", {
        c_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
         autoIncrement: true,
    },
   title : {
        type  : DataTypes.STRING,
         allowNull: false, 
    },
   description : {
        type : DataTypes.STRING,
        allowNull: false, 
    }
})


sequelize.sync().then(()=>{
console.log("Course model created..")
}).catch((err)=>{
console.log("Course Model is not created")
});

export default Course;


// alter: true