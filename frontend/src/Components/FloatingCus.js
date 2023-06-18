import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Store } from '../Store';
import './FloatingCus.css';
import Popup from './SmallComponents/popupCus';

const FloatingCus = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);
  const { item } = props;
  const { address, amount, email, name, paid, phonenumber, product } = item;
  const [contain, setContain] = useState(false);
  const [details, setDetails] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, customer_view } = state;

  const detailHandler = () => {
    const customer = customer_view.find((item) => item.phonenumber === phonenumber);
    setDetails(customer);
  };

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/customer/search', {
        headers: { authorization: `bearer ${userInfo.token}` }
      });
      ctxDispatch({ type: 'CUSTOMER_VIEW', payload: data });
      localStorage.setItem('customer_view', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/customer/delete/${_id}`);
      const { data } = await axios.get('http://localhost:5000/api/customer/search', {
        headers: { authorization: `bearer ${userInfo.token}` }
      });
      localStorage.setItem('employee_view', JSON.stringify(data));
      ctxDispatch({ type: 'EMPLOYEE_VIEW', payload: data });
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchUser();
  }, [deleteHandler]);

  return (
    <div className="FloatingEmp">
      <div className="display">
        <div className="box-container">
          <div className="title">{name}</div>
          <div className="inside-bodycontainer">
            <div className="phonenumber">{phonenumber}</div>
            <div className="details-button pointer" onClick={() => { detailHandler(); setContain(!contain) }}>
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
                <span>Total amount: {details.paid}</span>
              </div>
              <div className="edit">
                <span className="material-symbols-outlined pointer" onClick={() => {deleteHandler(details._id)}}>delete</span>
                <span className="material-symbols-outlined pointer" onClick={() => {setButtonPopup(true) }}>edit_note</span>
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

export default FloatingCus;
