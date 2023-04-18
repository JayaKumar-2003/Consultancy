import expressAsyncHandler from "express-async-handler";
import express from 'express';
import { generatetoken,isAuth } from "../utils.js";
import EmployeeModel from "../Models/EmployeeModels.js";
const EmployeeRouter= express.Router();

EmployeeRouter.post('/add',
expressAsyncHandler(async (req,res)=>{
    const AddEmployee = new EmployeeModel(
        {
            email :req.body.email,
            name : req.body.name,
            password:req.body.password,
            phonenumber:req.body.phonenumber,
            Address:req.body.Address,
        }
    );
    const Add = await  AddEmployee.save();
    res.send({
        email :Add.email,
        name : Add.name,
        password:Add.password,
        phonenumber:Add.phonenumber,
        Address:Add.Address,
    });
    console.log(Add);
})
);

EmployeeRouter.get('/search',isAuth,
    expressAsyncHandler(async(req,res)=>{
    const details = await EmployeeModel.find();
    res.send(details);
    console.log(details);
})

);

export default EmployeeRouter;