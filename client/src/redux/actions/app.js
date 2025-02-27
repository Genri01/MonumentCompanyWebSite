import ActionTypes from '../constants'; 

export function setMobileMod(mode) {
  return {
    type: ActionTypes.APP_MOBILE,
    payload: mode
  }
}

export function setBotAppMod(mode) {
  return {
    type: ActionTypes.APP_BOT,
    payload: mode
  }
}

export function setCardsProducts(active) {  
  return {
    type: ActionTypes.CARDS_PRODUCTS,
    payload: active
  }
}
 
export function change_page(page) { 
  return {
    type: ActionTypes.APP_PAGES_SCREEN,
    payload: page
  }
} 

export function visible_footer(visible) {  
  return {
    type: ActionTypes.FOOTER_HIDDEN,
    payload: visible
  }
} 
 