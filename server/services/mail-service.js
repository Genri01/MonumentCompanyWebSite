const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path'); 
class MailService {
  // sendAcnivationMail() {   
  //   (async () => {  
  //   let transporter = nodemailer.createTransport({
  //     host: 'smtp.yandex.ru',
  //     port: 25,
  //     secure: false,
  //     auth: {
  //       user: 'infoimperial01@yandex.ru',
  //       pass: '9186120232dfy',
  //     },
  //   })

  //   let result = await transporter.sendMail({
  //     from: `infoimperial01@yandex.ru`,
  //     to: `denis@monumentcompany.ru`,
  //     // to: `infoimperial01@gmail.com`,
  //     subject:`Активация аккаунта imMemoryForever`,
  //     html: `Для активации аккаунта пройдите по ссылке ` 
  //   })

  //   transporter.verify(function (error, success) { 
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Server is ready to take our messages");
  //     }
  //     });
  //   })();  
  // } 
 
  // sendConsultMail(res, byer_consult_initial, byer_consult_tel, coment_consult) {  
  //   if(byer_consult_tel !== '' && byer_consult_initial !== '') { 
  //     (async () => {
  //       let transporter = nodemailer.createTransport({
  //         host: 'smtp.yandex.ru',
  //         port: 25,
  //         secure: false,
  //         auth: {
  //           user: 'infoimperial01@yandex.ru',
  //           pass: '9186120232dfy',
  //         },
  //       })

  //       await transporter.sendMail({
  //         from: `infoimperial01@yandex.ru`,
  //         to: byer_consult_initial, 
  //         subject: `!! Запрос на обратную связь !!`,
  //         html: `Пользователь ${byer_consult_initial.bold()} запрашивает обратную связь по номеру телефона: ${byer_consult_tel.bold()}. Прислал сообщение с текстом: " ${coment_consult.bold()} "`,
  //       })

  //       transporter.verify(function (error, success) {  
  //         if (error) {
  //           res.status(200).send({msg: `Произошла ошибка: ${error}`}) 
  //         } else {
  //           res.status(200).send({msg: "Ожидайте в ближайшее время с вами свяжутся наши специалисты"}) 
  //         }
  //       });
  //   })();  
  // } else {
  //   res.status(200).send({msg: "Проверьте правильность заполненых данных :("})
  // }
  // }  
  
  sendBlankOnMail(ctx, files, name) {  
    (async () => {  
      var date = new Date().toJSON().slice(0,10).replace(/-/g,'/').split('/');
     
      date = `${date[2]}/${date[1]}/${date[0]}`

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
         //to: 'test-20nwx7qkl@srv1.mail-tester.com', 
        subject: `${`Заявка_${date}`}`,
        text: `${`Фотографии к заявке_${name}`}`,
        attachments: files
      })

      transporter.verify(async function (error, success) {   
        await ctx.sendMessage(`${ ctx.from.username || ctx.from.first_name || ctx.from.last_name }!\n ${error ? 'Фаил не отправился,произошла ошибка:(': 'Я так же отправил фаил на почту.'}`).then(({ message_id }) => { 
            ctx.session.msgIds.push(message_id);  
            setTimeout(async() => {   

              await ctx.deleteMessages([message_id]);   
              // await ctx.deleteMessages([message_id,ctx.session.msgIds[1],ctx.session.msgIds[0].split('_')[0]]);   
              ctx.session.repeat = true;
         
              fs.writeFile(path.join(__dirname,'../files/userlist.json'),JSON.stringify([]), async(err) => {
                if(!err) {  
                }
              });   

              await fs.promises.readdir(path.join(__dirname,`../photos`)).then((f) => { 
                Promise.all(f.map(e => fs.promises.unlink(path.join(__dirname,`../photos/${e}`),(err) => {
                  if (err) throw err; 
                })))
              })
              
              await fs.promises.unlink(path.join(__dirname,`../files/${name}.docx`),(err) => {
                if (err) throw err;  
              }); 
              
              await fs.promises.unlink(path.join(__dirname,`../files/${name}.pdf`),(err) => {
                if (err) throw err;  
              }); 
            
            },3000)  
        });  
      });
    })();  
  } 
 
}

module.exports = new MailService();
