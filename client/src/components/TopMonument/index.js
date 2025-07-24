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
      <h2  style={{width: mobile ? '90%' : '50%'}}  className="mobileTitleMonumentContainer"> 
        Памятники в наличии и под заказ
      </h2>
      <h2  style={{width: mobile ? '90%' : '50%'}}  className="mobileTitleMonumentContainer"> 
        Собственное производство памятников, мемориальных комплексов по типовым и индивидуальным проектам.
      </h2>
      <h2  style={{width: mobile ? '90%' : '50%'}}  className="mobileTitleMonumentContainer"> 
        Памятник — это не просто мрамор или гранит. Это знак уважения, памяти и любви к тем, кто оставил след в нашем сердце. В нашем каталоге памятников и мемориальных комплексов вы найдете разнообразие стилей, материалов и дизайнов, чтобы выбрать именно то, что соответствует вашему видению.  - выделенный текст обозначить 
      </h2>
      <div className='buttonContainer'>
        <OrangeButton  width={242} text="Перейти в каталог" onClick={() => { navigate('/app/all'); }} />
      </div> 
    
      <div style={{width: mobile ? '90%' : '50%'}} className='subContainer'>
        <h2 style={{marginBottom: '20px'}} className="mobileTitleMonumentContainer"> 
          Наши услуги включают:
        </h2>
        <h2 className="mobileTitleMonumentContainer"> 
        - Изготовление памятников:
        </h2>
        <div className="mobileSubTitleMonumentContainer">
          Индивидуальный подход к каждому заказу. Мы создаем памятники по вашему дизайну или предоставляем готовые варианты.
        </div>
        <h2 style={{width: '100%'}} className="mobileTitleMonumentContainer"> 
        - Облагораживание захоронений:
        </h2>
        <div className="mobileSubTitleMonumentContainer">
          Мы осуществляем уборку и благоустройство мест захоронений, чтобы они выглядели достойно.
        </div>
        <h2 className="mobileTitleMonumentContainer"> 
        - Установка памятников:
        </h2>
        <div className="mobileSubTitleMonumentContainer">
          Профессиональная установка памятников с гарантией качества.
        </div>
        <h2 style={{width: '100%'}} className="mobileTitleMonumentContainer"> 
        - Индивидуальный дизайн мемориальных комплексов:
        </h2>
          <div className="mobileSubTitleMonumentContainer">
        Создание уникальных мемориалов по вашим пожеланиям.
        </div>
        <h2 className="mobileTitleMonumentContainer"> 
        - Уход за захоронениями:
        </h2>
          <div className="mobileSubTitleMonumentContainer">
          Мы предлагаем услуги по регулярному уходу за могилами, чтобы поддерживать их в порядке.
        </div>
      </div>  
    </div>
  );
}
 