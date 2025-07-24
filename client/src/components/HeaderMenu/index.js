import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';  
import { Link, useNavigate,useLocation } from 'react-router-dom'; 
import { header } from '../../redux/selectors';
import { setPopupVisible } from '../../redux/actions/app'; 
import images from '../../assets/images';
import { telephone } from '../../config/index' 
import ConsultationButton from '../ConsultationButton'
import './style.css';

function HeaderMenu(props) {
  const { statuy, cart, phone, local, time }= images;
  const { onClick, userName, page, mobile, isAuth} = props;
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {   
    // dispatch(change_page(localStorage.getItem('page'))); 
 
  },[page]); 

  const {hash, key} = useLocation();
 
  useEffect(()=>{
      if(hash){
        console.log(hash.substring(1));
        const targetElement = document.getElementById(hash.substring(1))
        targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [key, hash])
 
  const headers_tab = [
    {
      title: 'Макеты',
      key:"makets",
      rout: '/#maket',
    },  
    {
      title: 'Услуги',
      key:"uslugis",
      rout: '/#uslugi',
    },
    {
      title: 'Пример установки',
      key:"primers",
      rout: '/#primer',
    }, 
    {
      title: 'Каталог',
      key:"catalog",
      rout: '/app/all',
    },  
  ];
 
  let st = {}
 
    return (
      <div className={` ${ mobile ? 'mobileHeaderWrapper' : 'headerWrapper' }`}> 
        <div  style={{flexWrap: mobile ? 'nowrap' : 'wrap' }}  className='mobileBottomHeader'>
        <div className='mobileLableContainer'>
          <Link style={{ textDecoration: 'none', }} to={"/"}>
            <div className='textLogoContainer'>
              <div style={{fontSize: `${mobile ? '15px' : '25px'}`, width: `${mobile ? '35px' : '65px'}`, height: `${mobile ? '35px' : '65px'}`}} className="mobileLogomini">MC</div>
              <div style={{fontSize: `${mobile ? '14px' : '28px'}`}} className="mobileLogo">
                <div>Monument</div>
                <div>Company</div>
              </div> 
            </div>
          </Link>
        </div>
        <div className="catigories_heads">
        { !mobile && headers_tab.map(({ key, rout, title }) => {
            st = key === page ? 'active' : ''
            return <Link key={key} to={rout}><div style={{ minWidth: key == 'works' ? '140px' : key == 'view' ? '185px' : '0px' }} id={key} className={`tab ${st}`} onClick={(e) => { onClick(e); }}>{title}</div></Link>
          })
        }
        {
         !mobile &&  <div style={{width: '100px', height: '50px', position:'relative'}}>
            <div className="consultation-button-wrapper">
              <ConsultationButton
                mobile={mobile}
                onClick={() => dispatch(setPopupVisible(true))}
              />
            </div>
          </div>
        }
         
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


