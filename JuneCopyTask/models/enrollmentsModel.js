import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";

const Enrollment = sequelize.define("Enrollment" , {

    E_Id : {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    }
});


sequelize.sync().then(()=>{
console.log("Enrollment model created..")
}).catch((err)=>{
console.log("Enrollemnt Model is not created")
});

export default Enrollment;