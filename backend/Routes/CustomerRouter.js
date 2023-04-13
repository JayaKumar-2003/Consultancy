import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Customer from '../Models/CustomerModel.js';
import {generatetoken,isAuth} from '../utils.js';
const CustomerRouter = express.Router();

CustomerRouter.post('/create',

    expressAsyncHandler(async(req,res)=>{
        console.log('enterd');
        console.log(req.body.product)
        const AddCustomer = new Customer(
            {
                email : req.body.email,
                name:req.body.name,
                product:req.body.product,
                phonenumber:req.body.phonenumber,
                address:req.body.address,
                paid:req.body.paid,
                amount:req.body.amount,
            }
        );
        const Add = await AddCustomer.save();
        res.send({
            email:Add.email,
            name:Add.name,
            product:Add.product,
            phonenumber:Add.phonenumber,
            address:Add.address,
            paid:Add.paid,
            amount:Add.amount,
        });
        console.log(Add)
    })
);
CustomerRouter.get('/search',isAuth,async(req,res)=>{
    const details = await Customer.find();
    res.send(details);
})
export default CustomerRouter;