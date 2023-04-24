import react, { useContext } from 'react';
import './Stats.css';
import { Store } from '../Store';
function Stats() {
    const {state,dispatch:ctxDispatch} = useContext(Store);
    const {employee_view,customer_view} = state;
    console.log(customer_view);

    return(
        <div>
            <div className=''>
                <div className='employee-card'>
                    <div className='card'>
                    <span class="material-symbols-outlined">diversity_3</span>
                        <div className='card-inside'>
                            <label>{employee_view.length}</label>
                        </div>
                        <label>Total Employee</label>
                    </div>
                    <div className='card'>
                    <span class="material-symbols-outlined">diversity_1</span>
                        <div className='card-inside'>
                       
                            <label>{(customer_view.length)?customer_view.length:0}</label>
                        </div>
                        <label>Total Customer</label>
                    </div>
                    <div className='card'>
                        <div className='card-inside'></div>
                        <label>Total Customer</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;