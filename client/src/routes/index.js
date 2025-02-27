import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import MainScreen from '../Screens/MainScreen';  
import ShopScreen from '../Screens/ShopScreen';  
import CatalogScreen from '../Screens/CatalogScreen';  
import CartScreen from '../Screens/CartScreen';  
 
const  Main = (props) => {
 
  const { mobile } = props; 

  return (
    <main>
      <Routes>
        <Route exact path='/' element={<MainScreen mobile={mobile} />}/>
        <Route exact path='/app/:category' element={<CatalogScreen mobile={mobile} />}/> 
        <Route path='/shop/:category/:id' element={<ShopScreen mobile={mobile} />}/> 
        <Route path='/cart' element={<CartScreen mobile={mobile} />}/> 
      </Routes>
    </main>
  )
} 

export default Main;