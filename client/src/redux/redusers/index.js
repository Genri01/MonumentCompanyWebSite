import { combineReducers } from 'redux';
import footer from './footer'
import pages from './pages'
import app from './app'  
import cart from './cart'  
import cards from './cards'  

const rootReducer = combineReducers({
  app, 
  footer, 
  cart,
  cards,
  pages
});

export default rootReducer;