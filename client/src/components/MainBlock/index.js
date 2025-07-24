import React from 'react';
 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax,EffectFade, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  
import ConsultationButton from '../ConsultationButton'
import { setPopupVisible } from '../../redux/actions/app'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';  
import './style.css';
import images from '../../assets/images';

export default function MainBlock(props) {

  const { mobile } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { 
    slide_1,
    slide_2,
    slide_3,
    slide_4,
    slide_5,
    slide_6,
    slide_7,
    slide_8,
    slide_9,
    slide_10,
    monument
  } = images;

  const slideMain = [
    { title: '', backImg: monument },
    { title: '', backImg: slide_2  },
    { title: '', backImg: slide_3  },
    { title: '', backImg: slide_4  },
    { title: '', backImg: slide_6  },
    { title: '', backImg: slide_5  },
    { title: '', backImg: slide_7  },
    { title: '', backImg: slide_8  },
    { title: '', backImg: slide_9  }, 
  ] 

  return ( 
    <Swiper 
      effect={'fade'}   
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      parallax={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      modules={[Parallax, Autoplay, EffectFade]}
      className="mainSwiper"
    > 
      {
        slideMain.map((item,i)=>( 
          <SwiperSlide key={i} >  
            <div style={{ backgroundImage: `url(${item.backImg})`, height: `${mobile ? '400px' : '800px'}`}} className="slider_container_main" >
              <div style={{ 
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                 }} ></div>
              <h1 style={{ marginLeft: mobile ? '10px' : '50px', paddingTop: mobile ? '10px' : '50px', fontSize: mobile && '20px', width: mobile ? '100%' : '40%'}} className="slider_text_main" >
                {
                  'Изготовление памятников и надгробий на заказ'
                } 
              </h1>
              <h2 style={{ marginLeft: mobile ? '10px' : '50px', paddingTop: mobile ? '10px' : '50px', fontSize: mobile && '15px', width: mobile ? '100%' : '40%'}} className="slider_text_main" >
                {
                  'Наши услуги включают облагораживание мест захоронений, установку памятников и изготовление уникальных мемориальных комплексов.'
                } 
              </h2>
              <ConsultationButton top={''} right={''} left={'4%'} bottom={150} mobile={mobile} onClick={() => { dispatch((setPopupVisible(true)))}}/>
                {
                  !mobile &&               <div className="slider_text_container" > 
                <div className="slider_text_sub">{'3Д Визуализация'}</div>
                <div className="slider_text_sub">{'Гарантия 3 года!'}</div>
                <div className="slider_text_sub">{'12 лет на рынке'}</div>
                <div className="slider_text_sub">{'Скидки пенсионерам и участникам СВО'}</div> 
              </div> 
                }
            </div>  
          </SwiperSlide>
        ))
      }
    </Swiper>  
  );
};