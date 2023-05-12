import React, { useEffect, useState,useContext} from 'react';
// import emailjs from '@emailjs/browser';
import Axios from 'axios';
import { Store } from '../../Store.js';
import './popup.css';
const Popup = (props) => {
    const {trigger,setTrigger,details} = props;
  const [issubmit, setIsSubmit] = useState(false);
//  const [Empdetails,SetEmpdetails] = useState(details);

//console.log(details._id);
const {state,dispatch : ctxDispatch} = useContext(Store);
const {employee_add} = state;

  const [email,Setemail] = useState('');
  const [name,Setname] = useState('');
  const [password,Setpassword] = useState('');
  const [phonenumber,Setphonenumber] = useState('');
  const [Address,SetAddress] = useState('');
  const isEdit = Boolean(details.name);
  const SubmitHandler = async (e) => {
    e.preventDefault();

   try {
    const {data} = await Axios.patch(`http://localhost:5000/api/employee/update/${details._id}`,{
        email,
        name,
        password,
        phonenumber,
        Address
    });
   // console.log(data)
    ctxDispatch({type:'EMLPLOYEE_VIEW', payload : data});
    localStorage.setItem('employee_VIEW',JSON.stringify(data)); 
   }
   catch(error) {
        console.log(error);
   }
};
console.log(details._id);
useEffect(()=>{
    
   if(isEdit) {
    Setemail(details.email);
    Setname(details.name);
    Setpassword(details.password);
    Setphonenumber(details.phonenumber);
    SetAddress(details.Address);
   }
},[details])
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-button"
          onClick={() => setTrigger(false)}
        >
            kkk
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        {!issubmit ? (
          <>
             <form onSubmit={SubmitHandler}>
<div className='details-top'>
                    <label>Email Address:<input type='email' value={email} onChange={(e)=>{Setemail(e.target.value)}}></input></label>
                    <label>Name:<input type='text' value={name} onChange={(e)=>{Setname(e.target.value)}}></input></label>
                    <label>password:<input type='password' value={password} onChange={(e)=>{Setpassword(e.target.value)}}></input></label>
                    </div>
                    <div className='details-down'>
                    <label>Phonenumber:<input type='number'value={phonenumber} onChange={(e)=>{Setphonenumber(e.target.value)}}></input></label>
                    <label>Address:<input type='text' className='Address'value={Address} onChange={(e)=>{SetAddress(e.target.value)}}></input></label>
                    <input className='button'type='submit' value='submit'></input>
                    </div>                     
                  </form>
          </>
        ) : (
          <div>Thank you Our Team Reach you Soon.</div>
        )}
      </div>
    </div>
  ) : (
    ''
  );
};

export default Popup;
