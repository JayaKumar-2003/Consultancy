import React from 'react'
import './EmpDetails.css';

function EmpDetails (props) {
  console.log(props);
  const [details] = props;
  console.log('mm',details)
  return(
    <div>
      hello
    </div>
  );
}
export default EmpDetails;