import express from 'express';
import dotenv from 'dotenv';
import UserRouter from './Routes/UserRouter.js';
import mongoose from 'mongoose';
import SeedRouter from "./Routes/SeedRouter.js";
import cors from 'cors';
import EmployeeRouter from './Routes/EmployeeRouter.js';
import CustomerRouter from './Routes/CustomerRouter.js';
import path from 'path';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err.message);
});
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/api/users',UserRouter);
app.use('/api/seed',SeedRouter);
app.use('/api/employee',EmployeeRouter);
app.use('/api/customer',CustomerRouter);
app.use((err,req,res,next)=> {
    res.status(500).send({ message:err.message});
});
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});