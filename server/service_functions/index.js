const moment = require('moment');  
const AdminDto = require('../dtos/admin-dto'); 
const UsersDto = require('../dtos/user-dto'); 
const ProfileDto = require('../dtos/profile-dto'); 
const products = require('../config/configproduct').products

async function noDubleElements(arr) {
  let arr_3 = arr.reduce((result, item) => {
    return result.includes(item) ? result : [... result, item];
}, []);
  return arr_3;
}
 
const getObjkey = (obj, objKey, innerKey) => {  // возвращает вложеную модель
 
  let result = false
  Object.keys(obj).map( item => {  
    if(innerKey) {
      if(item === objKey) {   
        Object.keys(obj[item]).map((item_inner_name) => {
          if(item_inner_name === innerKey) {   
            result = obj[item][item_inner_name]  
          } 
        })  
      } 
    } else {   
      if(item === objKey && obj[item] !== null && obj[item] !== undefined ) {  
        result = obj[item] 
      }
    }
  })   
  return result;
}
 
const removeEmpty = (obj,dto) => { //удаляет все undefined обьекты   
 
let objTmp = {}
  switch (dto) {
    case 'Admin_users':
      objTmp = new AdminDto(obj)
      break;   
    case 'UsersDto':  
      objTmp = new UsersDto(obj)
      break;  
    case 'Profiles':  
      objTmp = new ProfileDto(obj)
      break;  
  
    default:
      break;
  }
 
  let newObj = {};
 
  Object.keys(objTmp).forEach((key) => {  
    if (objTmp[key] === Object(objTmp[key])) newObj[key] = removeEmpty(objTmp[key]);
    else if (objTmp[key] !== undefined) newObj[key] = objTmp[key];
  }); 

  return newObj;
};


 
const getCategoryBtnBot = (products) => {
 
  const arrCat = products.map(product => ({
    text: product.text, 
    subcategory: product.monuments.map(monument => ({
      text: monument.subtext,
      action: monument.subtext
    })),
    action: product.text
  }));
    
  return arrCat;
}
 
const getCatologNumberItem = (itemNumber, answer) => {
 
 let number = Number(itemNumber) - 1
 let result = {}
 let err = false;

  products.map(product => { 
    if(product.text == answer[5]) {
      product.monuments.map((monument) => { 
        if(monument.subtext == answer[6]) {  
          if(('Горизонтальный' == answer[6]) && ('Мрамор' == answer[5])) { 
            if((Number(itemNumber) > 85) && (Number(itemNumber) < 110)) { 
              result = {
                ...monument.items[ Number(Number(itemNumber) - 86 == monument.items.length ? number : itemNumber) - 86 ], 
              }
            } else {
              err = true
            }
          } else {   
            if((Number(itemNumber) >= Number(monument.items[0].id)) && (Number(itemNumber) <= Number(monument.items[monument.items.length-1].id))) { 
              result = {
                ...monument.items[Number(number)], 
              } 
            } else { 
              err = true
            }
          } 
        }
      })
    } 
  });
 
  return err ? false : result;
}
 
module.exports = { 
  noDubleElements,
  getObjkey,
  getCategoryBtnBot,
  getCatologNumberItem,
  removeEmpty, 
} 
