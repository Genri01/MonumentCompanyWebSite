import React from 'react';

import Title from '../Title'; 
import './style.css';
import images from '../../assets/images';
import { telephone } from '../../config/index' 

function AnswerBlock(props) {
  const { mobile, icons} = props;
  const { phone_b,telega,tel } = images;
  let st = {fontSize: '10px'}
    return (
      <div id="answer" className='mobileAnswerBlock_container'> 
        <Title size={28} margin="20px 0px 30px 0px" text="Остались вопросы" /> 
        <div className='mobileAnswerWrapper'>
          <div className='mobileAnswerText'>
            Звоните с 08:00 до 18:00 или сделайте заказ в нашем Telegram Боте и Наш менеджер свяжется с Вами. 
          </div> 
          <div className='mobileAnswerButtons_container'> 
            {!mobile && icons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                title={icon.alt}
                className={`mobileAnswerButtons_Phone`}
                style={{ bottom: `${70 * (index + 1)}px` }}
              >
                <img src={icon.alt == 'Позвонить' ? phone_b : icon.src} alt={icon.alt} width={30} className="icon-imgs" /> 
                <div>{icon.alt}</div>
              </a>
            ))}    
            <a href={'https://t.me/MCshopingBot/mcshoping'} className='mobileAnswerButtons_Telegram'>
              <img src={telega} width={30} alt='ph' />
              <div>Наш бот</div>
            </a> 
            {
              mobile && <a href={'tel:+79184455468'} className='mobileAnswerButtons_Telegram'>
                <img src={phone_b} width={30} alt='ph' />
                <div>Позвонить</div>
              </a> 
            }
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
