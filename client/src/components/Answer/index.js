import React, { useState } from 'react';
import './style.css';
import images from '../../assets/images'; 

export default function Answer(props) {

  const { title, category, children, mobile } = props;
  const { arrow } = images; 
  const [isToggleOn,setIstoogle] =useState(true);
  return (
    <div className="answer_container">
    <div style={mobile ? { paddingLeft: '6%'} : {} } onClick={() => setIstoogle(!isToggleOn)} className="answer_cross">
      <div>
        <div className={`${mobile ? 'mobileAnswerTitle' : "answer_title"}`} >{title}</div>
        <div className={`${mobile ? 'mobileAnswerTitle' : "answer_subtitle"}`} >{category}</div> 
      </div>
      <img onClick={() => setIstoogle(!isToggleOn)} className={`cross_rotate ${!isToggleOn ? 'on_crooss' : 'off_crooss' }`} src={arrow} alt="logo" width="15" height="15" />
    </div>
    {!isToggleOn ? 
    <div className="answer_description"> { children } </div>
    // <div className="answer_description" dangerouslySetInnerHTML={{__html: children}} />
     : ''}
    </div>
  );
}
 