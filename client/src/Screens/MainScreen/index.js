import React, { useState, useEffect } from 'react';
import './style.css';

import MainBlock from '../../components/MainBlock'
import ViewStone from '../../components/ViewStone'
import TopMonument from '../../components/TopMonument'
import AboutProduct from '../../components/AboutProduct'
import WorkOrder from '../../components/WorkOrder'
import FeedbackBlock from '../../components/FeedbackBlock'
import AnswerBlock from '../../components/AnswerBlock'
import PlusBlock from '../../components/PlusBlock' 
import FilterItem from '../../components/FilterItem';
import Title from '../../components/Title';  
import Footer from '../../components/Footer';
import { setBotAppMod } from '../../redux/actions/app'
import { useDispatch } from 'react-redux';  
 
function MainScreen(props) {
 
  const { mobile } = props;

  useEffect(() => {
    dispatch(setBotAppMod(false)); 
  },[])
  
  const dispatch = useDispatch();

    return (
      <div className="main_screen" > 
        <MainBlock mobile={mobile} />
        <TopMonument mobile={mobile} /> 
        <div className='backgroundFilter'>
          <Title size={30} text="Мы используем" margin="30px 0px 10px 0px" />
        </div> 
        <div className='mobileFilterContainer'>
          <Title customclass="mobileCenter" size={22} margin={`${mobile ? "30px 0px 10px 0px" :  "30px 0px 50px 0px"}`} text="Натуральный камень со всего мира:" />
          <ViewStone customclass={`${mobile ? "mobileArrow mobileSlider" :  "arrow slider"}`} />
        </div> 
        <AboutProduct id="about" mobile={mobile} />
        <PlusBlock mobile={mobile} />
        <WorkOrder mobile={mobile} />
        <FeedbackBlock id="feedback" mobile={mobile} />
        <AnswerBlock mobile={mobile} />  
        <Footer mobile={mobile} />  
      </div>
    );
}

export default MainScreen;
