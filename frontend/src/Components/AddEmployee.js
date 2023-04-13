import react, { useContext, useState } from 'react';
import './AddEmployee.css';
import Axios from 'axios';
import {Store} from '../Store.js';
import {useNavigate} from 'react-router-dom';
function Employee() {
    // UseState for form 
        const [email,Setemail] = useState('');
        const [name,Setname] = useState('');
        const [password,Setpassword] = useState('');
        const [phonenumber,Setphonenumber] = useState('');
        const [Address,SetAddress] = useState('');
    // End of form
    
    const {state,dispatch : ctxDispatch} = useContext(Store);
    const {employee_add} = state;


    const navigate = useNavigate();

    // ---------form function-----------
        const SubmitHandler = async (e) => {
            e.preventDefault();
           try {
            const {data} = await Axios.post('/api/employee/add',{
                email,
                name,
                password,
                phonenumber,
                Address
            });
            // console.log(data)
            ctxDispatch({type:'EMLPLOYEE_ADD' , payload : data});
            localStorage.setItem('employee_add',JSON.stringify(data));
            
           }
           catch(error) {
                console.log(error);
           }
        };
    // ------------end form function-----------
        return(
            <div>
                <div className='content'>
                  <form onSubmit={SubmitHandler}>
<div className='details-top'>
                    <label>Email Address:<input type='email' onChange={(e)=>{Setemail(e.target.value)}}></input></label>
                    <label>Name:<input type='text' onChange={(e)=>{Setname(e.target.value)}}></input></label>
                    <label>password:<input type='password' onChange={(e)=>{Setpassword(e.target.value)}}></input></label>
                    </div>
                    <div className='details-down'>
                    <label>Phonenumber:<input type='number' onChange={(e)=>{Setphonenumber(e.target.value)}}></input></label>
                    <label>Address:<input type='text' className='Address' onChange={(e)=>{SetAddress(e.target.value)}}></input></label>
                    <input className='button'type='submit' value='submit'></input>
                    </div>                     
                  </form>
                </div>
            </div>
        );
}

export default Employee;