import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize("Task_June_Coursera" , "root" , process.env.DB_PASSWORD , { 
    host : "localhost",
    dialect : "mysql",
});

sequelize.authenticate().then(()=>{
    console.log("DB Connected..");
}).catch(err=>{
    console.log("DB not connected.." , err);
})

export default sequelize;
