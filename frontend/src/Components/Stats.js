import react from 'react';
import './Stats.css';
function Stats() {
    return(
        <div>
            <div className=''>
                <div className='employee-card'>
                    <div className='card'>
                        <div className='card-inside'></div>
                        <label>Total Employee</label>
                    </div>
                    <div className='card'>
                        <div className='card-inside'></div>
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