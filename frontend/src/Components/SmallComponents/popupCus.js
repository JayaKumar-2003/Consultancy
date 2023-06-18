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
const { state, dispatch: ctxDispatch } = useContext(Store);
const { userInfo, customer_view } = state;

  const [email,Setemail] = useState('');
  const [name,Setname] = useState('');
  const [product,Setproduct] = useState('');
  const [phonenumber,Setphonenumber] = useState('');
  const [address,SetAddress] = useState('');
  const [paid,Setpaid] = useState('');
  const [amount,Setamount] = useState('');
  const isEdit = Boolean(details.name);
  const SubmitHandler = async (e) => {
    e.preventDefault();

   try {
    const {data} = await Axios.patch(`http://localhost:5000/api/customer/update/${details._id}`,{
      email,
      name,
      product,
      phonenumber,
      address,
      paid,
      amount,
    });
   // console.log(data)
    ctxDispatch({type:'CUSTOMER_VIEW', payload : data});
    localStorage.setItem('CUSTOMER_VIEW',JSON.stringify(data)); 
   }
   catch(error) {
        console.log(error);
   }
};
useEffect(()=>{
    
   if(isEdit) {
    Setemail(details.email);
    Setname(details.name);
    Setphonenumber(details.phonenumber);
    Setproduct(details.product);
    SetAddress(details.Address);
   Setamount(details.amount);
   Setpaid(details.paid);

   }
},[details]);
// const fetchUser = async()=>{
//   try{
//    const {data} = await Axios.get('http://localhost:5000/api/customer/search',{
//        headers:{authorization:`brearer${userInfo.token}`}
//    });
//    ctxDispatch({type:"CUSTOMER_VIEW",payload:data})
//    localStorage.setItem('customer_view',JSON.stringify(data))
//   }
//     catch(err) {
//        console.log(err)
//   }
// };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-button"
          onClick={() => setTrigger(false)}
        >
            X
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        {!issubmit ? (
          <>
             <form onSubmit={SubmitHandler}>
<div className='details-top'>
                    <label>Email Address:<input type='email' value={email} onChange={(e)=>{Setemail(e.target.value)}}></input></label>
                    <label>Name:<input type='text' value={name} onChange={(e)=>{Setname(e.target.value)}}></input></label>
                    <select name='Product' value={product} onChange={(e)=>{Setproduct(e.target.value)}}>
                        <option value='cotton'>Cotton</option>
                        <option value='silk'>Silk</option>
                    </select>
                    </div>
                    <div className='details-down'>
                    <label>Phonenumber:<input type='number' value={phonenumber} onChange={(e)=>{Setphonenumber(e.target.value)}}></input></label>
                    <label>Address:<input type='text' className='Address'  value={address} onChange={(e)=>{SetAddress(e.target.value)}}></input></label>
                    <label>Paid<input type='number'  value={paid} onChange={(e)=>{Setpaid(e.target.value)}}></input></label>
                    <label>Total Amount <input type='Amount' value={amount} onChange={(e)=>{Setamount(e.target.value)}}></input></label>
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
