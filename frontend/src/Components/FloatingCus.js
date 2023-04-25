import React ,{useEffect,useState,useContext}from 'react';
import axios from 'axios';
import { Store } from '../Store.js';
import './FloatingCus.css';
const FloatingCus = (props) => {

    const {item}=props;
    const {address,amount,email,name,paid,phonenumber,product}=item;
    const [contain,Setcontain] = useState(false);
    console.log("item",address);
    const [details,Setdetails] = useState(''); 
    const {state,dispatch :ctxDispatch} = useContext(Store);
    const {userInfo,employee_view,customer_view} = state;

    const DetailHandler = (number) =>{
        customer_view.map((item)=>{
          if(number == item.phonenumber) {
            Setdetails(item);
          }
        })
    };
      const fetchUser= async()=>{
        try{
                const {data} = await axios.get('http://localhost:5000/api/customer/search',{
                        headers :{authorization:`brearer${userInfo.token}`}
                });
                ctxDispatch({type:'CUSTOMER_VIEW',payload:data})
                localStorage.setItem('customer_view',JSON.stringify(data));
        }catch(err) {
                console.log(err);
        }
  }
//   const deleteHandler = async (_id)=>{
//     console.log(_id);
//       try {
//         const {data} = await axios.delete(`http://localhost:5000/api/employee/delete/${_id}`).then(
//           response => console.log(response.data)
//         );
//         localStorage.setItem('employee_view',JSON.stringify(data));
//         ctxDispatch({type:'EMPLOYEE_VIEW',payload:data});
//       }
      
//       catch(err) {
//         console.log("Updated");
//       }
//     }
  
//   useEffect(()=>{
//         fetchUser();
//   },[deleteHandler]);
  return (
    <div className='FloatingEmp' >
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
      <span>Total amount: {details.paid}</span>
      </div>
      <div className='edit'>
      <span class="material-symbols-outlined pointer" >delete</span>
      <span class="material-symbols-outlined pointer" >edit_note</span>
      </div>
       </div>
      </div> }
      </div> 
   </div> 

  )
}

export default FloatingCus;