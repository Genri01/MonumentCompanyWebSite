const userService = require('../services/users-service'); 
const config = require('config'); 
const nodemailer = require('nodemailer');

class UserController  {
  
  async sendConsult(req, res, next) {
    const { body } = req.body
    const { byer_consult_initial,byer_consult_tel, coment_consult } = body;

    if(byer_consult_tel !== '' && byer_consult_initial !== '') { 
      (async () => {

      let transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 25,
        secure: false,
        auth: {
          user: 'infoimperial01@yandex.ru',
          pass: '9186120232dfy',
        },
      })

      let result = await transporter.sendMail({
        from: `infoimperial01@yandex.ru`,
        to: `webdev170291@yandex.ru`,
        // to: `infoimperial01@gmail.com`,
        subject: `!! Запрос на обратную связь !!`,
        html: `Пользователь ${byer_consult_initial.bold()} запрашивает обратную связь по номеру телефона: ${byer_consult_tel.bold()}. Прислал сообщение с текстом: " ${coment_consult.bold()} "`,
      })
 
      transporter.verify(function (error, success) {
        try {
          res.status(200).send({msg: "Ожидайте в ближайшее время с вами свяжутся наши специалисты"})
        } catch (error) {
          res.status(200).send({msg: `Произошла ошибка: ${error}`})
        }
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
        }); 
      })(); 
    } else {
      res.status(200).send({msg: "Проверьте правильность заполненых данных :("})
    }
  }

  async sendInfo(req, res, next) { 
    const { body } = req.body;
  
    const {
      byer_initial_dead,
      byer_date_birthday,
      byer_date_dead,
      install,
      byer_initial,
      byer_tel,
      coment,
      byer_email,
      addres_city,
      addres,
      addres_index,
      addres_region,
      delivery_method,
      pay_method,
      buy,
      width,
      material,
      fileName
    } = body
    let zakazpam = 'Заказали памятники: '
    let infobuy = `${zakazpam.bold()}`
    var attach = [];
 
    buy.map((item) => {
      (async () => {
        attach.push({
          path: `data:image/png;base64,${item.img64}`
        });
        infobuy += `
        \n\n\n
        Название: ${item.title.bold()}, 
        ID памятника: ${item.id.bold()},
        Цена: ${item.price.bold()}
        \n\n\n
        `
      })();
      return false;
    })

    let method_delivery = ''

    switch (delivery_method) {
      case 'transit':
        method_delivery = 'Доставка транспортной кампанией (оплачивается заказчиком)'
        break;
      case 'transitandinstall':
        method_delivery = 'Доставка и установка'
        break;
      case 'maycop':
        method_delivery = 'Cамовывоз с производства. Адрес: посёлок Родники, улица Новая 12Б'
        break; 
      default:
        break;
    }
 
    let transporter = nodemailer.createTransport({
      host: 'smtp.timeweb.ru',
      port: 25,
      secure: false,
      auth: {
        user: 'denis@monumentcompany.ru',
        pass: 'Den.33647',
      },
    })

    let result = await transporter.sendMail({
      from: 'denis@monumentcompany.ru', 
      to: 'denis@monumentcompany.ru', 
      subject: `!! Информация о заказе !!`,
      html: `
      Покупатель ${byer_initial.bold()} с номером телефона: ${byer_tel.bold()} и email(почтой): ${byer_email.bold()}
      заказал для умершего ${byer_initial_dead.bold()} ${install ? ' с Установкой' : ' без Установки'}.
      Дата рождения умершего: ${byer_date_birthday.bold()} , Дата смерти умершего: ${byer_date_dead.bold()},
      \n\n\n
      ${infobuy}
      \n\n\n
      Комментарии к заказу:  " ${coment.bold()} ".
      Регион доставки: ${addres_region.bold()}
      Город доставки: ${addres_city.bold()}
      Адрес доставки: ${addres.bold()}
      Индекс: ${addres_index.bold()}
      Способ оплаты: ${pay_method === "nal" ? ' Наличными' : ' Безналичным расчётом'}
      Способ доставки: ${method_delivery}, 
      `,
      attachments: attach
    })

    transporter.verify(function (error, success) {

      try {
        res.status(200).send({msg: "Заказ успешно принят. Ожидайте в ближайшее время с вами свяжутся наши специалисты"})
      } catch (error) {
        res.status(400).send({msg: `Произошла ошибка: ${error}`})
      }
      
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    }); 
 
  // imageToBase64(`files/${fileName}`) // Path to the image
  // .then(
  //   (response) => {
  //     console.log(response,'response server');
  //     if(Object.getOwnPropertyNames(fileName).length > 0) {
  //       attach.push({
  //         path: `files/${fileName}`
  //       });
  //     }
  //     (async () => {  
  //       (async () => {  
        
  //         let transporter = nodemailer.createTransport({
  //           host: 'smtp.timeweb.ru',
  //           port: 25,
  //           secure: false,
  //           auth: {
  //             user: 'denis@monumentcompany.ru',
  //             pass: 'Den.33647',
  //           },
  //         })

  //         let result = await transporter.sendMail({
  //           from: 'denis@monumentcompany.ru', 
  //           to: 'denis@monumentcompany.ru', 
  //           subject: `!! Информация о заказе !!`,
  //           html: `
  //           Покупатель ${byer_initial.bold()} с номером телефона: ${byer_tel.bold()} и email(почтой): ${byer_email.bold()}
  //           заказал для умершего ${byer_initial_dead.bold()} ${install ? ' с Установкой' : ' без Установки'}.
  //           Дата рождения умершего: ${byer_date_birthday.bold()} , Дата смерти умершего: ${byer_date_dead.bold()},
  //           \n\n\n
  //           ${infobuy}
  //           \n\n\n
  //           Комментарии к заказу:  " ${coment.bold()} ".
  //           Регион доставки: ${addres_region.bold()}
  //           Город доставки: ${addres_city.bold()}
  //           Адрес доставки: ${addres.bold()}
  //           Индекс: ${addres_index.bold()}
  //           Способ оплаты: ${pay_method === "nal" ? ' Наличными' : ' Безналичным расчётом'}
  //           Способ доставки: ${method_delivery},
  //           Параметры ПЛИТ: ${width},
  //           Материал ПЛИТ: ${material},
  //           `,
  //           attachments: attach
  //         })

  //         transporter.verify(function (error, success) {

  //           try {
  //             res.status(200).send({msg: "Заказ успешно принят. Ожидайте в ближайшее время с вами свяжутся наши специалисты"})
  //           } catch (error) {
  //             res.status(200).send({msg: `Произошла ошибка: ${error}`})
  //           }
            
  //           if (error) {
  //             console.log(error);
  //           } else {
  //             console.log("Server is ready to take our messages");
  //           }
  //         }); 

  //       })(); 
  //     })() 
  //   })
  //   .catch(
  //     (error) => {
  //       console.log(error,'error IMG64'); // Logs an error if there was one
  //   })
  } 
}

module.exports = new UserController();
 