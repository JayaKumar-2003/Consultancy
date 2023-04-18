import React, { useContext, useState } from 'react'
import './FloatingEmp.css';
import EmpDetails from './SmallComponents/EmpDetails';
import {Store} from '../Store.js';
const FloatingEmp = (props) => {
    const {item} = props;
    const {Address,email,name,password,phonenumber} = item;
    const [details,Setdetails] = useState(''); 
    const {state,ctxDispatch :dispatch} = useContext(Store);
    const {employee_view} = state;
    
    const DetailHandler = (number) =>{
        employee_view.map((item)=>{
          if(number == item.phonenumber) {
            {console.log('emeter')}
             return <div className='big'>
                <span>{item.email}</span>
              </div>
          }
        })
    }
  return (
    <div className='FloatingEmp'>
       <div className='box-container'>
            <div className='title'>{name}</div>
            <div className='inside-bodycontainer'>
                <div className='phonenumber'>{phonenumber}</div>
                <div className='details-button' onClick={()=>{DetailHandler(phonenumber)}}>
                    DETAILS
                    <span class="material-symbols-outlined">menu</span>
                </div>
            </div>
       </div>
       <div className='arrow'>
       <span class="material-symbols-outlined">arrow_forward_ios</span>
       </div>
    </div>
  )
}
export default FloatingEmp;