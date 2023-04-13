import React, { useContext, useEffect, useState } from 'react'
import './ViewEmployee.css';
import Axios from 'axios';
import { Store } from '../Store';
function ViewEmployee() {

        // Search State
        const [search,Setsearch] = useState('');
        const [searchdb,Setsearchdb] = useState([]);
        const [searchdiv,Setsearchdiv] = useState(false);
        const [content,Setcontent] = useState('');
        // end of state

        // view state
        const [view,Setview] = useState(true);

        // get from db
        const {state,dispatch :ctxDispatch} = useContext(Store);
        const {userInfo,employee_view} = state;
        const fetchUser= async()=>{
                try{
                        const {data} = await Axios.get('http://localhost:5000/api/employee/search',{
                                headers :{authorization:`brearer${userInfo.token}`}
                        });
                        ctxDispatch({type:'EMPLOYEE_VIEW',payload:data})
                        localStorage.setItem('employee_view',JSON.stringify(data));
                }catch(err) {
                        console.log(err);
                }
        }
        useEffect(()=>{
                fetchUser();
        },[]);
        // get from db end

        
        // ctxDispatch({type:"EMPLOYEE_VIEW",payload:searchdb})
        // localStorage.setItem('employee_view',JSON.stringify(searchdb))
        
        console.log(employee_view);
        const SearchHandler =(e)=>{
                const list = employee_view.map((i)=>{
                        if(i.phonenumber == search) {
                                Setcontent(i);
                        }
                        else {
                                console.log('not');
                        }
                });      
        }
        return(
        <div className='ViewEmployee'>
            <div className='search-bar'>
                <div className='search-inside'>
                        <input type='text' onChange={(e)=>{Setsearch(e.target.value);Setsearchdiv(true);Setview(false);}}></input>
                        <span onClick={SearchHandler}>one</span>
                </div>
            </div>
       {searchdiv && <div className='search'>
                <p>{content.name}</p>
        </div> }
           { view &&<div className='container'>
                <table>
                        <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th>EmailAddress</th>
                                <th>Address</th>
                        </tr>
                        {employee_view.map(i=>{
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
            </div> }
            
        </div>

        );
}

export default ViewEmployee;