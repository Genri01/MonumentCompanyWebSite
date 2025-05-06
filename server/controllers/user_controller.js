const userService = require('../services/users-service'); 
const config = require('config'); 
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const monument = require('moment')
const TGAPI = require ('../tg_api/index'); 

function withStrock(docpdf, item) { 
  return docpdf.widthOfString(item) + 10;
}

function average(nums) {
  return Math.ceil(nums.reduce((a, b) => (a + b)) / nums.length);
}

function percent(nums, per) {
  let caf = nums / 100;
  return Math.ceil(per * caf);
}
 
 function generationStringPdf(docpdf, txtLeft, txtRight, leftPosition, rightPosition, topPosition, topRightPosition, alignRight = false) {
   docpdf.font(path.join(__dirname, '../files/ubuntu.ttf')).text(txtLeft, leftPosition, topPosition);
   docpdf.font(path.join(__dirname, '../files/ubuntu.ttf')).text(txtRight, rightPosition, topPosition, alignRight ? {
     align: 'right',
     underline: true
   } : {
     underline: true
   });
 }



class UserController  {
  
  async sendConsult(req, res, next) {
    const { body } = req.body
    const {  byer_consult_initial, byer_consult_tel, coment_consult, buy  } = body;
 
    if(byer_consult_tel !== '' && byer_consult_initial !== '') { 
      (async () => {

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
        subject: `!! Запрос на обратную связь !!`,
        html: buy.length > 0 ? `Пользователь ${byer_consult_initial.bold()} запрашивает обратную связь по номеру телефона: <a href="tel:${byer_consult_tel}"> ${ byer_consult_tel.bold() }. </a> Прислал сообщение с текстом: " ${coment_consult.bold()} ". Заинтерисован памятником с названием: ${buy[0].title.bold()}, ID памятника: ${buy[0].id.bold()}, Цена памятника: ${buy[0].price.bold()} рублей.` : `Пользователь ${byer_consult_initial.bold()} запрашивает обратную связь по номеру телефона:  <a href="tel:${byer_consult_tel}"> ${ byer_consult_tel.bold() }. </a> Прислал сообщение с текстом: " ${coment_consult.bold()} "`,
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
    let namefiletelega = ``
    var attach = [];
   
    let method_delivery = ''

    switch (delivery_method) {
      case 'transit':
        method_delivery = 'Доставка транспортной кампанией'
        break;
      case 'transitandinstall':
        method_delivery = 'Доставка и установка'
        break;
      case 'maycop':
        method_delivery = 'Cамовывоз с производства.'
        break; 
      default:
        break;
    }

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
        namefiletelega = `${item.title}_${item.id}`
      })();
      return false;
    })

    const docpdf = new PDFDocument({
      size: 'A4',
      layout: 'landscape',
      margin: 30,
    });

    docpdf.pipe(fs.createWriteStream(path.join(__dirname, `../files/${namefiletelega}.pdf`))); /// name file save

    var arrAnqu = [
      {
        quests : [ 
          `ФИО заказчика:`,
          `Телефон заказчика:`,
          `Памятник:`,
          `Номер по каталогу:`, 
          `Цена изделия:`,
          `Способ доставки:`,
          `Способ оплаты:`, 
          `Коментарии к заказу:`,
          `Почта:`, 
          `Адрес:`, 
        ],
        answers : [ 
          byer_initial,
          byer_tel,
          buy[0].title,
          buy[0].id,
          buy[0].price,
          method_delivery,
          pay_method == "nal" ? ' Наличными' : ' Безналичным расчётом', 
          coment == '' ? 'Не указано' : coment,
          byer_email == '' ? 'Не указано' : byer_email,
          `${addres_index} ${addres_region} ${addres_city} ${addres}` 
        ]
      }
    ];
     
      const withPage = percent(docpdf.page.width, 100)
      const heightPage = percent(docpdf.page.height, 25)
  
      const withPage2 = percent(docpdf.page.width, 33, 3)
      const heightPage2 = percent(docpdf.page.height, 100)
  
      var options2 = {
        width: withPage2,
        align: 'center'
      };

      docpdf.fontSize(16).font(path.join(__dirname, '../files/ubuntu.ttf')).text('Место под эскиз:', withPage2 / 2 - docpdf.widthOfString('Место под эскиз:', options2) / 2, (heightPage + 30));
  
      docpdf.image((`${attach[0].path}`), withPage2 / 2 - 240 / 2, heightPage2 - 360 - docpdf.page.margins.left, {
        width: 240,
        height: 360
      });
  
      docpdf.image(path.join(__dirname, '../files/logo.png'), 25, 40, {
        width: 90
      });
      
      docpdf.fontSize(33).font(path.join(__dirname, '../files/ubuntu.ttf')).text(`Monument`, docpdf.widthOfString('Monument') - 10, 40);
      docpdf.fontSize(33).font(path.join(__dirname, '../files/ubuntu.ttf')).text(`company`, docpdf.widthOfString('Monument') - 10, 80);
  
      docpdf.fontSize(16).text(`ФИО умершего`, percent(docpdf.page.width, 50), docpdf.page.margins.left, {
        width: percent(docpdf.page.width, 25),
        align: 'center'
      })

      docpdf.fontSize(16).text(`${byer_initial_dead == '' ? 'Не указано' : byer_initial_dead}`, {
        width: percent(docpdf.page.width, 25),
        align: 'center'
      })

      docpdf.fontSize(16).text('Дата рождения: ', {
        width: percent(docpdf.page.width, 25),
        align: 'center'
      })

      docpdf.fontSize(16).text(`${byer_date_birthday == '' ? 'Не указано' : byer_date_birthday}`, {
        width: percent(docpdf.page.width, 25),
        align: 'center'
      })

      docpdf.fontSize(16).text('Дата смерти: ', {
        width: percent(docpdf.page.width, 25),
        align: 'center'
      })

      docpdf.fontSize(16).text(`${byer_date_dead == '' ? 'Не указано' : byer_date_dead}`, {
        width: percent(docpdf.page.width, 25),
        align: 'center'
      }) 

      arrAnqu.map((item) => {  
        return item.quests.map((it, inx) => { 
          generationStringPdf(docpdf,
            `${it} `,
            `  ${item.answers[inx]} `,
            335, 500,
            200 + (inx * 23));
        })
      });

      docpdf.fontSize(16).font(path.join(__dirname, '../files/ubuntu.ttf')).text(`Дата : ${monument().format('DD -MM -YYYY')}`, 700, heightPage2 - docpdf.page.margins.left * 2,1).fontSize(16);

      docpdf.end();


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

    transporter.verify(async function (error, success) {

      try { 
    
          if (error) {
            console.log(error);
          } else {
    
            setTimeout(async() => {
              const CHANNEL_ID = '-1002681932730';        
              const CHAT_ID = '245880107';       
              await TGAPI.sendPdfToUser(CHANNEL_ID, path.join(__dirname, `../files/${namefiletelega}.pdf`), `Заказ: ${monument().format('DD -MM -YYYY')}`)
                .catch(console.error);
    
              await fs.promises.unlink(path.join(__dirname,`../files/${namefiletelega}.pdf`),(err) => {
                if (err) throw err;  
              }); 
    
            }, 5000)
            console.log("Server is ready to take our messages");
          }
          res.status(200).send({msg: "Заказ успешно принят. Ожидайте в ближайшее время с вами свяжутся наши специалисты"})
      } catch (error) {
        res.status(400).send({msg: `Произошла ошибка: ${error}`})
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
 