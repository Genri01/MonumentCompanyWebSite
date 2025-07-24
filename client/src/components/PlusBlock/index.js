import React from 'react';
import Title from '../Title';
import './style.css';

export default function PlusBlock({ mobile }) {
  return (
    <div className="plusItemWrapper">
       <div className='layout'></div>
      {/* Заголовок "Почему Выбирают Нас?" */}
      <Title size={22} margin="35px 0 20px 0" color="white" text="Почему Выбирают Нас?" z={2} />

      {/* Две колонки: слева — краткие пункты, справа — описания */}
      <div className={`plusColumnsContainer`}>
        {
          mobile ? 
          <div style={{flexDirection:'column', zIndex: 1}}> 
              <div className={`${mobile ? "mobilePlusItem" : "plusItem"}`}>Качество и долговечность:</div>
          
              <div className={`${mobile ? "mobileDesItem" : "desItem"}`}>
                Все наши памятники изготавливаются из лучших материалов, что обеспечивает их долговечность и стойкость к погодным условиям.
              </div>
                  <div className={`${mobile ? "mobilePlusItem" : "plusItem"}`}>Профессионализм:</div>
           
              <div className={`${mobile ? "mobileDesItem" : "desItem"}`}>
                Наша команда состоит из опытных мастеров, которые помогут вам на каждом этапе — от выбора до установки памятника.
              </div>
                 <div className={`${mobile ? "mobilePlusItem" : "plusItem"}`}>Доступные цены:</div>  
              <div className={`${mobile ? "mobileDesItem" : "desItem"}`}>
                Мы предлагаем конкурентоспособные цены на все наши товары и услуги, что позволяет каждому найти что-то подходящее в нашем каталоге.
              </div> 
          </div> : 
          <>
            <div className="plusLeftColumn">
              <div className={`${mobile ? "mobilePlusItem" : "plusItem"}`}>Качество и долговечность:</div>
              <div className={`${mobile ? "mobilePlusItem" : "plusItem"}`}>Профессионализм:</div>
              <div className={`${mobile ? "mobilePlusItem" : "plusItem"}`}>Доступные цены:</div>
            </div>
            <div className="plusRightColumn">
              <div className={`${mobile ? "mobileDesItem" : "desItem"}`}>
                Все наши памятники изготавливаются из лучших материалов, что обеспечивает их долговечность и стойкость к погодным условиям.
              </div>
              <div className={`${mobile ? "mobileDesItem" : "desItem"}`}>
                Наша команда состоит из опытных мастеров, которые помогут вам на каждом этапе — от выбора до установки памятника.
              </div>
              <div className={`${mobile ? "mobileDesItem" : "desItem"}`}>
                Мы предлагаем конкурентоспособные цены на все наши товары и услуги, что позволяет каждому найти что-то подходящее в нашем каталоге.
              </div>
            </div>
          </>
        }
      </div>

      {/* Блок "Как заказать?" с двумя абзацами */}
      <div className="plusZakazContainer">
        <Title size={22} margin="35px 0 20px 0" color="white" text="Как заказать?" z={2} />
        <div className={`${mobile ? "mobileZakazItem" : "zakazItem"}`}>
          Вы можете просмотреть наш каталог, чтобы найти идеальный памятник или мемориальный комплекс. Если у вас возникли вопросы или вам нужна помощь в выборе, не стесняйтесь обращаться к нашей команде. Мы с радостью предоставим бесплатную консультацию и поможем вам создать достойную память о ваших близких.
        </div>
        <div className={`${mobile ? "mobileZakazItem" : "zakazItem"}`} style={{ marginBottom: 60 }}>
          Память не должна забываться. Сделайте шаг навстречу и выберите памятник из нашего каталога, который станет символом вечной любви и уважения.
        </div>
      </div>
    </div>
  );
}
