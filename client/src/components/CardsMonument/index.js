import React,{ useState } from 'react'; 
import OrangeButton from '../OrangeButton';
import SizeButton from '../SizeButton';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { setInsert , linkpage} from '../../redux/actions/cart';  
import images from '../../assets/images'
import './style.css'

export default function CardsMonument(props) {
  const { activeBtn, subcategory, onClick, img, title, description, price, id, info, prop, count, category, sizes,mobile } = props; 
  const {test} = images
  const dispatch = useDispatch();  
  
  return (
    <div className={`${mobile ? "mobileCardsItemWrapper" : "CardsItemWrapper"}`}>
      <div className="CardsItemTop"> 
        <img src={img} loading="lazy" alt='statuy' width='80%' height='100%' />
      </div>
      <div className="CardsItemBottom">
        <div className="txtCardsName">{title}</div>
        <div className="txtCardsAbout">{description}</div> 
         {
           category == '3d' || 
           category == 'works' ||
           category == 'balls' ||
           category == 'fences' ||
           category == 'granitetille' ||
           category == 'lamps' ||
           category == 'pavingtile' ||
           category == 'porcelaintile' ||
           category == 'vases' ||
           category == 'other' || 
           price[0] == 0 ?  
           <div style={{width: '100%', height: '100px'}}></div> :
           <>
            <div className='containerSizeBtn'>
            {
              sizes.map((item, i) => (
                <SizeButton
                  id={i}
                  active={i == activeBtn}
                  margin={`0px ${i == 1 ? 5 : 0}px`}
                  key={i}
                  text={{ size: item.size, tumb: item.tumb }}
                  onClick={() => onClick({ id_card: id, active: i, category: subcategory })}
                />
              ))
            }
          </div>
          <div className="txtCardsPrice">{`${price[activeBtn]} руб.`}</div>
          <Link style={{ textDecoration: 'none' }} to={`/shop/${category}/${id}`}>
            <OrangeButton margin="20px 0px 20px 0px" text="Подробнее" onClick={() => {  
            dispatch(setInsert({img, title, description, price, id, info, prop, count, sizes, activeBtn }));
            dispatch(linkpage(`/app/${category}/`));
            // localStorage.setItem('card_inf',JSON.stringify({ img, title, description, price, id, info, prop, count, sizes, activeBtn }));
            // localStorage.setItem('cross_link',`/app/all`) 
            }}  />
          </Link> </> 
         }
      </div>
    </div> 
  ); 
}
 