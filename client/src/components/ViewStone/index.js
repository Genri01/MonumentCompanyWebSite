import React, { useEffect, useState } from 'react';
import images from '../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/effect-cube'; 
import './style.css';

import { EffectCube, Pagination } from 'swiper/modules';

export default function ViewStone(props) {
  const { customclass } = props;
 
  const [viewStoneSwiper, setViewStoneSwiper] = useState('');

  useEffect(() => {
    setViewStoneSwiper(document.querySelector(`.viewStoneSwiper`).swiper); 
  },[viewStoneSwiper])
 
  const {
    view_1,
    view_2,
    view_3,
    view_4,
    view_5,
    view_6,
    view_7,
    view_8,
    view_9,
    view_10,
    view_11, 
    arrowr, 
    arrowl, 
  } = images;

  const sliderWalk = [
    {
      img: view_1,
    },
    {
      img: view_2,
    },
    {
      img: view_3,
    },
    {
      img: view_4,
    },
    {
      img: view_5,
    },
    {
      img: view_6,
    },
    {
      img: view_7,
    },
    {
      img: view_8,
    },
    {
      img: view_9,
    },
    {
      img: view_10,
    },
    {
      img: view_11,
    }, 
]
 
  return (
    <div className={`viewStoneWrapper ${customclass === undefined ? '' : customclass}`}> 
      <div className='swiper_container'>
        <Swiper
          effect={'cube'} 
          loop={true}  
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94, 
          }}
          pagination={{ clickable: true, bulletActiveClass: 'bulletActive' }}
          modules={[EffectCube, Pagination]}  
          slidesPerView={1}
          spaceBetween={30} 
          className={`viewStoneSwiper`}
        >
          { 
            sliderWalk.map((el,id) => (
            <SwiperSlide key={id}>
              {/* <div className="slider_container_all">  */}
                <img src={el.img} alt="a" width={'100%'} height={'100%'} />
              {/* </div> */}
            </SwiperSlide>
            ))
          }  
        </Swiper>
      </div> 
    </div>
  );
}