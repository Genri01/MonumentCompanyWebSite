import{ React, useEffect } from 'react';
import './style.css';
import ShopBlock from '../../components/ShopBlock';
import { useSelector } from 'react-redux';
import { app } from '../../redux/selectors';

function ShopScreen(props) {
  const mobile = useSelector(app.mobile);

  useEffect(() => {    
    window.scrollTo({top:0,behavior:'smooth'});
  },[]); 

    return (
      <div className={`${mobile ? "mobileShopScreen" : "shop_screen"}`} >
        <ShopBlock mobile={mobile} />
      </div>
    );
}

export default ShopScreen;
