import React from 'react';
import useScript from '../../hooks/useScript'
import './style.css';

function TinkoffView(props) {
 
    useScript("https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js");
     
    const { amount, description } = props;
    let price = amount
    if(amount == undefined) { price = 0 }
    const rawHTML = `
    <form class="payform-tinkoff" name="payform-tinkoff" onsubmit="pay(this); return false;">
    <input class="payform-tinkoff-row" type="hidden" name="terminalkey" value="DEMO1708068633191">
    <input class="payform-tinkoff-row" type="hidden" name="frame" value="false">
    <input class="payform-tinkoff-row" type="hidden" name="language" value="ru">
    <input class="payform-tinkoff-row" type="text" placeholder="Сумма заказа" value="${price}" name="amount" required>
    <input class="payform-tinkoff-row" type="hidden" placeholder="Номер заказа" name="order">
    <input class="payform-tinkoff-row" type="text" placeholder="Описание заказа" value="${description}" name="description" required>
    <input class="payform-tinkoff-row" type="text" placeholder="ФИО плательщика" name="name" required>
    <input class="payform-tinkoff-row" type="email" placeholder="E-mail" name="email" required>
    <input class="payform-tinkoff-row" type="tel" placeholder="Контактный телефон" name="phone" required>
    <input class="payform-tinkoff-row payform-tinkoff-btn" type="submit" value="Оплатить">
    </form> 
    `;
 
    return ( 
      <div>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div> 
    );
}

export default TinkoffView;
