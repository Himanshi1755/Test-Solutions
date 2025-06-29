import Course from "../models/courseModel.js";
import Instructor from "../models/instructorModel.js";
import  {validationResult}  from "express-validator";

export const createInstructor = async (req,res)=>{
try{
    let error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
         return res.status(400).json({ error: "Bad request"});
    }
    let {name,bio} = req.body;
    let instructor =await Instructor.create({name,bio});
    res.status(200).json({ message : "Successfull created " , instructor});


}catch(err){
    console.log(err);
res.status(500).json({ message : "Error at the time of Instr. Creation "});
}
};


export const getAllInstructor = async (request, response) => {
    try {
        let instructor = await Instructor.findAll();
        response.status(200).json({ message: "Instructor Details ", data: instructor });
    } catch (err) {
        response.status(500).json({ message: "Intructor Details are not found  ", error: err.message });
    }
};

export const getIById = async (request, response) => {

    try {
        let inst = await Instructor.findByPk(request.params.id , {
            inslude : [Course]
        });
        if (!inst) {
            return response.status(404).json({ message: "Instructor not found" });
        }
        response.status(200).json({ message: "Instructor Deatils ", data: inst });
    } catch (error) {
        response.status(500).json({ message: "Something went error", error: error.message });
    }
};

export const updateInstructor = async (request, response) => {
    try {
        const instId = request.params.id;
        let instdata = request.body;
        let instructor = await Instructor.findOne({ where: { id: instId } });
        if (!instructor) {
            return response.status(404).json({ message: "Instructor data not found" })
        }
       await Instructor.update(instdata, { where: { id: instId } });
         const updatedI = await Instructor.findOne({ where: { id: instId } });
        response.status(200).json({ message: "Instructor details upadted ", newData: updatedI });

    } catch (err) 
    {
        console.log(err);
        response.status(500).json({ message: "Something Went wrong ", err });
    }
}

export const deleteInstructor = async (request, response) => {
    try {
        const instructor = await Instructor.findOne({ where: { id: request.params.id } });
        if (instructor) {
            await instructor.destroy();
            response.json({ message: "Instructor Deleted.." })
        }

    } catch (err) {
        response.json({ message: "Error in Delete Student ", err });
    }
};
