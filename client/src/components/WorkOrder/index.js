import React from 'react'; 
import OrangeButton from '../OrangeButton';
import ItemOrder from '../ItemOrder';
import Title from '../Title'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  
import './style.css';
import images from '../../assets/images';

export default function WorkOrder(props) {
  const { mobile } = props;
  const { proiz_1, proiz_2, proiz_3, proiz_4, proiz_5 } = images;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="workOrderWrapper"> 
      <Title size={22} margin="40px 0px 0px 0px" text="Порядок выполнения работ" under />
      <div className="mobileWorkOrderItemWrapper">
        {
          [
            {title: 'Заготавливаем камень',img:proiz_1},
            {title: 'Режем фаску',img:proiz_2},
            {title: 'Полируем камень',img:proiz_3},
            {title: 'Выполняем художественные работы',img:proiz_4},
            {title: 'Наносим гравировку',img:proiz_5}, 
          ].map((item, i) => (<ItemOrder key={i} mobile={mobile} title={item.title} back={item.img} />))
        } 
      </div>
      <div className="workOrderBtnWrapper">
      <OrangeButton onClick={() => { navigate('/app/all'); }} text="Заказать" />
      </div> 
    </div>
  );
}
