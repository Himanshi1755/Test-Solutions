import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";


const Student = sequelize.define("Student" , {
    stu_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull :false,
        unique : true,
        validate : {
            isEmail : true,
        }
    }
});

sequelize.sync().then(()=>{
    console.log("Student Model created");
}).catch(error=>{
    console.log("Student Model not created " , error);
});

export default Student;
