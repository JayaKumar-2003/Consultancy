import mongoose, { Schema } from "mongoose";


const EmployeeSchema =  new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
        name :{type:String,required:true},
        password:{type:String,required:true},
        phonenumber:{type:Number,required:true,unique:true},
        Address:{type:String,required:true},
    },
    {
        timestamps:true,
    }
);

const Employee = mongoose.model('Employee',EmployeeSchema);

export default Employee;