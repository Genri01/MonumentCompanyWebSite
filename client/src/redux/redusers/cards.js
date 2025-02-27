import { products } from '../../config';
import ActionTypes from '../constants'; 
 
const initialState = { 
  products,  
};

export default function cards(state = initialState, { type, payload }) { 
  switch (type) {
    case ActionTypes.CARDS_PRODUCTS:
      return {
        ...state,
        products: payload
      };     
    case ActionTypes.TEST:
      return {
        ...state,
        test: payload
      };     
    default:
      return state;
  }
}