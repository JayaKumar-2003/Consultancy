import express from 'express';
import dotenv from 'dotenv';
import UserRoutes from './Routes/UserRoutes.js';
import mongoose from 'mongoose';
const app = express();

dotenv.config();
// mongoose.connect(process.env.MONGODB_URI).then(()=>{
//     console.log("connected to db");
// }).catch((err)=>{
//     console.log(err.message);
// });
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err.message);
});

app.use("/api/users",UserRoutes);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})