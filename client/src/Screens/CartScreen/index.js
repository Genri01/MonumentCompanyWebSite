import{ React, useEffect } from 'react';
import './style.css'; 
import CartBlock from '../../components/CartBlock' 
import Title from '../../components/Title'; 
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { app,cart } from '../../redux/selectors'
import { 
  setAddres,
  setBirthdayDate,
  setCity,
  setComent,
  setDeadDate,
  setEmail,
  setDeliveryMethod,
  setFile, 
  setIndex,
  setInitial,
  setInitialDead,
  setInsert,
  setInstall,
  setPayMethod,
  setRegion,
  setTel, 
  clearBuy,
  sendInfoServer, 
  setPopupMainMsg,
  setBuy
 } from '../../redux/actions/cart';
import images from '../../assets/images';

function CartScreen(props) {
  const mobile = useSelector(app.mobile);
    const { crossp } = images;
    const link = useSelector(cart.link); 
    var procuct_link = link;
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

    useEffect(() => {    
      window.scrollTo({top:0,behavior:'smooth'});
    },[]); 
    return (
      <div className="cart_screen" >  
        <div className="cross">
          <Link
          onClick={() => {
            dispatch(setAddres(''));
            dispatch(setBirthdayDate(''));
            dispatch(setCity(''));
            dispatch(setComent(''));
            dispatch(setDeadDate(''));
            dispatch(setEmail(''));
            dispatch(setDeliveryMethod(''));
            dispatch(setFile([])); 
            dispatch(setIndex(''));
            dispatch(setInitial(''));
            dispatch(setInitialDead(''));
            dispatch(setInsert({}));
            dispatch(setInstall(false));
            dispatch(setPayMethod(''));
            dispatch(setRegion(''));
            dispatch(setTel(''));
            dispatch(setPopupMainMsg(''));
            dispatch(setBuy([]));
            dispatch(clearBuy());
            navigate('/app/all');
            // localStorage.setItem('page','main');
          }}
          style={{ textDecoration: 'none' }} to={`${procuct_link}`}><img width={35} height={35} className="imageShopBlock" src={crossp} alt="cross" /></Link>
        </div>
        <div className='backgroundCartProduct'>
          <Title size={25} text="Оформление заказа" margin="30px 0px 10px 0px" />
        </div>
        <CartBlock mobile={mobile} /> 
      </div>
    );
}

export default CartScreen;
