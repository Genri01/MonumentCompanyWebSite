import React from 'react';

import Title from '../Title'; 
import './style.css';
import images from '../../assets/images';
import { telephone } from '../../config/index' 

function AnswerBlock(props) {
  const { mobile } = props;
  const { phone,telega,tel } = images;
  let st = {fontSize: '10px'}
    return (
      <div id="answer" className='mobileAnswerBlock_container'> 
        <Title size={28} margin="20px 0px 30px 0px" text="Остались вопросы" /> 
        <div className='mobileAnswerWrapper'>
          <div className='mobileAnswerText'>
            Звоните с 08:00 до 18:00 или сделайте заказ в нашем Telegram Боте и Наш менеджер свяжется с Вами. 
          </div> 
          <div className='mobileAnswerButtons_container'> 
            <a href={`tel:${telephone}`} className='mobileAnswerButtons_Phone'>
              <div className='mobileAnswerWrapperButtons_Phone'>
                <img src={phone} width={20} alt='ph' /> 
              </div>
              <div>Позвонить</div>
            </a> 
            <a href={'https://t.me/MCshopingBot/mcshoping'} className='mobileAnswerButtons_Telegram'>
              <img src={telega} width={36} alt='ph' />
              <div>Бот</div>
            </a> 
          </div>
          <div className='mobileAnswerImg_container'>
            <div className='blockName'>
              <div className='blocked'>Менеджер Денис</div>
            </div>
            <img src={tel} alt='ph' />
          </div>
        </div> 
      </div>
    );
}

export default AnswerBlock;
