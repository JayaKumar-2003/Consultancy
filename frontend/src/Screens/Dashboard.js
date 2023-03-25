import react, { useState } from 'react';
import './Dashboard.css';
function  Dashboard() {
    const [employee,Setemployee] = useState(false);
    const [customer,Setcustomer] = useState(false);
    return (
        <div className='Dashboard'>
            <div className='content'>
                <div className='left-content'>
                    <label className='admin'>ADMIN</label>
                    <div className='left-down'>
                        <label>Dashboard</label>
                        <label onClick={(e)=>{
                            Setemployee(!employee)
                        }}>Employee</label>
                            {employee && <div className='list'>
                                <label>Add</label>
                                <label>View</label>
                                </div>}
                        <label onClick={(e)=>{
                            Setcustomer(!customer)
                        }}>Customer</label>
                        {customer && <div className='list'>
                                <label>Add</label>
                                <label>View</label>
                                </div>}
                    </div>
                </div>
                <div className='right-content'>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;