import react, { useContext } from 'react';
import './Stats.css';
import { Store } from '../Store';
function Stats() {
    const {state,dispatch:ctxDispatch} = useContext(Store);
    const {employee_view,customer_view} = state;

    return(
        <div>
            <div className='employee-card'>
                
                <div class="grid">
                    <div class="card">
                        <span class="icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z"
                            />
                        </svg>
                        </span>
                        <h4>Employee</h4>
                        <p>
                        No.of Employee
                        </p>
                        <p>
                        {(employee_view.length) ?employee_view.length : 0}
                        </p>
                        <div class="shine"></div>
                        <div class="background">
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>

                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>

                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>

                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                        </div>
                    </div>
                    <div class="card">
                        <span class="icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
                            />
                            <path
                            d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"
                            />
                            <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                            <path
                            d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"
                            />
                        </svg>
                        </span>
                        <h4>Customer</h4>
                        <p>
                        No of Customer
                        </p>
                        <p>
                            {(customer_view.length) ?customer_view.length : 0}
                        </p>
                        <div class="shine"></div>
                        <div class="background">
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>

                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>

                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>

                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                        </div>
                    </div>
                    </div>

                    <label class="day-night">
                    <input type="checkbox" checked />
                    <div></div>
                    </label>


                
                </div>
            </div>

    );
}

export default Stats;