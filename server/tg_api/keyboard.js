
const { Markup } = require('telegraf'); 

const keyboard_monument_size = Markup.inlineKeyboard([
  Markup.button.callback("100*50*8", "q_0_0"),
  Markup.button.callback("120*60*8", "q_0_1"),
  Markup.button.callback("Другой", "q_0_2"),
]);
 
 
 
const inline_keyboard_main = [
  [ 
    {
      text: '⤴️ Проверить подписку ⤴️',
      // url: 'https://t.me/BeautyDoctorNSK_bot?start=raffle',
      callback_data: 'check_sub'
    } 
  ], 
];

const inline_keyboard_offer = [
  [
    {
      text: 'Правовая информация', 
      // url: 'https://telegra.ph/Dogovor-Oferta-10-09-2',
      callback_data: 'info'
    },
  ]
];

const inline_keyboard_event = [
  [
    {
      text: 'Хочу воспользоваться акцией', 
      url: 'https://wa.me/79139169290?text=Здравствуйте,%20Хочу%20воспользоваться%20акцией.',  
      // url: 'tg://msg?text=Хочу воспользоваться акцией&to=bogdashkina154',
      // url: 'tg://msg?text=Хочу воспользоваться акцией&to=+79139169290',
      // url: 'tg://msg?text=Этотестовоесообщение&to=+79139169290', 
      // url: 'tg://resolve?domain=+79139169290', 
      // url: 'https://t.me/+79139169290?text=Хочу воспользоваться акцией',
      // callback_data: 'c'
    },  
  ],
  [ 
    {
      text: 'Хочу онлайн консультацию', 
      // url: 'https://t.me/+79139169290',
      url: 'https://wa.me/79139169290?text=Здравствуйте,%20Хочу%20онлайн%20консультацию.',
      // callback_data: 'info'
    },
  ]
];
 
module.exports = {
  keyboard_monument_size, 
}
 