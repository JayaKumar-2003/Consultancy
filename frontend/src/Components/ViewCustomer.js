import react, { useContext, useEffect, useState } from 'react';
import  Axios  from 'axios';
import { Store } from '../Store';
import './ViewCustomer.css';
import FloatingDiv from './FloatingDiv';
import FloatingCus from './FloatingCus';
function ViewCustomer() {
    const {state,dispatch:ctxDispatch} = useContext(Store);
    const {userInfo,customer_view} = state;
    const [details,Setdetails] = useState([]);

    
    const fetchUser = async()=>{
           try{
            const {data} = await Axios.get('http://localhost:5000/api/customer/search',{
                headers:{authorization:`brearer${userInfo.token}`}
            });
            ctxDispatch({type:"CUSTOMER_VIEW",payload:data})
            localStorage.setItem('customer_view',JSON.stringify(data))
           }
             catch(err) {
                console.log(err)
           }
    };
    useEffect(()=>{
        Setdetails(customer_view);
        fetchUser();
    },[]);
    return (

        <div className='ViewCustomer'>
           {details.map((item)=> <FloatingCus item={item}></FloatingCus>
           )}
        </div>
    );
}

export default ViewCustomer;