import React from 'react'
import './FloatingDiv.css';
const FloatingDiv = (props) => {
    const {item} = props;
    const {address,amount,email,name,paid,phonenumber,product} = item;
  return (
    <div className='item-card' >
         <div className='card-title'></div>
            <div className='badge'>
                {name}
            </div>
            {/* <div className='button'>
            <span className="material-symbols-outlined pointer" onClick={()=>{onEdit(item)}}>edit</span>
            <span className="material-symbols-outlined pointer"onClick={()=>onDelete(id)}>delete</span>
            </div> */}
    </div>
  )
}

export default FloatingDiv;