import react, { useContext, useEffect } from 'react';
import  Axios  from 'axios';
import { Store } from '../Store';
import './ViewEmployee.css';
function ViewCustomer() {
    const {state,dispatch:ctxDispatch} = useContext(Store);
    const {userInfo,customer_view} = state;
    console.log(customer_view);
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
           <table>
                        <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th>EmailAddress</th>
                                <th>Address</th>
                        </tr>
                        {customer_view.map(i=>{
                                return(
                                        <tr>
                                                <td>{i.name}</td>
                                                 <td>{i.phonenumber}</td>
                                                <td>{i.email}</td>
                                                <td>{i.Address}</td>
                                        </tr>
                                );
                        })}
                </table>
        </div>
    );
}

export default ViewCustomer;