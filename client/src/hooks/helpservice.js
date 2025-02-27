
export const decimal = (n) => 
new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 2 }).format(n);

  
function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  } 
  return true;
}

export function isEmptyObject(value) {

  if (value == null) {
    // null or undefined
    return false;
  }
  if (typeof value !== 'object') {
    // boolean, number, string, function, etc.
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  // consider `Object.create(null)`, commonly used as a safe map
  // before `Map` support, an empty object as well as `{}`
 
  if (proto !== null && proto !== Object.prototype) {
    return false;
  }
  return isEmpty(value);
}

export const getIOSSaveDateObj = (dateString) => {
 
  if(dateString.indexOf('-') > 0) {
    
      var arr = dateString.split(/[- :]/); 
      var date = new Date(arr[0], arr[1]-1, arr[2]);  
  } else {

      var arr = dateString.split(/[. :]/);
      var date = new Date(arr[0], arr[1]-1, arr[2]);   
  }

  return date;
}

export const getCategoryChank = (cards, category) => {
  let text = '';
  let category_obj_all = [];
  let category_obj = [];
  let prod = [];
 
  switch (category) {
    case 'all':
      text = 'Все';
      break; 
    case 'gmramor':
      text = 'Мраморные Горизонтальные';
      break; 
    case 'vmramor':
      text = 'Мраморные Вертикальные';
      break;  
    case 'chpu':
      text = 'Гранитные Резные';
      break;
    case 'children':
      text = 'Гранитные Детские';
      break;  
    case 'vgranit':
      text = 'Гранитные Вертикальные';
      break; 
    case 'ggranit':
      text = 'Гранитные Горизонтальные';
      break;  
    case '3d':
      text = '3d работы';
      break;   
    case 'works':
      text = 'Наши работы';
      break;   
    case 'balls':
      text = 'Шары';
      break;   
    case 'fences':
      text = 'Заборы';
      break;   
    case 'granitetille':
      text = 'Гранитная плитка';
      break;   
    case 'lamps':
      text = 'Лампы';
      break;   
    case 'pavingtile':
      text = 'Тротуарная плитка';
      break;   
    case 'porcelaintile':
      text = 'Керамогранит';
      break;   
    case 'vases':
      text = 'Вазы';
      break;   
    case 'other':
      text = 'Прочее';
      break;     
    default:
      break;
  }
  
  if(category === 'vmramor' ||
    category === 'gmramor' ||
    category === 'chpu' ||
    category === 'children' ||
    category === 'vgranit' ||
    category === 'ggranit' ||
    category === '3d' ||
    category === 'access' ||
    category === 'works' ||
    category === 'balls' ||
    category === 'fences' ||
    category === 'granitetille' ||
    category === 'lamps' ||
    category === 'pavingtile' ||
    category === 'porcelaintile' ||
    category === 'vases' ||
    category === 'other' ) { 
    cards.map((item,i) => {   
      item.monuments.map((chank) => { 
       return  chank.subcategory === category ? category_obj.push(...chank.items) : false 
      }) 
    });
  } else { 
    cards.map((item,i) => {   
      item.monuments.map((chank) => (category_obj_all.push(...chank.items)))  
    });
  } 
  
  category_obj.length === 0 ? prod.push(...category_obj_all) : prod.push(...category_obj);
  
  return { array: prod, text };
}
 
// returns the cookie with the given name,
// or undefined if not found
export function getCookie(name) {
  console.log(name);
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

export function setCookie(name, value, attributes = {}) {

  attributes = {
    path: '/',
    // add other defaults here if necessary
    ...attributes
  };

  if (attributes.expires instanceof Date) {
    attributes.expires = attributes.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let attributeKey in attributes) {
    updatedCookie += "; " + attributeKey;
    let attributeValue = attributes[attributeKey];
    if (attributeValue !== true) {
      updatedCookie += "=" + attributeValue;
    }
  }

  document.cookie = updatedCookie;
}