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
})

);
EmployeeRouter.delete('/delete/:id',
expressAsyncHandler(async(req,res)=>{
    try {
    const details = await EmployeeModel.findById(req.params.id);
    if(details) {
        await EmployeeModel.findByIdAndDelete(req.params.id);
        console.log('deleted')
    }
}catch(err) {
    console.log(err);
    }
}));

EmployeeRouter.patch('/update/:id', expressAsyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const {
        email,
        name,
        password,
        phoneNumber,
        address
      } = req.body;
  
      const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, {
        email,
        name,
        password,
        phoneNumber,
        address
      }, {
        new: true
      });
  
      res.json(updatedEmployee);
    } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).json({ error: 'Failed to update employee' });
    }
  }));
export default EmployeeRouter;