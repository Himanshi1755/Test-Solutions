// Instructor:-  id, name, bio
import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Instructor = sequelize.define("Instructor" , {

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
         autoIncrement: true,
    },
    name : {
        type  : DataTypes.STRING,
         allowNull: false, 
    },
    bio : {
        type : DataTypes.STRING,
        allowNull: false, 
    }

});

sequelize.sync().then(()=>{
console.log("Intructor model created..")
}).catch((err)=>{
console.log("Instructor Model is not created")
});

export default Instructor;