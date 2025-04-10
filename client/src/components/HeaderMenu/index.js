import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';  
import { Link, useNavigate,useLocation } from 'react-router-dom'; 
import { header } from '../../redux/selectors';
import { change_page } from '../../redux/actions/app'; 
import images from '../../assets/images';
import { telephone } from '../../config/index' 
import './style.css';

function HeaderMenu(props) {
  const { statuy, cart, phone, local, time }= images;
  const { onClick, userName, page, mobile, isAuth} = props;
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {   
    // dispatch(change_page(localStorage.getItem('page'))); 
 
  },[page]); 

  const {hash, key} = useLocation()
  useEffect(()=>{
      // if(hash){
      //    const targetElement = document.getElementById(hash.substring(1))
      //     targetElement?.scrollIntoView({behavior: 'smooth'})
      // }
  }, [key, hash])

  const headers_tab = [
    {
      title: 'Главная',
      key:"main",
      rout: '/',
    },
    {
      title: 'Каталог',
      key:"all",
      rout: '/app/all',
    },
    {
      title: 'Наши работы',
      key:"works",
      rout: '/works',
    },
    {
      title: 'Отзывы',
      key:"feedbacks",
      rout: '/#feedback',
    },
  ];
 
  let st = {}
 
    return (
      <div className={` ${ mobile ? 'mobileHeaderWrapper' : 'headerWrapper' }`}> 
        <div className='mobileBottomHeader'>
        <div className='mobileLableContainer'>
          <div className='textLogoContainer'>
            <div style={{fontSize: `${mobile ? '15px' : '25px'}`, width: `${mobile ? '35px' : '65px'}`, height: `${mobile ? '35px' : '65px'}`}} className="mobileLogomini">MC</div>
            <div style={{fontSize: `${mobile ? '14px' : '28px'}`}} className="mobileLogo">
              <div>Monument</div>
              <div>Company</div>
            </div> 
          </div> 
        </div>
        <ul className="mobile-header-extras">
            {/* <li>
                <img  style={{marginLeft: '7px' }} src={local} alt="map" width="25" height="25" />
                <div className="he-text"> 
                  <span className="text-muted">п.Родники ул.Новая 12б </span>
                </div>
                <div className="he-text"> 
                  <span className="text-muted">denis@monumentcompany.ru</span>
                </div>
            </li> */}
            <li>
                <div className='mobileContainerLi'>
                  <a href={`tel:${telephone}`} className="he-text">  
                      <img style={{ width: `${mobile ? '20px' : '25px'}`, height: `${mobile ? '20px' : '25px'}`}} className="mobile-i-plain" src={phone} alt="phone" />
                      <span style={{ fontSize: `${mobile ? '' : '15px'}` }} className="text-muted">+7 (918) 445 54 68</span> 
                  </a> 
                  <div className="he-text"> 
                  <img style={{ width: `${mobile ? '20px' : '25px'}`, height: `${mobile ? '20px' : '25px'}`}}  className="mobile-i-plain" src={time} alt="time" />
                      <span style={{ fontSize: `${mobile ? '' : '15px'}` }}  className="text-muted">Пн-Сб с 08:00 до 18:00</span>
                  </div> 
                </div>
            </li> 
        </ul>
        </div> 
      </div>
    );
}

export default HeaderMenu;