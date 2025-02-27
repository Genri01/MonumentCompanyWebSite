import React from 'react';
import images from '../../assets/images';
import OrangeButton from '../OrangeButton';
import SizeButton from '../SizeButton';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cart, cards } from '../../redux/selectors';
import { setBuy, setInsert } from '../../redux/actions/cart';  
import imageToBase64 from 'image-to-base64/browser'; 
import './style.css';

export default function ShopBlock(props) {
  const { mobile } = props;
  const { crossp } = images;

  const insert = useSelector(cart.insert);
  const link = useSelector(cart.link);
 
  var procuct_cart = insert;
  var procuct_link = link;

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  // if(Object.keys(insert).length === 0) {
  //   procuct_cart = JSON.parse(localStorage.getItem('card_inf')); 
  //   procuct_link = localStorage.getItem('cross_link'); 
  // } 
 
  let tmpstring = procuct_cart.prop;  
  let tmpstringtwo = tmpstring.replace('*', `${procuct_cart.sizes[+procuct_cart.activeBtn].tumb}`)
  let string = tmpstringtwo.replace('#', `${procuct_cart.sizes[+procuct_cart.activeBtn].size}`) 
    
  return (
    <div className={`${mobile ? 'mobileShopBlockWrapper' : "shopBlockWrapper"}`}>
      {
        mobile ?
        <>
          <div className="cross">
            <Link style={{ textDecoration: 'none' }} to={`${procuct_link}`}><img width={35} height={35} className="imageShopBlock" src={crossp} alt="cross" /></Link>
          </div>
          <div style={mobile ? { width: '100%' } : {}} className="imageShopBlockWrapper">
            <img style={mobile ? { width: '100%' } : {}} className="imageShopBlock" src={procuct_cart.img} alt="" />
          </div>
          <div style={mobile ? { width: '80%',margin: '50px 0px' } : {}} className="infoShopBlockWrapper">
            <div className="titleShopBlock">
             {
               procuct_cart.title
             }
            </div>
            <div style={mobile ? { justifyContent: 'center' } : {}} className="priceShopBlock">
              {
               procuct_cart.price[+procuct_cart.activeBtn] + ' руб.'
              }
            </div>
            <div style={mobile ? { justifyContent: 'center' } : {}} className='btnShopBlockWrapper'>
              <div className='optionContainer'>
                {
                  procuct_cart.sizes.map((item, i) => (
                    <SizeButton
                      id={i}
                      active={i == +procuct_cart.activeBtn}
                      margin={`0px ${i == 1 ? 5 : 0}px`}
                      key={i}
                      text={{ size: item.size, tumb: item.tumb }}
                      onClick={(id) => { 
                        let produ = { ...procuct_cart, activeBtn: id }
                        const newProdu = structuredClone(produ);  
                        dispatch(setInsert(newProdu)); 
                      }}
                    />
                  ))
                }
              </div>
            <OrangeButton style={{ textDecoration: 'none' }} text='Оформить заказ' onClick={()=>{
                imageToBase64(procuct_cart.img)
                  .then(
                      (response) => {
                        let buyarr = { count: procuct_cart.count, img:procuct_cart.img, img64:response, price: procuct_cart.price[+procuct_cart.activeBtn], title: procuct_cart.title, id: procuct_cart.id }
                        const newBuyarr = structuredClone(buyarr);  
                        dispatch(setBuy(newBuyarr)) 
                        navigate('/cart');
                      }
                  )
                  .catch(
                      (error) => {
                          console.log(error); // Logs an error if there was one
                          // dispatch(setBuy({ count:procuct_cart.count, img:procuct_cart.img, img64:'', price:procuct_cart.price, title:procuct_cart.title, id: procuct_cart.id })) 
                          navigate('/cart');
                      }
                  ) 
             }} /> 
            </div>
            <div className="aboutShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.description}} />
            <div className="infoblockShopBlock" dangerouslySetInnerHTML={{__html: string}} />
            <div className="telephoneShopBlockMobile" dangerouslySetInnerHTML={{__html: procuct_cart.info}} />
          </div>
        </> :
        <>
          <div className="cross">
          {/* <Link to={`${procuct_link}`}><img className="imageShopBlock" src={cross} alt="cross" /></Link> */}
          </div>
          <div className="imageShopBlockWrapper">
          {/* <img className="imageShopBlock" src={procuct_cart.img} alt="" /> */}
          </div>
          <div className="infoShopBlockWrapper">
          <div className="titleShopBlock">
            {
              // procuct_cart.title
            }
          </div>
          <div className="priceShopBlock">
            {
              // procuct_cart.price + ' руб.'
            }
          </div>
          <div className='btnShopBlockWrapper'>
          <OrangeButton style={{ textDecoration: 'none' }} text='Оформить заказ' onClick={()=>{
                // imageToBase64(procuct_cart.img)
                //   .then(
                //       (response) => {
                //         // dispatch(setBuy({ count:procuct_cart.count,img:procuct_cart.img, img64:response, price:procuct_cart.price, title:procuct_cart.title, id: procuct_cart.id }))
                //         console.log(`image: ` + response); 
                //         navigate('/cart');
                //       }
                //   )
                //   .catch(
                //       (error) => {
                //           console.log(error); // Logs an error if there was one
                //           dispatch(setBuy({ count:procuct_cart.count, img:procuct_cart.img, img64:'', price:procuct_cart.price, title:procuct_cart.title, id: procuct_cart.id })) 
                //           navigate('/cart');
                //       }
                //   ) 
             }} /> 
          </div>
            {/* <div className="aboutShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.description}} />
            <div className="infoblockShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.prop}} />
            <div className="telephoneShopBlock" dangerouslySetInnerHTML={{__html: procuct_cart.info}} /> */}
          </div>
        </>
      }
    </div>
  );
}
