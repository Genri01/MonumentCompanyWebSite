import React from 'react';
import Title from '../Title';
import './style.css' 


export default function PlusBlock(props) {
  const { mobile } = props;
  const about_plus = [
    { plus: 'Гарантию 3 года по договору' },
    { plus: 'Наличный и безналичный расчёт' },
    { plus: 'Дополнительные скидки пенсионерам' },
  ]
  return (
    <div className="plusItemWrapper">
      <div className='layout'></div> 
        <Title size={22} margin="35px 0px 0px 0px" color="white" text="Заказывая у нас вы получаете :" z={2}/>
        <div style={{borderColor:'white',zIndex: 9}} className="underlineTextMonument"></div>
        <div style={{zIndex: 9}} className="mobilePlusRightBlock">
          {
            about_plus.map((item,i) => (<div key={i+'1p'} className={`${mobile ? "mobilePlusItem" : "plusItem"}`}>{ item.plus }</div>))
          }
        </div>  
    </div>
  );
}
 