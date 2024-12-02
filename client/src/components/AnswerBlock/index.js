import React from 'react';
import Answer from '../../components/Answer';
import Title from '../Title'; 
import './style.css';
import images from '../../assets/images';
 
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
            <div className='mobileAnswerButtons_Phone'>
              <div onClick={()=>{console.log('!@#')}} className='mobileAnswerWrapperButtons_Phone'>
                <img src={phone} width={20} alt='ph' /> 
              </div>
              <div>Позвонить</div>
            </div>
            <div className='mobileAnswerButtons_Telegram'>
              <img src={telega} width={36} alt='ph' />
              <div>Бот</div>
            </div>
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
