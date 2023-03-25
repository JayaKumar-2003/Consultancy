import bcrypt from 'bcryptjs';
const data =  {
   users :[
        {
            email:'sribhagavathiammantextile@gmail.com',
            password:bcrypt.hashSync('9976396225'),
            isAdmin:true,
        }
   ]
}

export default data;