import React, { useState, useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import MainBlock from '../../components/MainBlock'
import ViewStone from '../../components/ViewStone'
import TopMonument from '../../components/TopMonument'
import AboutProduct from '../../components/AboutProduct'
import WorkOrder from '../../components/WorkOrder'
import FeedbackBlock from '../../components/FeedbackBlock'
import AnswerBlock from '../../components/AnswerBlock'
import PlusBlock from '../../components/PlusBlock' 
import FilterItem from '../../components/FilterItem';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FeedbackPopup from '../../components/FeedbackPopup';
import Title from '../../components/Title';  
import OrangeButton from '../../components/OrangeButton';  
import Footer from '../../components/Footer';
import { setBotAppMod,setPopupVisible} from '../../redux/actions/app' 
import images from '../../assets/images';
import { app, cart } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function MainScreen(props) {
 
  const { mobile } = props;
  const { telega, phone, insta, whatsapp, viber, email,stoneGif,poster,memorialmov} = images; 
  useEffect(() => {
    dispatch(setBotAppMod(false)); 
  },[]) 

  const dispatch = useDispatch();
  const visible_popup = useSelector(app.visible_popup);

  const socialIcons = [ 
    { src: insta, alt: 'Instagram', href: 'https://www.instagram.com/monument.sk?igsh=MXBhcWdrMnVjajhzOA==' }, 
    // { src: viber, alt: 'Viber', href: 'viber://chat?number=%2B79184455468' }, 
    { src: whatsapp, alt: 'WhatsApp', href: 'https://wa.me/+79184455468?text=Здравствуйте,%20Хочу%20онлайн%20консультацию.' }, 
    { src: telega, alt: 'Telegram', href: 'https://t.me/Denis_Skorev' }, 
    { src: phone, alt: 'Позвонить', href: 'tel:+79184455468' },
    { src: email, alt: 'Email', href: 'mailto:denis@monumentcompany.ru' }
  ];
  
  const navigate = useNavigate();

    return (
      <>
        <Helmet>
          <title>Памятники и Надгробия – Достойная Память о Ваших Близких</title>
          <meta name="description" content="Ищете качественные памятники и надгробия? Мы предлагаем индивидуальное изготовление, облагораживание мест захоронений и мемориальные комплексы. Поддержите память о своих близких с нашей помощью. Свяжитесь с нами для бесплатной консультации!" />
          <meta name="keywords" content="изготовление памятников, памятники под заказ, надгробия, памятники из гранита, памятники из мрамора, памятники на могилу, индивидуальный дизайн памятников, памятники с 3D макетом, мемориальные комплексы" />
        </Helmet>
        <div className="main_screen" >  
          <MainBlock mobile={mobile} />
          <FloatingContactButtons icons={socialIcons} />
          <FeedbackPopup visible={visible_popup} onClose={() =>  dispatch((setPopupVisible(false)))} />
          <TopMonument mobile={mobile} /> 
          <div className='backgroundFilter'>
            <Title size={30} text="Мы используем" margin="30px 0px 10px 0px" />
          </div> 
          <div className='mobileFilterContainer'>
            <Title customclass="mobileCenter" size={22} margin={`${mobile ? "30px 0px 10px 0px" :  "30px 0px 50px 0px"}`} text="Натуральный камень со всего мира:" />
            <ViewStone customclass={`${mobile ? "mobileArrow mobileSlider" :  "arrow slider"}`} />
          </div> 
          <AboutProduct part={1} id="maket" mobile={mobile} />
          <div id="uslugi" className='mobileFilterContainer'>
            <div style={{backgroundColor: '#f5faff'}} className='mobileAboutTopWrapper'>
                <Title margin="40px 0px 40px 0px" size={23} text="3D Визуализация памятников" />
                <div className='aboutPhotoWrapper'>
                  <video
                  src={stoneGif}
                  width='100%' 
                  loop
                  autoPlay
                  muted  
                  poster={poster}
                  playsInline
                  /> 
                </div>  
                  <div style={{ width: mobile ? '93%' : '50%'}} className='aboutTextWrapper'>
                  <div>Наши художники обладают опытом работы с различными стилями и материалами, гармонично сочетая традиции и современные тенденции в создании памятников.</div>
                </div> 
            </div> 
          </div> 
          <AboutProduct part={2}  mobile={mobile} />
          <FeedbackBlock id={'primer'} mobile={mobile} />
          <PlusBlock mobile={mobile} />
          <WorkOrder mobile={mobile} />
        
          <AnswerBlock icons={socialIcons} mobile={mobile} />  
          <Footer mobile={mobile} />  
        </div>
      </>
    );
}

export default MainScreen;



