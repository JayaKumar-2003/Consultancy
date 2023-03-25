import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../Models/UserModels.js';
import bcrypt from 'bcryptjs';
import { generatetoken } from '../utils.js';
const UserRouter = express.Router();

UserRouter.post(
    '/signin',
    expressAsyncHandler(async (req,res)=>{
        const user = await User.findOne({ email:req.body.email});
        if(user) {
            if(bcrypt.compareSync(req.body.password , user.password)) {
                res.send({
                    email : user.email,
                    isAdmin:user.isAdmin,
                    token:generatetoken(user),
                });
                return ;
            }
        }
        res.status(401).send({message:'Invalid email or password'});
    })
);
export default UserRouter;