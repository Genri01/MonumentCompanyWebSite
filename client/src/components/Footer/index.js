import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/images';
import { YMaps, Map, Placemark,ZoomControl } from 'react-yandex-maps'; 
import './style.css';

function Footer(props) {
  const { mir, mastercard,sber, telega } = images;
  const { mobile } = props;
  const dispatch = useDispatch();
    return (
      <div className="footer_container">
        <div className="footer_up">
          <div className='mobile-coperait_txt'>ЗАПИСАТЬСЯ НА ВСТРЕЧУ</div>
          <div className="footer_logo_section">
            <YMaps>
                <Map  className={`${mobile ? 'mobile-iframe' : 'iframe'}`} defaultState={{ center: [44.7350691, 39.9124768], zoom: 15 }}>
                  <Placemark geometry={[44.734069, 39.917010]} /> ,
                  <ZoomControl />
                </Map>
            </YMaps>
          </div>
          {/* <div className="footer_desription_section_left">
          <Link   to={"/app/all"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >Каталог</div></Link> 
          <Link to={"/works/#works"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >Наши работы</div></Link>
          <Link to={"/#feedback"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >Отзывы</div></Link>
          </div>
          <div className="footer_desription_section_right">
            <Link to={"/#answer"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Вопросы и ответы</div></Link>
            <Link to={"/#about"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>О нас</div></Link>
            <Link to={"/police"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Политика конфидециальности</div></Link>
          </div> */}
          <div className="footer_social_section">
            <div className="social_container">
              {/* <img className="social_img" style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "http://www.instagram.com";}}  src={telega} alt="instagram" width="28" height="28" /> */}
              {/* <img style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "https://www.facebook.com/";}} src={facebook} alt="facebook" width="28" height="28" /> */}
            </div>
          </div>
        </div>
        <div className="footer_down">
          <div className="coperait_container">
            <div className={`${mobile ? 'mobile-coperait_txt' : 'coperait_txt'}`}>Copyright © 2012 Памятники, ритуальные комплексы, благоустройство мест захоронения</div> 
          </div>
          <div className="visa_container">
            <img src={mir} alt="visa" width="35" height="23" />
            <img src={mastercard} alt="mastercard" width="35" height="23" />
            <img src={sber} alt="mastercard" width="35" height="23" />
          </div>
        </div>
      </div>
    );
}

export default Footer;
