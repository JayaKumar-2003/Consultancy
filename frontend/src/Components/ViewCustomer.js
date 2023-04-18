import react, { useContext, useEffect } from 'react';
import  Axios  from 'axios';
import { Store } from '../Store';
import './ViewEmployee.css';
import FloatingDiv from './FloatingDiv';
function ViewCustomer() {
    const {state,dispatch:ctxDispatch} = useContext(Store);
    const {userInfo,customer_view} = state;
    console.log("-->",customer_view);
    const fetchUser = async()=>{
           try{
            const {data} = await Axios.get('http://localhost:5000/api/customer/search',{
                headers:{authorization:`brearer${userInfo.token}`}
            });
            ctxDispatch({type:"CUSTOMER_VIEW",payload:data})
            localStorage.setItem('customer_view',JSON.stringify(data))
            console.log(data);
           }
             catch(err) {
                console.log(err)
           }
    };
    useEffect(()=>{
        fetchUser();
    },[]);
    return (

        <div className='ViewEmployee'>
          {customer_view.map((item)=><FloatingDiv item={item}></FloatingDiv>)}
        </div>
    );
}

export default ViewCustomer;