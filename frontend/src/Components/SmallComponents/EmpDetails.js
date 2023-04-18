import React from 'react'
import './EmpDetails.css';
const EmpDetails = (props) => {
    const {item} = props;
    console.log('entered',item);
    const {Address,email,name,password,phonenumber} = item;
    console.log('empdetails',item)
  return (
    <div>email</div>
  )
}

export default EmpDetails;