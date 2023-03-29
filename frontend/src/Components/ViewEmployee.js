import React, { useEffect, useState } from 'react'
import './ViewEmployee.css';
import Axios from 'axios';
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
        useEffect(()=>{
                fetch("http://localhost:5000/api/employee/search",{
                        method:"GET",
                }).then((res)=>res.json()).then((data)=>{
                        Setsearchdb(data);
                        console.log(data);
                })
        },[]);
        // get from db end


        const SearchHandler =(e)=>{
                const list = searchdb.map((i)=>{
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
                        {searchdb.map(i=>{
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