import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
        name :{type:String,required:true},
        product:{type:String,required:true},
        phonenumber:{type:Number,required:true},
        address:{type:String,required:true},
        paid:{type:Number,required:true},
        amount:{type:Number,required:true},
    }
)
const Customer = mongoose.model('Customer',CustomerSchema);
export default Customer;