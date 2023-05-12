import React, { useContext, useEffect, useState } from 'react'
import './FloatingEmp.css';
import Popup from './SmallComponents/Popup.js'
import EmpDetails from './SmallComponents/EmpDetails';
import {Store} from '../Store.js';
import  axios  from 'axios';
const FloatingEmp = (props) => {
  const[buttonpopup,setButtonpopup]=useState(false);
    const[timepopup,setTimepopup]=useState(false);
    const {item} = props;
    const [contain,Setcontain] = useState(false);
    const {Address,email,name,password,phonenumber} = item;
    const [details,Setdetails] = useState(''); 
    const {state,dispatch :ctxDispatch} = useContext(Store);
    const {userInfo,employee_view} = state;
    const DetailHandler = (number) =>{
      employee_view.map((item)=>{
        if(number == item.phonenumber) {
          Setdetails(item);
        }
      })
  };
    const fetchUser= async()=>{
      try{
              const {data} = await axios.get('http://localhost:5000/api/employee/search',{
                      headers :{authorization:`brearer${userInfo.token}`}
              });
              ctxDispatch({type:'EMPLOYEE_VIEW',payload:data})
              localStorage.setItem('employee_view',JSON.stringify(data));
      }catch(err) {
              console.log(err);
      }
}
const deleteHandler = async (_id)=>{
    try {
      const {data} = await axios.delete(`http://localhost:5000/api/employee/delete/${_id}`).then(
        response => console.log(response.data)
      );
      localStorage.setItem('employee_view',JSON.stringify(data));
      ctxDispatch({type:'EMPLOYEE_VIEW',payload:data});
    }
    
    catch(err) {
      console.log("Updated");
    }
  }

useEffect(()=>{
      fetchUser();
},[deleteHandler]);
    
  
      
  return (
    <div className='FloatingEmp'>
     <div className='display'>
       <div className='box-container'>
            <div className='title'>{name}</div>
            <div className='inside-bodycontainer'>
                <div className='phonenumber'>{phonenumber}</div>
                <div className='details-button pointer' onClick={()=>{{DetailHandler(phonenumber);Setcontain(!contain)}}}>
                    DETAILS
                    <span class="material-symbols-outlined">menu</span>
                </div>
            </div>
       </div> 
      {contain && <div className='arrow'>
       <span className="material-symbols-outlined" onClick={()=>{}}>arrow_forward_ios</span>
       <div className='arrow-box'>
       <div className='details'><span>phonenumber: {details.phonenumber}</span>
       <span>Address: {details.Address}</span>
       </div>
       <div className='edit'>
       <span class="material-symbols-outlined pointer" onClick={()=>{deleteHandler(details._id)}}>delete</span>
       <span class="material-symbols-outlined pointer" onClick={()=>{setButtonpopup(true)}}>edit_note</span>
       </div>
        </div>
       </div> }
       </div> 
       <Popup trigger={buttonpopup} setTrigger={setButtonpopup} details={details} >
            </Popup>
            <Popup trigger={timepopup} setTrigger={setTimepopup} details={details}>
            </Popup>
    </div> 
  )
}
export default FloatingEmp;