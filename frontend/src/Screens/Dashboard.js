import react, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import {useNavigate} from 'react-router-dom';
import { Store } from '../Store';
import Stats from '../Components/Stats';
import AddEmployee from '../Components/AddEmployee';
import ViewEmployee from '../Components/ViewEmployee';
import AddCustomer from '../Components/AddCustomer';
import ViewCustomer from '../Components/ViewCustomer';
function  Dashboard() {

    // Toggle for bars
    const navigate = useNavigate();
        // icon toggle
            const [icon,Seticon] = useState(true);
        // end toogle icon
    const [employee,Setemployee] = useState(false);
    const [customer,Setcustomer] = useState(false);
    const [stats,Setstats] = useState(false);
    const [addemployee,Setaddemployee] = useState(false);
    const [viewemployee, Setviewemployee] = useState(false);
    const [addcustomer,Setaddcustomer] = useState(false);
    const [viewcustomer, Setviewcustomer] = useState(false);
    // End line of toggle
    
    //useCOntext
    const {state,dispatch :ctxDispatch} = useContext(Store);
    const {userInfo} = state;
    console.log(userInfo);

    //signout
     const SignoutHandler = () =>{
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('employee_add');
     }

     
    return (
        <div className='Dashboard'>
            <div className='content'>
                {icon && <div className='left-content'>
                    <label className='admin'>ADMIN</label>
                    <div className='left-down'>
                        <label onClick={(e)=>{Setstats(!stats); Setaddemployee(false);Setviewemployee(false);Setaddcustomer(false);Setviewcustomer(false)}}>Dashboard</label>
                        <label onClick={(e)=>{
                            Setemployee(!employee)
                        }}>Employee</label>
                            {employee && <div className='list'>
                                <label onClick={(e)=>{Setaddemployee(!addemployee);Setstats(false);Setviewemployee(false);Setaddcustomer(false);Setviewcustomer(false)}}>Add</label>
                                <label onClick={(e=>{Setviewemployee(!viewemployee);Setaddemployee(false);Setstats(false);Setaddcustomer(false);Setviewcustomer(false)})}>View</label>
                                </div>}
                        <label onClick={(e)=>{
                            Setcustomer(!customer)
                        }}>Customer</label>
                        {customer && <div className='list'>
                                <label onClick={(e)=>{Setaddcustomer(!addcustomer);Setaddemployee(false);Setstats(false);Setviewemployee(false);console.log('ell')}}>Add</label>
                                <label onClick={(e)=>{Setviewcustomer(!viewcustomer);Setviewemployee(false);Setstats(false);Setaddemployee(false);Setaddcustomer(false)}}>View</label>
                                </div>}
                    </div>
                </div> }
                <div className='nav'>
                            <div className='nav-inside'>
                                <div className='toggle'>
                                <label onClick={(e)=>{Seticon(!icon)}}>toggle</label>
                                </div>
                                <div className='usercontent'>
                                <label>{(userInfo!=null) ? userInfo.email : navigate('/')} </label>
                                <label onClick={()=>{SignoutHandler()}}>logout</label>
                                </div>
                            </div>
                            <div className='right-content'>
                        {stats &&<div>
                            <Stats></Stats>
                            </div>}
                        {addemployee && <div>
                                <AddEmployee></AddEmployee>
                            </div>}
                        {viewemployee && <div>
                            <ViewEmployee></ViewEmployee>
                            </div>}
                        {addcustomer && <div>
                            
                                <AddCustomer></AddCustomer>
                                </div>}
                        {viewcustomer && <div>
                                <ViewCustomer></ViewCustomer>
                        </div>}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Dashboard;