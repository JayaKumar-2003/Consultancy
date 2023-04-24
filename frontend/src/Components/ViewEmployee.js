import React, { useContext, useEffect, useState } from 'react'
import './ViewEmployee.css';
import Axios from 'axios';
import { Store } from '../Store';
import FloatingEmp from './FloatingEmp';

function ViewEmployee() {

        // Search State
        const [search,Setsearch] = useState('');
      //  const [searchdb,Setsearchdb] = useState([]);
        const [searchdiv,Setsearchdiv] = useState(false);
        const [content,Setcontent] = useState([]);
        // end of state

        // view state
        const [view,Setview] = useState(true);

        // get from db
        const {state,dispatch :ctxDispatch} = useContext(Store);
        const {userInfo,employee_view} = state;
        console.log('dd',employee_view)
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
        
        console.log("emp-->",employee_view);
        const SearchHandler =(e)=>{
                employee_view.map((i)=>{
                        if(i.phonenumber == search) {
                                return Setcontent(i);
                        }
                        else {
                               return console.log('not');
                        }
                });      
        }
        return(
        <div className='ViewEmployee'>
            <div className='search-bar'>
                <div className='search-inside'>
                        <input type='number' onChange={(e)=>{Setsearch(e.target.value);Setsearchdiv(true);Setview(false);}}></input>
                        <span onClick={SearchHandler}><span class="material-symbols-outlined pointer">search</span></span>
                </div>
            </div>
       {searchdiv && <div className='search' >
                        <FloatingEmp item={content}></FloatingEmp>
        </div> }
         { view && <div className='emp-details'>
                {employee_view.map((item)=>
                        <FloatingEmp item={item}></FloatingEmp>)}
           </div>}
            <div>
                
            </div>
        </div>

        );
}

export default ViewEmployee;