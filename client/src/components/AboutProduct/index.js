import React from 'react'; 
import Title from '../Title';
import images from '../../assets/images';
import OrangeButton from '../OrangeButton';
import { useNavigate } from 'react-router-dom';
import './style.css'; 

export default function AboutProduct(props) { 
  const { mobile, id } = props;
  const { maket,stoneGif,poster } = images;

  const navigate = useNavigate();

  return (
    <div  id={id} className={`${mobile ? 'mobileAboutWrapper' : "aboutWrapper"}`}> 
      <Title customclass={'centerTextAbout'} size={23} margin="10px 0px 50px 0px" text="Макеты памятников по Вашему проекту" />
      <div className='mobileAboutTopWrapper'>
        <div className='aboutPhotoWrapper'>
          <img className='photoAbout' src={maket} alt="photo" />
        </div>
        <div className='aboutTextWrapper'>
          <div>Наши художники разрабатывают эскизы, которые не просто соответствуют вашим ожиданиям,но и превосходят их. Мы уделяем внимание каждой детали, чтобы памятник был уникальным и особенным, отражая индивидуальность и уважение к ушедшему.</div>
        </div>
      </div>  
      <div className='mobileAboutTopWrapper'>
        <Title size={23} text="3D Визуализация памятников" />
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
        <div className='aboutTextWrapper'>
          <div>Наши художники обладают опытом работы с различными стилями и материалами, гармонично сочетая традиции и современные тенденции в создании памятников.</div>
        </div>
        <Title size={25} margin="40px 0px 15px 0px" text="Мемориальные комплексы" />
        <Title size={15} text="Индивидуальные проекты под ключ" />
        <div className='aboutTextWrapper'>
          <div>{`Если вы ищете что-то простое, например, прямоугольный памятник, или что-то более сложное, например, статую, то у нас есть множество вариантов для вас.\n\nМы можем предложить вам широкое разнообразие памятников и мемориальных комплексов, которые могут быть изготовлены по вашим точным спецификациям.\n\nНаличие собственного производства позволяет нам осуществить заказ любой сложности — от простых памятников в форме волны, до барельефов и скульптур, по вашему индивидуальному заказу.\n\nНаша команда опытных профессионалов будет работать с вами на каждом шагу, чтобы итоговый результат был именно таким, каким вы его себе представляете.`}</div>
        </div>
        <OrangeButton margin="40px 0px 0px 0px" width={242} text="Узнать подробнее" onClick={() => { navigate('/app/all'); }} />
      </div> 
    </div>
  );
}
 
