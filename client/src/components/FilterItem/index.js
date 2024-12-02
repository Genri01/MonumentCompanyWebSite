import React from 'react';
import OrangeButton from '../OrangeButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import './style.css'

export default function FilterItem(props) {
  const { customclass, mobile  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    mobile ?   
    <div className={`${customclass === undefined ? '' : customclass} filterItemWrapperMobile `}>
  
    </div> :
    <div className={`${customclass === undefined ? '' : customclass} filterItemWrapper `}>
 
  </div>
  );
}
 