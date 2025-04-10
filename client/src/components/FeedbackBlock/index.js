
import React from 'react';
import Title from '../Title';
import FeedbackItem from '../FeedbackItem';
// import { feedback } from '../../config';
import './style.css';
import images from '../../assets/images';


export default function FeedbackBlock(props) {
  const { mobile, id } = props;
  const {ustanovka} = images;
  return (
    <div id={id} className="feedbackWrapper"> 
      <Title size={20} text="Пример установки Мемориала" margin="0px 0px 50px 0px" />
      <div className='mobileFeedbackItemContainer'>  
        <img style={{ marginBottom: `${mobile ? '0' : '60px'}` }} width={`${mobile ? '100%' : '40%'}`} src={ustanovka} alt="visa" />
      </div> 
    </div>
  );
}

