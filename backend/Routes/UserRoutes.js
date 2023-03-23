import express from 'express';
import expressAsyncHandler from 'express-async-handler';

const UserRoutes = express.Router();

UserRoutes.post('/signin',
    expressAsyncHandler(async (req,res)=>{
        
    })
)
export default UserRoutes;