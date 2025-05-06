import ActionTypes from '../constants'; 
 
const initialState = {
  mobile: true, 
  app: true, 
  visible_popup: false
};

export default function app(state = initialState, { type, payload }) { 
  switch (type) {
    case ActionTypes.APP_MOBILE:
      return {
        ...state,
        mobile: payload
      };   
    case ActionTypes.APP_BOT:
      return {
        ...state,
        app: payload
      };   
    case ActionTypes.VISIBLE_POPUP:
      return {
        ...state,
        visible_popup: payload
      };   
    default:
      return state;
  }
}