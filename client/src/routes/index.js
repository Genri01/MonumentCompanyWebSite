import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import MainScreen from '../Screens/MainScreen';  
import ShopScreen from '../Screens/ShopScreen';  
import CatalogScreen from '../Screens/CatalogScreen';  
 
const Main = (props) => {
 
  const { mobile } = props; 

  return (
    <main>
      <Routes>
      <Route exact path='/' element={<MainScreen mobile={mobile} />}/>
      <Route exact path='/app' element={<CatalogScreen mobile={mobile} />}/>
      {/* <Route exact path='/app' element={<ShopScreen mobile={mobile} />}/> */}
        {/* <Route path='/catalog/:category' element={<CatalogScreen mobile={mobile} />}/>   */}
      </Routes>
    </main>
  )
} 

export default Main;