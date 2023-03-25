import  { useContext,useState } from 'react';
import Sewing from '../img/Sewing.jpg';
import Axios from 'axios';
import './SigninScreen.css';
import {Store} from '../Store';
import {useNavigate} from 'react-router-dom';

function SigninScreen() {

    const [email,Setemail] =useState('');
    const [password,Setpassword] = useState('');

    const navigate = useNavigate();

    const {state,  dispatch : ctxDispatch} =useContext(Store);
    const {userInfo} = state;
    console.log(userInfo);
    const SubmitHandler = async (e) => {
            e.preventDefault();
            try {
                const {data} =  await Axios.post('http://localhost:5000/api/users/signin',
                    {
                        email,
                        password,
                    }
                );
             ctxDispatch({type: 'USER_SIGNIN',payload:data})
             localStorage.setItem('userInfo',JSON.stringify(data));
             navigate('/dashboard');
            }
            catch(err) {
                console.log(err);
            }
    };
    console.log('entererd')
    return(
        
        <div className='Signin'>
            <div className='content-left'>
                <img src={Sewing} alt=""></img>
            </div>
            <div className='content-right'>
                <label className='brand'>Shri Bhagavathi Amman</label>
                <form className='form' onSubmit={SubmitHandler}>
                   <label>Email Address:<input type="email" onChange={(e)=> {Setemail(e.target.value)}}></input></label>
                    <label>Password:<input type="password" onChange={(e)=>{Setpassword(e.target.value)}}></input></label>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default SigninScreen;