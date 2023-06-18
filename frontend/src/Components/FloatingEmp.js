import React, { useContext, useEffect, useState } from 'react';
import './FloatingEmp.css';
import Popup from './SmallComponents/Popup';
import { Store } from '../Store';
import axios from 'axios';

const FloatingEmp = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);
  const { item } = props;
  const [contain, setContain] = useState(false);
  const { Address, email, name, password, phonenumber } = item;
  const [details, setDetails] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/employee/search', {
        headers: { authorization: `bearer ${userInfo.token}` }
      });
      ctxDispatch({ type: 'EMPLOYEE_VIEW', payload: data });
      localStorage.setItem('employee_view', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employee/delete/${_id}`);
      const { data } = await axios.get('http://localhost:5000/api/employee/search', {
        headers: { authorization: `bearer ${userInfo.token}` }
      });
      localStorage.setItem('employee_view', JSON.stringify(data));
      ctxDispatch({ type: 'EMPLOYEE_VIEW', payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const detailHandler = (number) => {
    console.log("hello"); 
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="FloatingEmp">
      <div className="display">
        <div className="box-container">
          <div className="title">{name}</div>
          <div className="inside-bodycontainer">
            <div className="phonenumber">{phonenumber}</div>
            <div className="details-button pointer" onClick={() => {
              detailHandler(phonenumber);
              setContain(!contain);
            }}>
              DETAILS
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>
        </div>
        {contain && (
          <div className="arrow">
            <span className="material-symbols-outlined" onClick={() => {}}>arrow_forward_ios</span>
            <div className="arrow-box">
              <div className="details">
                <span>phonenumber: {details.phonenumber}</span>
                <span>Address: {details.Address}</span>
              </div>
              <div className="edit">
                <span className="material-symbols-outlined pointer" onClick={() => { deleteHandler(details._id) }}>
                  delete
                </span>
                <span className="material-symbols-outlined pointer" onClick={() => { setButtonPopup(true) }}>
                  edit_note
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} details={details} />
      <Popup trigger={timePopup} setTrigger={setTimePopup} details={details} />
    </div>
  );
};

export default FloatingEmp;
