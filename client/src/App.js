import React, { useEffect } from 'react';
import Main from './routes/index';
import { QRCode } from 'antd'
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { change_page, setMobileMod,setBotAppMod } from './redux/actions/app';
import { pages, app } from './redux/selectors';
import HeaderMenu from './components/HeaderMenu';
import './App.css';

function App() {
  const dispatch = useDispatch();  

  const page = useSelector(pages.page); 
  const mobile = useSelector(app.mobile); 
  const bot_App = useSelector(app.app); 
  
  useEffect(() => {
    // if(localStorage.getItem('page') === null) {  
    //   localStorage.setItem('page','main'); 
    // }   
    // dispatch(change_page(localStorage.getItem('page')));
    dispatch(setMobileMod(isMobile)); 
  },[]);
 
  return (
    <div className="App">  
        { 
        bot_App ? <></> : <HeaderMenu  
          mobile={mobile}  
          page={page} 
          onClick={(e) => {  
            // localStorage.setItem('page',e.target.id);
            dispatch(change_page(e.target.id));
          }}   
        />
        }
        <Main mobile={mobile} /> 
    </div>
        // <div className='desktop_error'>
        //   <div>Переходи в Telegram!</div>
        //   <div style={{margin: '50px 0px'}}>Отсканируй QR code и наш бот поможет тебе подобрать памятник!</div>
        //   <QRCode
        //     value={'https://t.me/MCshopingBot/mcshoping'}
        //     bgColor="white"
        //     style={{
        //       marginBottom: 16,
        //     }}
        //   />
        // </div>  
  );
}

export default App;
