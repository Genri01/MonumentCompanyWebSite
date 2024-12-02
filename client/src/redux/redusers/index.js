import { combineReducers } from 'redux';
import footer from './footer'
import pages from './pages'
import app from './app'  

const rootReducer = combineReducers({
  app, 
  footer, 
  pages
});

export default rootReducer;