import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Customer from '../Models/CustomerModel.js';
import {generatetoken,isAuth} from '../utils.js';
const CustomerRouter = express.Router();

CustomerRouter.post('/create',
    expressAsyncHandler(async(req,res)=>{
        console.log('enterd');
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
    })
);

CustomerRouter.get('/search',isAuth,async(req,res)=>{
    const details = await Customer.find();
    res.send(details);
});
CustomerRouter.delete('/delete/:id',
expressAsyncHandler(async(req,res)=>{
    try {
    const details = await Customer.findById(req.params.id);
    if(details) {
        await Customer.findByIdAndDelete(req.params.id);
        console.log('deleted')
    }
}catch(err) {
    console.log(err);
    }
}));
CustomerRouter.patch('/update/:id', expressAsyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const {
        email,
        name,
        product,
        phonenumber,
        address,
        paid,
        amount,
      } = req.body;
  
      const updatedCustomer = await Customer.findByIdAndUpdate(id, {
        email,
        name,
        product,
        phonenumber,
        address,
        paid,
        amount,
      }, {
        new: true
      });
  
      res.json(updatedCustomer);
    } catch (error) {
      console.error('Error updating Customer:', error);
      res.status(500).json({ error: 'Failed to update Customer' });
    }
  }));
export default CustomerRouter;