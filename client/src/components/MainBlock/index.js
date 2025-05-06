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
    { title: 'Изготовление памятников и надгробий', backImg: monument },
    { title: 'Ритуальные металлоизделия', backImg: slide_2  },
    { title: 'Благоустройства мест захронений', backImg: slide_3  },
    { title: 'Изготовление мемориальных комплексов', backImg: slide_4  },
    { title: '3Д Визуализация', backImg: slide_5  },
    { title: 'Дополнительные аксессуары', backImg: slide_6  },
    { title: 'Гарантия 3 года!', backImg: slide_7  },
    { title: '12 лет на рынке', backImg: slide_8  },
    { title: 'Скидки пенсионерам и участникам СВО', backImg: slide_9  }, 
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
              <div className="slider_text_main" >
                {item.title} 
              </div>
              <ConsultationButton mobile={mobile} onClick={() => { dispatch((setPopupVisible(true)))}}/>
            </div>  
          </SwiperSlide>
        ))
      }
    </Swiper>  
  );
};