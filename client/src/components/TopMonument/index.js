import React from 'react'; 
import CardsMonument from '../CardsMonument/index';
import OrangeButton from '../OrangeButton';
import Title from '../Title';  
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';  
import './style.css';

export default function TopMonument(props) {
  
  const { mobile } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  return (
    <div className="topMonumentWrapper" > 
      <Title margin="50px 0px 0px 0px" size={40} text="Памятники"/>
      <div className="mobileTitleMonumentContainer"> 
        Памятники в наличии и под заказ
      </div>
      <div className="mobileSubTitleMonumentContainer"> 
      Собственное производство памятников, мемориальных комплексов по типовым и индивидуальным проектам.
      </div>
      <div className='buttonContainer'>
        <OrangeButton  width={242} text="Перейти в каталог" onClick={() => { navigate('/catalog/all'); }} />
      </div> 
    </div>
  );
}
 