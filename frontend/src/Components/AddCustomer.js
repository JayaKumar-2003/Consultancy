import react, { useContext, useState } from 'react';
import { Store } from '../Store';
import  Axios  from 'axios';
function AddCustomer () {
    const {state,dispatch:ctxDispatch} = useContext(Store);
    const {customer_add} = state;
    const [email,Setemail] = useState('');
    const [name,Setname] = useState('');
    const [product,SetProduct] = useState('');
    const [phonenumber,Setphonenumber] = useState('');
    const [address,SetAddress] = useState('');
    const [paid,SetPaid] = useState('');
    const [amount,SetAmount] =useState('');
    const SubmitHandler = async(e)=>{
        e.preventDefault();
        try{
            const {data} = await Axios.post('http://localhost:5000/api/customer/create',{
                email,
                name,
                product,
                phonenumber,
                address,
                paid,
                amount
            });
            console.log(data);
            ctxDispatch({type:'CUSTOMER_ADD', payload : data});
            localStorage.setItem('customer_add',JSON.stringify(data));
        }
        catch(err) {
            console.log(err);
        }
    };
   
    return(
        
        <div>
            <div>
            <form onSubmit={SubmitHandler}>
                <div className='details-top'>
                    <label>Email Address:<input type='email' onChange={(e)=>{Setemail(e.target.value)}}></input></label>
                    <label>Name:<input type='text' onChange={(e)=>{Setname(e.target.value)}}></input></label>
                    <select name='Product'onChange={(e)=>{SetProduct(e.target.value)}}>
                        <option value='cotton'>Cotton</option>
                        <option value='silk'>Silk</option>
                    </select>
                    </div>
                    <div className='details-down'>
                    <label>Phonenumber:<input type='number' onChange={(e)=>{Setphonenumber(e.target.value)}}></input></label>
                    <label>Address:<input type='text' className='Address' onChange={(e)=>{SetAddress(e.target.value)}}></input></label>
                    <label>Paid<input type='number'onChange={(e)=>{SetPaid(e.target.value)}}></input></label>
                    <label>Total Amount <input type='Amount'onChange={(e)=>{SetAmount(e.target.value)}}></input></label>
                    <input className='button'type='submit' value='submit'></input>
                    </div>
                    
            </form>
            </div>
        </div>
    );
}

export default AddCustomer;