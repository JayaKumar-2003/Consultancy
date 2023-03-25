import express from 'express';
import data from '../data.js';

import User from '../Models/UserModels.js';
const SeedRouter = express.Router();
console.log('ll');
SeedRouter.get('/',async(req,res)=> {
    // await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.send({createdUser});
    console.log({createdUser});
});
console.log('ll');
export default SeedRouter;