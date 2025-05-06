import React, { useState } from 'react';
import OrangeButton from '../OrangeButton';
import ProductForm from '../ProductForm';
import BuyerForm from '../BuyerForm';
import ComentForm from '../ComentForm';
import LocationForm from '../LocationForm';
import TransferForm from '../TransferForm';
import TinkoffView from '../TinkoffView'; 
import PayForm from '../PayForm';
import { useNavigate } from 'react-router-dom'; 
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
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from '../../redux/selectors'; 

export default function CartBlock(props) {

  const { mobile } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [isToggleOn,setIstoogle] = useState(false);
  const [isVisibleViget,setIsVisibleViget] = useState(false);

  const byer_initial_dead = useSelector(cart.byer_initial_dead);
  const byer_date_birthday = useSelector(cart.byer_date_birthday);
  const byer_date_dead = useSelector(cart.byer_date_dead);
  const byer_file = useSelector(cart.byer_file); 
  const install = useSelector(cart.install);
  const byer_initial = useSelector(cart.byer_initial);
  const byer_tel = useSelector(cart.byer_tel);
  const coment = useSelector(cart.coment); 
  const byer_email = useSelector(cart.byer_email);
  const addres_city = useSelector(cart.addres_city);
  const addres = useSelector(cart.addres);
  const addres_index = useSelector(cart.addres_index);
  const addres_region = useSelector(cart.addres_region);
  const delivery_method = useSelector(cart.delivery_method);
  const pay_method = useSelector(cart.pay_method); 
  const insert = useSelector(cart.insert)
  const buy = useSelector(cart.buy);  
  // const width = useSelector(cart.width);
  // const material = useSelector(cart.material);
  const fileName = useSelector(cart.fileName);
  const msg_main_popup = useSelector(cart.msg_main_popup); 
  // const widthArr = ["90x180x10","90x180x15","120x180x10","120x180x15","150x180x10","150x180x15","180x180x10","180x180x15","210x240x10","210x240x15","240x240x10","240x240x15","240x420x10","240x420x15"];
  // const materialArr = ['Тротуарная','Керамогранитная','Гранитная'];
   
  let sumPrice = 0;
  let description = "";
 
  // buy.map((item,i) => {  
  //   sumPrice += Number(+`${item.price.split(' ')[0]}${item.price.split(' ')[1]}`) * item.count ; 
  //   description += `Название: ${item.title} ID: ${item.id},`
  //   return false;
  // });
 
  return (
    <div  style={ mobile ? { padding: '0px 10px' } : {} } className="cartBlockWrapper">
      {
        mobile ?
        <>
        <div className='mobileProductWrapper'>
          <ProductForm mobile={mobile} />
          <BuyerForm mobile={mobile} />
          <ComentForm />
          <LocationForm />
          <TransferForm />
          <PayForm />
          {
            msg_main_popup ? <div className='resultMssg'>{`${msg_main_popup}`}</div> : <></>
          }
          
          <div className='btnWrapperCart'>
           { isVisibleViget ? 
                <TinkoffView amount={(sumPrice/100) * 20} description={description} /> 
                : 
              <OrangeButton 
              margin="0px 0px 3px 0px" 
              disabled={ isToggleOn ? true :
                buy.length === 0 ? true : 
                //  pay_method === '' ? true : 
                //  delivery_method === '' ? true : 
                addres_region === '' ? true : 
                //  addres_index === '' ? true : 
                //  addres === '' ? true : 
                //  addres_city === '' ? true : 
                //  byer_email === '' ? true : 
                byer_tel === '' ? true : 
                byer_initial === '' ? true  : false 
                // byer_initial_dead === '' ? true 
                //  byer_date_birthday === '' ? true : 
                //  byer_date_dead === '' ? true 
  
            } 
              onClick={ async () => {  
                setIstoogle(true);    

                const reader = new FileReader(); 
                var statusEmail = false
                if(byer_file.name !== undefined) { 
                  reader.readAsDataURL(byer_file); 
                  reader.onloadend = async function () {   
                      statusEmail = await sendInfoServer({ 
                      byer_initial_dead, 
                      byer_date_birthday, 
                      byer_date_dead,
                      byer_file, 
                      install,
                      byer_initial,
                      byer_tel,
                      coment, 
                      byer_email,
                      addres_city,
                      addres,
                      addres_index,
                      addres_region,
                      delivery_method,
                      pay_method, 
                      buy, 
                      sizeStone: insert.sizes[insert.activeBtn].size,
                      sizeThumb: insert.sizes[insert.activeBtn].tumb,
                      // width: widthArr[width],
                      // material: materialArr[material],
                      fileName,
                      testImage:reader.result.replace(/^data:.+;base64,/, '')
                    },dispatch);  
                  }; 
                } else {
                    statusEmail = await sendInfoServer({ 
                    byer_initial_dead, 
                    byer_date_birthday, 
                    byer_date_dead,
                    byer_file, 
                    install,
                    byer_initial,
                    byer_tel,
                    coment, 
                    byer_email,
                    addres_city,
                    addres,
                    addres_index,
                    addres_region,
                    delivery_method,
                    pay_method, 
                    buy, 
                    sizeStone: insert.sizes[insert.activeBtn].size,
                    sizeThumb: insert.sizes[insert.activeBtn].tumb,
                    // width: widthArr[width],
                    // material: materialArr[material],
                    fileName,
                    testImage:undefined
                  },dispatch);  
                } 
    		        setIstoogle(statusEmail); 
                setTimeout(() => {
                  dispatch(setAddres(''));
                  dispatch(setBirthdayDate(''));
                  dispatch(setCity(''));
                  dispatch(setComent(''));
                  dispatch(setDeadDate(''));
                  dispatch(setEmail(''));
                  dispatch(setDeliveryMethod('transitandinstall'));
                  dispatch(setFile([])); 
                  dispatch(setIndex(''));
                  dispatch(setInitial(''));
                  dispatch(setInitialDead(''));
                  dispatch(setInsert({}));
                  dispatch(setInstall(false));
                  dispatch(setPayMethod('nal'));
                  dispatch(setRegion(''));
                  dispatch(setTel(''));
                  dispatch(setPopupMainMsg(''));
                  dispatch(setBuy([]));
                  dispatch(clearBuy());
                  navigate('/app/all');
                }, 3000);
                // setIsVisibleVite(statusEmail)  
            }} 
            text="Оформить" />
	}            
	     <OrangeButton 
              margin="0px 0px 3px 30px"
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
              text="Отменить"
            />
          </div>
        </div>
        </> :
        <>
          <div className='productWrapper'>
          <ProductForm mobile={mobile} />
          </div>
          <div className='infoWrapper'>
            <div className='infoLeftWrapper'>
            <BuyerForm mobile={mobile} />
              <ComentForm />
            </div>
            <div className='infoRightWrapper'>
              <LocationForm />
              <TransferForm />
              <PayForm />
            </div>
          </div>
          {
            msg_main_popup ? <div className='resultMssg'>{`${msg_main_popup}`}</div> : <></>
          }
          <div className='btnWrapperCart'> 
            { 
              isVisibleViget ? 
                <TinkoffView amount={(sumPrice/100) * 20} description={description} /> 
                : 
 <OrangeButton 
 margin="0px 0px 3px 0px" 
 disabled={ isToggleOn ? true :
   buy.length === 0 ? true : 
  //  pay_method === '' ? true : 
  //  delivery_method === '' ? true : 
   addres_region === '' ? true : 
  //  addres_index === '' ? true : 
  //  addres === '' ? true : 
  //  addres_city === '' ? true : 
  //  byer_email === '' ? true : 
   byer_tel === '' ? true : 
   byer_initial === '' ? true  : false 
   // byer_initial_dead === '' ? true 
  //  byer_date_birthday === '' ? true : 
  //  byer_date_dead === '' ? true 
  
 } 
 onClick={ async () => {  
  setIstoogle(true);    

  const reader = new FileReader(); 
  var statusEmail = false
  if(byer_file.name !== undefined) { 
    reader.readAsDataURL(byer_file); 
    reader.onloadend = async function () {   
        statusEmail = await sendInfoServer({ 
        byer_initial_dead, 
        byer_date_birthday, 
        byer_date_dead,
        byer_file, 
        install,
        byer_initial,
        byer_tel,
        coment, 
        byer_email,
        addres_city,
        addres,
        addres_index,
        addres_region,
        delivery_method,
        pay_method, 
        buy, 
        sizeStone: insert.sizes[insert.activeBtn].size,
        sizeThumb: insert.sizes[insert.activeBtn].tumb,
        // width: widthArr[width],
        // material: materialArr[material],
        fileName,
        testImage:reader.result.replace(/^data:.+;base64,/, '')
      },dispatch);  
    }; 
  } else {
      statusEmail = await sendInfoServer({ 
      byer_initial_dead, 
      byer_date_birthday, 
      byer_date_dead,
      byer_file, 
      install,
      byer_initial,
      byer_tel,
      coment, 
      byer_email,
      addres_city,
      addres,
      addres_index,
      addres_region,
      delivery_method,
      pay_method, 
      buy, 
      sizeStone: insert.sizes[insert.activeBtn].size,
      sizeThumb: insert.sizes[insert.activeBtn].tumb,
      // width: widthArr[width],
      // material: materialArr[material],
      fileName,
      testImage:undefined
    },dispatch);  
  } 
  setIstoogle(statusEmail); 
  setTimeout(() => {
    dispatch(setAddres(''));
    dispatch(setBirthdayDate(''));
    dispatch(setCity(''));
    dispatch(setComent(''));
    dispatch(setDeadDate(''));
    dispatch(setEmail(''));
    dispatch(setDeliveryMethod('transitandinstall'));
    dispatch(setFile([])); 
    dispatch(setIndex(''));
    dispatch(setInitial(''));
    dispatch(setInitialDead(''));
    dispatch(setInsert({}));
    dispatch(setInstall(false));
    dispatch(setPayMethod('nal'));
    dispatch(setRegion(''));
    dispatch(setTel(''));
    dispatch(setPopupMainMsg(''));
    dispatch(setBuy([]));
    dispatch(clearBuy());
    navigate('/app/all');
  }, 3000);
  // setIsVisibleVite(statusEmail)  
}} 
text="Оформить" />
            }
 
 <OrangeButton 
              margin="0px 0px 3px 30px"
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
              text="Отменить"
            />
          </div>
        </>
      }
    </div>
  );
}
 


