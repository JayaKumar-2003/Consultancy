import react, { useContext, useState } from 'react';
import Sewing from '../img/Sewing.jpg';
import Axios from 'axios';
import './SigninScreen.css';
import { Store } from '../Store.js';


function SigninScreen() {

    const [email,Setemail] =useState('');
    const [password,Setpassword] = useState('');

    const {state,dispatch:ctxDispatch} = useContext(Store);
    const SubmitHandler = async (e) => {
            e.preventDefault();
            try {
                const {data} =  await Axios.post('/api/users/signin',
                    {
                        email,
                        password,
                    }
                );
                ctxDispatch({type: 'USER_SIGNIN',payload:data})
                localStorage.setItem('userInfo',JSON.stringify(data));
            }
            
            catch(err) {
                console.log(err);
            }
    };
    return(
        <div className='Signin'>
            <div className='content-left'>
                <img src={Sewing} alt=""></img>
            </div>
            <div className='content-right'>
                <label>Brand</label>
                <form className='form' onSubmit={SubmitHandler}>
                    <input type="email" onChange={(e)=> {Setemail(e.target.value)}}></input>
                    <input type="password" onChange={(e)=>{Setpassword(e.target.value)}}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default SigninScreen;