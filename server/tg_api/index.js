 
const { Telegraf, Markup, session, Context } = require('telegraf'); 
const Calendar = require('telegram-inline-calendar');
const { message } = require('telegraf/filters')
const { reply, fork } = Telegraf;    
const { Stream } = require('stream');
const fs = require('fs');
const path = require('path');  
const docx = require("docx"); 
const mailService = require('../services/mail-service');
const { type } = require('os');
require('dotenv').config(); 
const docxConverter = require('docx-pdf');
const PDFDocument = require('pdfkit'); 
const monument = require('moment')
const libre = require('libreoffice-convert'); 
libre.convertAsync = require('util').promisify(libre.convert);
 

process.env.NTBA_FIX_319 = 1;
process.env.NTBA_FIX_350 = 1;
 
fs.mkdirSync("./photos", { recursive: true });
 
const TGAPI = {
  initialBotBlank: botBlankStart,
  initialBotShoping: botShopingStart,
}
   
// const WebAppUrl = 'https://candid-granita-dc7078.netlify.app'
const WebAppUrl = 'https://t.me/MCshopingBot/mcshoping'


Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  }
});

const isEmptyObject = (obj) => {
  for (var i in obj) { 
      if (obj.hasOwnProperty(i)) {
          return false;
      }
  }
  return true;
}
  
function toEscapeMSg(str) {
  return str
      .replace(/_/gi, "\\_")
      .replace(/-/gi, "\\-")
      // .replace("~", "\\~")
      // .replace(/`/gi, "\\`")
      // .replace(/\./g, "\\.");
}
async function checkProfile(ctx) {
  try { 
    const { session, from: { id }} = ctx; 
    let data = await fileRead('../files/userlist.json');
    var usersList = (data != '') ? JSON.parse(data) : [];    
    let isUser = usersList.filter((item) => item.id == id); 
    if(isUser.length == 0) {
      usersList.push(session); 
      fs.writeFile(path.join(__dirname,'../files/userlist.json'),JSON.stringify(usersList), async(err) => {});
    } else {
      ctx.session = isUser[0]; 
    }  
  } catch (error) {
    console.log(error,'error');
    await errorMsgEnter(ctx,`Ой, кажется произошла ошибка ((`);
  } 
}

async function updateProfile(ctx) {
  const { from: { id }} = ctx; 
  try { 
    let data = await fileRead('../files/userlist.json');  
    var usersList = (data != '') ? JSON.parse(data) : [];  
    let isUser = usersList.filter((item) => item.id == id);  
    if(isUser.length != 0) { 
      let newUserlist = usersList.filter((item) => item.id != id);   
      fs.writeFile(path.join(__dirname,'../files/userlist.json'),JSON.stringify([...newUserlist, ctx.session]), async(err) => {}); 
    } else {
      // console.log('isuser0');
    }  
  } catch (error) {
    console.log(error,'error');
    await ctx.sendMessage(`Ой, кажется произошла ошибка ((`);  
  } 
}

async function questionNext (ctx,calendar) { 

  const { session: { questionId, questions, individualQuestions, sideQuestion }} = ctx; 

  // if((questionId == 2 && individualQuestions)) { 
  //   return await calendar.startNavCalendar(ctx.update.message);
  // }

  // if((questionId == 3 && individualQuestions)) {  
  //   return await calendar.startNavCalendar(ctx.callbackQuery.message);
  // }

  return await ctx.reply(`${sideQuestion ? questions[+individualQuestions][questionId].sideQuestion : questions[+individualQuestions][questionId].question}`,
    Markup.inlineKeyboard(
      sideQuestion ? [] : questions[+individualQuestions][questionId].answer.map(({ text, action }) => (Markup.button.callback(text, action)))
     )).then(async({ message_id }) => { 
      addIdMsg(ctx, message_id); 
    });  
}

async function checkSideQuestion (ctx, data) {    
  data == "Да" ? ctx.session.sideQuestion = true : ctx.session.sideQuestion = false;
}
  
async function addIdMsg(ctx, msgId) {   
  ctx.session.msgIds.push(msgId);
  await updateProfile(ctx);    
  // console.log(ctx.session.msgIds,',было addIdMsg')
}

async function removeIdMsg(ctx, msgId) {    
  ctx.session.msgIds = ctx.session.msgIds.filter((id) => !msgId.includes(id)); 
  await updateProfile(ctx);  
  // console.log(ctx.session.msgIds,'стало removeIdMsg') 
}
 
async function majorDeletedMsg(ctx) {
  const { msgId } = ctx;    
  await deleteMessage(ctx,[msgId, msgId + 1]);   
}

async function minorDeletedMsg(ctx) {   
  const { msgId, session: { msgIds } } = ctx;  
  await deleteMessage(ctx,[msgId, msgIds[msgIds.length - 2]]);    
}
  
async function deleteMessage(ctx, arrDel) {  
  await ctx.deleteMessages(arrDel);
  await removeIdMsg(ctx, arrDel);
}
 
async function registrationAnswer(ctx, costom_text) {   
  const { session: { questionId, individualQuestions, deadcount, answer }} = ctx; 
  if(individualQuestions) {  
    ctx.session.answer[1][Math.abs(deadcount - answer[1].length)][questionId] = costom_text ? costom_text : ctx.update.message.text; 
  } else {
    ctx.session.answer[0].push(costom_text ? costom_text : ctx.update.message.text);  
  } 
  ctx.session.questionId++;  
  await updateProfile(ctx);  
}
  
async function errorMsgEnter(ctx, text, time = 2000) {  
  await ctx.sendMessage(`${ name(ctx) }! ${text}`).then(({ message_id }) => { 
    addIdMsg(ctx, message_id); 
  }); 
  setTimeout(async() => {
    await majorDeletedMsg(ctx);
  },time)
}
 
async function helloMsgEnter(ctx, name) { 
  const { msgId }= ctx;

  await ctx.sendMessage(`Приветствую, ${ name }!`).then(({ message_id }) => { 
    addIdMsg(ctx, message_id); 
  });  

  setTimeout(async() => {   
    await ctx.deleteMessages([msgId + 1]);
    await removeIdMsg(ctx, [msgId + 1]);  
  }, 1000); 
  
}

async function removeMsgBeforeStart(ctx) {  
 var { session: { msgIds }} = ctx;
  let indexStart = 0; 
  let reverseArr = [...msgIds];  
  if(reverseArr.length > 2) {
    reverseArr.reverse(); 
    for(let [index, value] of reverseArr.entries()) { 
      if(typeof(value) == 'string') { 
        indexStart = index++; // ?
        break; 
      }
    };

    let removed = reverseArr.splice(indexStart); 
    reverseArr.reverse(); 

    for(const [index, value] of removed.entries()) { 
      if(typeof(value) == 'string') { 
        removed[index] = +value.split('_')[0];
      }
    }; 

    ctx.deleteMessages(removed);   
    ctx.session.msgIds = reverseArr;  
  }
}
 
async function changeTextCalendar(calendar, txt) { 
  // calendar.options.custom_start_msg = txt;
  // await calendar.addCustomStartMsg();
}
  
async function saveFileToServer(fromFieldId, toPath, ctx, bot ) {  
  const link = await bot.telegram.getFileLink(fromFieldId);
  const res = await fetch(link.toString()); 
  const { body } = res; 
  if(body != undefined && body != null) {
    await body.pipeTo(Stream.Writable.toWeb(fs.createWriteStream(toPath))); 
    await minorDeletedMsg(ctx);  
    await registrationAnswer(ctx,`${toPath.split("/")[toPath.split("/").length - 1]}`); 
  } else { 
    await minorDeletedMsg(ctx);
    await errorMsgEnter(ctx, "Фото не сохранилось попробуйте отправить опять!");
  }
};

async function writeToServer(buffer,ctx) {   
  return  new Promise((resolve, reject) => {  
    try { 
      fs.writeFile(path.join(__dirname,`../files/${ctx.session.answer[0].length == 16 ? ctx.session.answer[0][14] : ctx.session.answer[0][13]}.docx`), buffer, async function(error) {
        if(error) {  
          console.log(error);
          return reject(false)
        }
        console.log("Файл успешно записан");
        ctx.session.lock = true;
        resolve(true);  
      }); 
    } catch (error) {
      reject(false);
      console.log('error Запись прервалась',error); 
    } 
  })  
}

async function ConvertDocToPdf(inputfile, outputfile) {
 
  const docxBuf = await fileRead(inputfile); 

  let pdfBuf = await libre.convertAsync(docxBuf, '.pdf', undefined);
 
    fs.writeFile(outputfile, pdfBuf, async function(error) {
      if(error) {  
        console.log(error); 
      }

      console.log("Файл pdf успешно записан"); 
    });   
}
 
async function sendToBot(ctx) {
  try {  
    let objFile = {}
    if(ctx.session.answer[0].length == 16) { 
      objFile = {  
        source: fs.createReadStream(path.join(__dirname,`../files/${ctx.session.answer[0][14]}.pdf`)),
        filename: `${ctx.session.answer[0][14]}.pdf`
      }
    }
  
    if(ctx.session.answer[0].length == 15) {
      objFile = {  
        source: fs.createReadStream(path.join(__dirname,`../files/${ctx.session.answer[0][13]}.pdf`)),
        filename: `${ctx.session.answer[0][13]}.pdf`
      }
    } 
    
    await ctx.sendDocument(objFile);
  } catch (error) {
    console.log('error Сообщение не отправленно',error); 
  }
}
 
function converPTtoCM(cm) {
  return cm * 567
}
   
function preloadResult(arr,length) {  
  let tmpArr = [...arr];
 
  let quests = [
    'Номер по каталогу:','Размер cтеллы:','Вид цветника:','Размер плиты:',
    'Цветы на памятник:','Эпитафия:','Установка:','Доставка:',
    'Цена изделия:','Сумма задатка:', 'Сумма установки:','ФИО заказчика:', 'Телефон заказчика:'  
  ]; 

  tmpArr.forEach((item,ind,a) => { 
    if(typeof(item) == "object") {  
      a[ind] = item.need == "Нет" ? item.need : item.description;
    } else {
      if(item.indexOf('.jpg') !== -1) {  
        let removedwg = tmpArr.splice(ind,1);  
      }
    }
  }) 
   
  let removedw = tmpArr.splice(1,2); 
 
  tmpArr = tmpArr.map((item) => { 
    if(item == 'Открытый') {
      const inOf = tmpArr.indexOf("");
      if(inOf > -1) {
        let removedw = tmpArr.splice(inOf,1); 
      }
      let removedq = quests.splice(3,1); 
    } 
    return item
  });
    
  if(tmpArr.length == 12) {
    
    if(tmpArr[5] == 'Нет' && tmpArr[6] == 'Нет') { 
   
      if(quests.length == 12) { 
        let removedtq = quests.splice(9,1); 
      } else if(quests.length == 13) {
        let removedtq = quests.splice(10,1); 
      }
    }   
  }
 
  if(tmpArr.length == 13) { 
    if(tmpArr[quests.length == 13 ? 7: 6] != 'Нет') { 
      const inOfq = quests.indexOf("Сумма установки:");
      if(inOfq > -1) {
        quests[inOfq]="Сумма доставки:"; 
      }
    }
  }
 
  return [{
    quests,
    answers: tmpArr
  }]
}

function clearSession(ctx) {
  const { from: { id } } = ctx;
  ctx.session = {
    id: id,
    questions: [
      [
        {
          question: "Номер по каталогу",
          answer: []
        },
        {
          question: "Количество умерших?",
          answer: [{ text: "Один",action:"Один" },{ text : "Несколько",action: "Несколько"}]
        },
        {
          question: "Выберите размер стеллы или введите размер вручную в формате: д/ш/в",
          answer: [{ text: "100/50/8",action:"100/50/8" },{ text : "120/60/8",action:"120/60/8"}]
        },
        {
          question: "Добавьте фото памятника",
          answer: []
        },
        {
          question: "Вид цветника",
          answer: [{ text: "Открытый",action:"Открытый" },{ text : "Закрытый",action:"Закрытый"}],
          sideQuestion: "Введите размер плиты",
        }, 
        {
          question: "Цветы на памятник",
          answer: [{ text: "Да",action: "Да" },{ text : "Нет",action:"Нет"}],
          sideQuestion: "Какой вид цветов?",  
        }, 
        {
          question: "Эпитафия",
          answer: [{ text: "Да",action:"Да" },{ text : "Нет",action:"Нет"}],
          sideQuestion: "Напиши текст Эпитафии", 
        },  
        {
          question: "Требуется установка?",
          answer: [{ text: "Да",action:"Да" },{ text : "Нет",action:"Нет"}],
          sideQuestion: "Какой вид установки?", 
        }, 
        {
          question: "Доставка",
          answer: [{ text: "Да",action:"Да" },{ text : "Нет",action:"Нет"}],
          sideQuestion: "Напиши адрес доставки",
        },   
        {
          question: "Цена изделия",
          answer: []
        }, 
        {
          question: "Сумма задатка",
          answer: []
        }, 
        {
          question: "Сумма установки",
          answer: []
        }, 
        {
          question: "ФИО заказчика",
          answer: []
        },
        {
          question: "Телефон заказчика",
          answer: [{ text : "Пропустить",action:"Пропустить"}], 
          sideQuestion: "Введите телефон",
        }
      ],
      [ 
        {
          question: "ФИО умершего",
          answer: []
        },
        {
          question: "Добавьте фото умершего",
          answer: [{ text : "Пропустить",action:"Пропустить"}],  
        },
        {
          question: "Дата рождения в формате дд.мм.гггг",
          answer: []
        },
        {
          question: "Дата смерти в формате дд.мм.гггг",
          answer: []
        },
      ] 
    ],
    lock: false,
    doublephoto: false,
    repeat: false,
    individualQuestions: false,
    questionId: 0, 
    deadcount: 0, 
    answer: [[],[]],  
    msgIds: [], 
    photoPath: [], 
  } 
}

function clearSessionShop(ctx) {
  const { from: { id } } = ctx;
  ctx.session = {
    id: id,  
    msgIds: [],  
  } 
}

function name(ctx) {
  const { from: { username, first_name, last_name } } = ctx;
  return username || first_name || last_name;
}
  
async function checkLockChat(ctx) {
  const { session: { lock } } = ctx; 
  if(lock) await errorMsgEnter(ctx,`Я же просил НЕ ЖАТЬ!!\nТы мешаешь мне формировать документ!\nПросто жди я скажу когда всё!`,5000);
  return lock;
}
 
async function deleteBeforeMessage(ctx) { 
  const { session: { msgIds } } = ctx;  
  // let tmp = msgIds.filter((item) => typeof(item) != 'string'); 
  // if(tmp.length != 0) {
  //   await ctx.deleteMessages(tmp);
  //   ctx.session.msgIds = [];  
  // }
  let i = 1;
  while(true) {
    try {
      await ctx.deleteMessage(ctx.message.message_id - i++);
    } catch(e) {
      break;
    }
  }
}
 
async function questionNextAfterUP(ctx) { 
  await updateProfile(ctx); 
  await questionNext(ctx);
  await updateProfile(ctx); 
}
 
async function onRepeatBot(ctx) { 
  const {msgId, session: { repeat }} = ctx  
  if(repeat) {
    // await clearSession(ctx);
    await ctx.reply(`Сгенерировать ещё?`,
    Markup.inlineKeyboard(
      [{ text: "Создать заявку", action:"restart" }].map(({ text, action }) => (Markup.button.callback(text, action)))
     )).then(({ message_id }) => { 
      addIdMsg(ctx, message_id);
    });   
    setTimeout(async()=>{ 
      await deleteMessage(ctx,[msgId]); 
    },1000);
  }

  return repeat;
}
  
function textEmptyLine(text, breaking, space) {
  const { TextRun, UnderlineType } = docx; 
  
  let spaceArr = Array(space).fill('\t'); 
  return [ 
    new TextRun({ 
      text,
      bold: true,
      break: breaking ,
      size: 24
    }), 
    new TextRun({ 
      text:  spaceArr.join(''),
      underline: {
        type: space == 0 ? UnderlineType.NONE : UnderlineType.SINGLE
      }, 
      size: 24  
    }),
  ]  
}
  
function ImageBehindDocument(imgPath, width, height, offsetX, offsetY) {
  const { ImageRun } = docx; 
 
  return new ImageRun({
    type: "png",
    data: fs.readFileSync(path.join(__dirname,`${imgPath}`)),
    transformation: {
      width,
      height, 
    }, 
    floating: {
      behindDocument: true,
      horizontalPosition: {  
        offset: offsetX,  
      },
      verticalPosition: {  
        offset: offsetY, 
      },
    }, 
  })
}
 
function splitDate(data) {
  let spliter = data[2];

  if(spliter == '.') {
    return data['2'].split('.');  
  } else if(spliter == '-') {
    return data['2'].split('-');  
  } else if(spliter == ' ') {
    return data['2'].split(' ');  
  }
}

// function handleUserForString(mock) {
//   const {   Paragraph,  
//     TableCell,  BorderStyle,TextRun 
//   } = docx; 
  
//   mock[1].map((user, userindex) => { 
  
//     return generationFioString(user, userindex, mock[0][2])
    
//   }).map(item => {
//     console.log(item);
//     // new TableCell({  
//     //   borders: {
//     //     top: {
//     //         style: BorderStyle.NIL, 
//     //     },
//     //     bottom: {
//     //         style: BorderStyle.NIL, 
//     //     },
//     //     left: {
//     //         style: BorderStyle.NIL, 
//     //     },
//     //     right: {
//     //         style: BorderStyle.NIL, 
//     //     }
//     //   },  
//     //   children: [
//     //     new Paragraph({  
//     //       heading: HeadingLevel.HEADING_3,   
//     //       children: item,
//     //     }),    
//     //   ], 
//     // })
//   })
 
// }

function handleUserForString(ctx) {
  const { Document, Packer, Paragraph, ImageRun, Table, TableRow,
    TableCell, TextRun, PageOrientation, HeightRule, BorderStyle,
    TabStopType,AlignmentType, UnderlineType, WidthType, HeadingLevel,VerticalAlign,
  } = docx; 

let lengthArr = ctx.session.answer[1].length;
 
return ctx.session.answer[1].flatMap((user, userindex) => { 

  let stringFio = `${lengthArr == 1 ? `ФИО умершего`
    : lengthArr == 2 ? `ФИО умершего${(userindex + 1 == 1) ? ' слева' : ' справа'}` : 
    lengthArr == 3 ? `ФИО умершего${(userindex + 1 == 1) ? ' слева' : (userindex + 1 == 2) ? ' по середине' : ' справа'}` : `ФИО ${`${(userindex + 1)}-го умершего`}` }`
 
  let stringArrName = `${user["0"]}`;

  let stringArrDateLive = `${user["2"]}`; 
  
  let stringArrDateDead = `${user["3"]}`;
 
  // ctx.session.photoPath.push({
  //   filename: `${user['1']}`,
  //   path: path.join(__dirname,`../photos/${user['1']}`)
  // });

    return [
      new TableCell({ 
      // columnSpan: lengthArr,
      // width: { size: ((100 / lengthArr) - 10) ,type: WidthType.PERCENTAGE },
      verticalAlign: VerticalAlign.CENTER, 
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children:  [  
            new TextRun({
              text: ` ${stringFio}: `, 
              bold: true,
              size: 24,  
            }),
            new TextRun({
              text: ` ${stringArrName}. `,
              underline: {
                type: UnderlineType.SINGLE
              },  
              size: 24, 
              break: 1   
            }),
            new TextRun({
              text: ` Дата рождения: `, 
              bold: true,
              size: 24, 
              break: 1 
            }),
            new TextRun({
              text: ` ${stringArrDateLive}. `,
              underline: {
                type: UnderlineType.SINGLE
              },  
              size: 24,  
              break: 1 
            }),
            new TextRun({
              text: ` Дата смерти: `, 
              bold: true,
              size: 24,  
              break: 1
            }),
            new TextRun({
              text: ` ${stringArrDateDead}. `,
              underline: {
                type: UnderlineType.SINGLE
              },  
              size: 24,  
              break: 1 
            }), 
          ],
        })
      ],
    })
  ] 
 
}) 


console.log(flat,'@#!');

  // reduce((prev, curr) => { 
  //   console.log('reduce')
  //   return prev.concat(curr) 
  // }, [])
}

function handlePhotoUserName(ctx, text) {
  let test =  ctx.session.answer[1].flatMap((user, userindex) => {  
    user['1'] = `${text}_${user['1']}`
  }) 
}
 
function withStrock(docpdf,item) {
  console.log(item,'item');
  return docpdf.widthOfString(item) + 10;
}

function average(nums) {
  return Math.ceil(nums.reduce((a, b) => (a + b)) / nums.length);
}

function percent(nums, per) {
  let caf = nums / 100;
  return Math.ceil(per * caf);
}
 
function getCorrection(resArr) { 

  console.log(resArr.length,' reslengh');

  let res = { startLine: 0,lock: true , w:130, h:40, wl: 80, hl: 80 };

  if(resArr.length == 4) {
    if(average(resArr) < 205 && average(resArr) > 200) {
      console.log('20');
      res = { startLine: 20,lock: true , w:10, h:10, wl: 60, hl: 60 };
    } else if(average(resArr) < 200 && average(resArr) > 195) {
      console.log('30');
      res = { startLine: 30,lock: true , w:10, h:10, wl: 60, hl: 60 };
    } else if(average(resArr) <= 195 && average(resArr) > 175) {
      console.log('70');
      res = { startLine: 70,lock: true , w:10, h:10, wl: 60, hl: 60 };
    } else if(average(resArr) <= 175 && average(resArr) > 150) {
      console.log('140');
      res = { startLine: 140,lock: false , w:40, h:20, wl: 60, hl: 60 };
    }
  }

  if(resArr.length == 3) {
    if(average(resArr) < 220 && average(resArr) > 210) {
      console.log('150');
      res = { startLine: 150,lock: false , w:40, h:10, wl: 80, hl: 80 };
    } else if(average(resArr) <= 210 && average(resArr) > 195) {
      console.log('200');
      res = { startLine: 200,lock: false , w:70, h:10, wl: 80, hl: 80 };
    } else if(average(resArr) <= 195 && average(resArr) > 150) {
      console.log('290');
      res = { startLine: 240,lock: false , w:130, h:10, wl: 80, hl: 80 };
    }
    res = { startLine: 150,lock: false , w:40, h:10, wl: 80, hl: 80 };
  }
  
  if(resArr.length == 2) { 
    res = { startLine: 400,lock: false , w:130, h:10, wl: 80, hl: 80 }; 
  } 
  
  if(resArr.length == 1) { 
    res = { startLine: 500,lock: false , w:130, h:10, wl: 80, hl: 80 }; 
  } 

  // Каспаровна Капиталина Витальевна 
 
  return res;
}
 
// async function generationBlankPdf(mock) { 
async function generationBlankPdf(ctx) { 
 
// let id = mock[0].id //del
// let ctx = {
//   session: {
//     answer: mock[0].answer
//   }
// } //del
 


  // mock[0].answer  ///del


  const {  from: { id },
    session: { answer } 
  } = ctx; 
 
  // const answers = preloadResult(mock[0].answer[0],mock[0].answer[0].length ); //del
  const answers = preloadResult(answer[0]);
 
  const lengthArr = ctx.session.answer[1].length

  let stringArrFio = ctx.session.answer[1].map((item, ind) => {    
 
    if(lengthArr == 4) { 
      return `ФИО ${`${(ind + 1)}-го умершего`}`;
    }
 
    if(lengthArr == 3) {
      return `ФИО умершего${ind + 1 == 1 ? ' слева' :  ind + 1 == 2 ? ' по середине' : ' справа'}`;
    }
 
    if(lengthArr == 2) {
      return `ФИО умершего${ind + 1 == 1 ? ' слева' : ' справа'}`;
    }
 
    if(lengthArr == 1) {
      return `ФИО умершего`;
    }
 
  }); 

  let stringArrName = ctx.session.answer[1].map((item, ind) => {    
    return `${item["0"]}`     
  });
  
  let stringArrDateLive = ctx.session.answer[1].map((item, ind) => {  
    // return `${item["1"]}`;
    return `${item["2"]}`;
  });

  let stringArrDateDead = ctx.session.answer[1].map((item, ind) => {  
    // return `${item["2"]}`;
    return `${item["3"]}`;
  });
 
  const docpdf = new PDFDocument({
    size: 'A4',
    layout : 'landscape',
    margin: 30, 
  });
 

  if(ctx.session.answer[0].length == 16) {
    docpdf.pipe(fs.createWriteStream(path.join(__dirname,`../files/${ctx.session.answer[0][14]}.pdf`)));
  }

  if(ctx.session.answer[0].length == 15) {
    docpdf.pipe(fs.createWriteStream(path.join(__dirname,`../files/${ctx.session.answer[0][13]}.pdf`)));
  }
 
  const withPage = percent(docpdf.page.width, 100)
  const heightPage = percent(docpdf.page.height, 25)
   
  const withPage2 = percent(docpdf.page.width, 33,3)
  const heightPage2 = percent(docpdf.page.height, 100)
 
  var options2 = { width: withPage2, align:'center'};
  
  docpdf.fontSize(16).font(path.join(__dirname,'../files/ubuntu.ttf')).text('Место под эскиз:', withPage2 / 2 - docpdf.widthOfString('Место под эскиз:', options2) / 2, (heightPage + 30));
 
  // docpdf.image(path.join(__dirname,'../files/background.png'),380,100,{width: 355, height: 355}); 
  docpdf.image(path.join(__dirname,`../photos/monument_${id}.jpg`), withPage2 / 2 - 240/2, heightPage2 - 360 - docpdf.page.margins.left,{width: 240, height: 360});
  
  console.log(ctx.session.answer[1],'ctx.session.answer[1]');
  let coordinateWithArr = ctx.session.answer[1].map((item) => Math.ceil(withStrock(docpdf,item[0])))
 
  let correct = getCorrection(coordinateWithArr)
  
  if(!correct.lock) {
    if(ctx.session.answer[1].length == 1) { 
      docpdf.image(path.join(__dirname,'../files/logo.png'), 25, 40 ,{ width: 90 });
      docpdf.fontSize(33).font(path.join(__dirname,'../files/ubuntu.ttf')).text(`Monument`,docpdf.widthOfString('Monument') - 10, 40 );
      docpdf.fontSize(33).font(path.join(__dirname,'../files/ubuntu.ttf')).text(`company`,docpdf.widthOfString('Monument') - 10, 80 );
    }

    if(ctx.session.answer[1].length == 2) { 
      docpdf.image(path.join(__dirname,'../files/logo.png'), 25, 40 ,{ width: 90 });
      docpdf.fontSize(33).font(path.join(__dirname,'../files/ubuntu.ttf')).text(`Monument`,docpdf.widthOfString('Monument') - 10, 40 );
      docpdf.fontSize(33).font(path.join(__dirname,'../files/ubuntu.ttf')).text(`company`,docpdf.widthOfString('Monument') - 10, 80 );
    }

    if(ctx.session.answer[1].length == 3) { 
      docpdf.image(path.join(__dirname,'../files/logo.png'), 15, 40 ,{ width: 60 });
      docpdf.fontSize(28).font(path.join(__dirname,'../files/ubuntu.ttf')).text(`Monument`,docpdf.widthOfString('Monument') - 35, 40 );
      docpdf.fontSize(28).font(path.join(__dirname,'../files/ubuntu.ttf')).text(`company`,docpdf.widthOfString('Monument') - 35 , 65 );
    } 
  }
 
  ctx.session.answer[1].map((item, ind)=> { 
  
    let offset = lengthArr == 2 ? percent(docpdf.page.width, 33) * (ind + 1) : lengthArr == 1 ? percent(docpdf.page.width, 50) :  percent(docpdf.page.width, 25) * ((ind + (4 - lengthArr)))
   
    docpdf.fontSize(16).text(stringArrFio[ind], offset, docpdf.page.margins.left, {  
      width: percent(docpdf.page.width, 25),
      align: 'center'  
    })

    docpdf.fontSize(16).text(stringArrName[ind], {  
      width: percent(docpdf.page.width, 25),
      align: 'center'  
    })

    docpdf.fontSize(16).text('Дата рождения: ', {  
      width: percent(docpdf.page.width, 25),
      align: 'center'  
    })

    docpdf.fontSize(16).text(stringArrDateLive[ind], {  
      width: percent(docpdf.page.width, 25),
      align: 'center'  
    })

    docpdf.fontSize(16).text('Дата смерти: ', {  
      width: percent(docpdf.page.width, 25),
      align: 'center'  
    })

    docpdf.fontSize(16).text(stringArrDateDead[ind],{  
      width: percent(docpdf.page.width, 25),
      align: 'center'  
    })
  })
  
  answers.map((item) => {   
    console.log(item); 
    return item.quests.map((it,inx) => {  
      generationStringPdf(docpdf,
        `${it} `,
        `  ${item.answers[inx]} `,
        335,500,  
        200 +(inx * 23));  
    })
  });
 
  docpdf.fontSize(16).font(path.join(__dirname,'../files/ubuntu.ttf')).text(`Дата : ${monument().format('DD -MM -YYYY')}`, 335, heightPage2 - docpdf.page.margins.left*3).fontSize(16);
  // docpdf.fontSize(16).font(path.join(__dirname,'../files/ubuntu.ttf')).text(`М.П`, withPage - docpdf.page.margins.left * 4, heightPage2 - docpdf.page.margins.left*3 );
  docpdf.end();
}
 
// async function generationBlankDocx(mock, ctx) { 
async function generationBlankDocx(ctx) { 
  const {  from: { id },
    session: { answer } 
  } = ctx; 

  // console.log(mock);
 
  // let id = mock[0].id //del

  // ctx.session.answer =  mock[0].answer //dell

  // const quests = preloadResult(mock[0].answer[0],mock[0].answer[0].length )[0].quests; //del
  // const answers = preloadResult(mock[0].answer[0],mock[0].answer[0].length )[0].answers; //del
 
  const { Document, Packer, Paragraph, ImageRun, Table, TableRow,
    TableCell, TextRun, PageOrientation, HeightRule, BorderStyle,
    TabStopType,AlignmentType, UnderlineType, WidthType, HeadingLevel,VerticalAlign,
  } = docx; 

  // await generationBlankPdf(mock); //del
  await generationBlankPdf(ctx);

  const quests = preloadResult(answer[0])[0].quests;
  const answers = preloadResult(answer[0])[0].answers;
  
  const skipStroke = quests.length == 13 ? 9 : 10;

  const pageHeight = converPTtoCM(17.3);

  const rowHeightlogo = pageHeight / 4;
  const rowHeightText = converPTtoCM(0.6);
  const fontSizes = 20;
 
  await ctx.sendMessage(`${ name(ctx) }!\nАнкета заполнена, большое спасибо!\nФормирую документ...\nЭто может занять несколько минут!\nНичего не жми `).then(({ message_id }) => { 
    addIdMsg(ctx, message_id);
    ctx.session.lock = true;
  }); 
 
let logoContainer  = ctx.session.answer[1].length == 4 ?
new TableRow({
  width: { size: 100, type: WidthType.PERCENTAGE }, 
    height: { 
      value: (converPTtoCM(19)/4),
      rule: HeightRule.ATLEAST, 
    },
    height: { 
      value: rowHeightlogo,
      rule: HeightRule.ATLEAST, 
    },
    children: [      
      ...handleUserForString(ctx)  
    ],
}) :  new TableRow({
  height: { 
    value: rowHeightlogo,
    rule: HeightRule.ATLEAST, 
  },
    children: [
      new TableCell({
        // columnSpan: ctx.session.answer[1].length,
        width: { size: 24 ,type: WidthType.PERCENTAGE },
        verticalAlign: VerticalAlign.CENTER,
        
        children: [ 
          new Paragraph({
            children: [ 
              ImageBehindDocument('../files/logo.png', 100, 100, 150000, 40000)
            ],
          }), 
          new Paragraph({
            tabStops: [
              {
                type: TabStopType.END,
                position: 0,
              },
            ],
            alignment: AlignmentType.END,
            children: [ 
              new TextRun({  
                text: "Monument\t",
                size: '50', 
              }),
              new TextRun({  
                text: "Company\t",
                size: '50', 
                break: 1  
              }) 
            ],
          })
        ],
      }),   
      ...handleUserForString(ctx)  
    ],
})
 
  const table = new Table({  
    width: { size: 100, type: WidthType.PERCENTAGE }, 
    alignment: AlignmentType.CENTER,
    rows: [
      logoContainer,
      new TableRow({
        height: { 
          value: rowHeightText,
          rule: HeightRule.ATLEAST, 
        },
          children: [
            new TableCell({
              width: { size: 20, type: WidthType.PERCENTAGE }, 
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 1,
              children: [     
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [ 
                    new TextRun({ 
                      text: "Место для эскиза:",
                      // break: 1, 
                    }),
                  ],
                })   
              ],
            }),
            new TableCell({
              width: { size: 80, type: WidthType.PERCENTAGE }, 
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: ctx.session.answer[1].length,
              children: [     
                // new Paragraph({
                //   alignment: AlignmentType.CENTER,
                //   children: [ 
                //     new TextRun({ 
                //       text: "Место для эскиза:",
                //       // break: 1, 
                //     }),
                //   ],
                // })   
              ],
            }),
          ],
      }),
      new TableRow({
        width: { size: 100, type: WidthType.PERCENTAGE }, 
        height: { 
          value: pageHeight - rowHeightlogo - rowHeightText,
          rule: HeightRule.ATLEAST, 
        },
          children: [
            new TableCell({
              width: { size: 25, type: WidthType.PERCENTAGE }, 
              // columnSpan:3,
              children: [
                new Paragraph({ 
                  alignment: AlignmentType.CENTER,
                  children: [ 
                    new ImageRun({
                      type: "jpg",
                      data: fs.readFileSync(path.join(__dirname,`../photos/monument_${id}.jpg`)),
                      transformation: {
                        width: 340,  
                        height: 520,
                      }, 
                    }),
                  ],
                }),
              ],
            }),  
            new TableCell({
              width: { size: 75, type: WidthType.PERCENTAGE }, 
              verticalAlign: VerticalAlign.CENTER,
              columnSpan:ctx.session.answer[1].length,
              children: [ 
                new Paragraph({   
                  children: [ 
                    ...quests.flatMap(((item, index) => {    
                      return [  
                        new TextRun({
                          text: ` \t${quests[index]} `,
                          bold: true, 
                          size: fontSizes,
                          break: index != 0 ? 2 : 0 
                        }), 
                        new TextRun({
                          text: (index != skipStroke - 2) ? `\t  ${answers[index]}\t  ` : `\t${answers[index]}\t\t`, 
                          underline: {
                            type: UnderlineType.SINGLE
                          },  
                          size: fontSizes , 
                        })
                      ]
                    })),    
                    new TextRun({
                      text: ` \tДата : ${monument().format('DD - MM - YYYY')}`,
                      bold: true, 
                      size: fontSizes,
                      break: 2
                    }),  
                    // ...textEmptyLine(`\t\t\t\t\t\t\t\t\t\t\t\tМП `,2,0), 
                  ],  
                  tabStops: [
                    {
                      type: TabStopType.START,
                      position: 1000,
                    },
                  ],
                 
                }),
                new Paragraph({
                  children: [ 
                    ImageBehindDocument('../files/background.png', 450, 500, 1200000, 1000)
                  ],
                }) 
              ],
            }),
          ],
      })  
    ]
  });
 
  const doc = new Document({
    sections: [{ 
      properties: { 
        page: {
          size: {
            orientation: PageOrientation.LANDSCAPE,
          },
          margin: {
            top: converPTtoCM(0.5),
            right: converPTtoCM(0),
            bottom: converPTtoCM(1),
            left: converPTtoCM(0),
          },
        },  
      },
      children: [table],
    }], 
    styles: {
      default: { 
        document: {
          run: { 
            font: "Arial",
          }, 
        },
      }
    }
  });

  Packer.toBuffer(doc).then(async(buffer) => {   
    await writeToServer(buffer, ctx); 
   
    setTimeout(async() => { 
      await sendToBot(ctx); 
      await majorDeletedMsg(ctx);   
      const pathArr = []; 
 
      ctx.session.photoPath.map((item) => { 
        if(item.filename != '*') {
          pathArr.push({
            filename: item.filename,
            path: item.path
          }); 
        }
      })
 
      let objFile = {}
      let objFilePdf = {}

      if(ctx.session.answer[0].length == 16) { 
        objFile = {
          filename: `${ctx.session.answer[0][14]}.docx`,
          path: path.join(__dirname,`../files/${ctx.session.answer[0][14]}.docx`),
        }
        objFilePdf = {
          filename: `${ctx.session.answer[0][14]}.pdf`,
          path: path.join(__dirname,`../files/${ctx.session.answer[0][14]}.pdf`),
        }
      }
    
      if(ctx.session.answer[0].length == 15) {
        objFile = {
          filename: `${ctx.session.answer[0][13]}.docx`,
          path: path.join(__dirname,`../files/${ctx.session.answer[0][13]}.docx`),
        }
        objFilePdf = {
          filename: `${ctx.session.answer[0][13]}.pdf`,
          path: path.join(__dirname,`../files/${ctx.session.answer[0][13]}.pdf`),
        }
      } 
 
      pathArr.push(objFile, objFilePdf);
 
      await mailService.sendBlankOnMail(ctx, pathArr, ctx.session.answer[0].length == 16 ? ctx.session.answer[0][14] : ctx.session.answer[0][13]);

    },2000);
  }); 
}
 
function generationStringPdf(docpdf, txtLeft, txtRight, leftPosition, rightPosition, topPosition, topRightPosition, alignRight = false) {
  docpdf.font(path.join(__dirname,'../files/ubuntu.ttf')).text(txtLeft,leftPosition, topPosition); 
  docpdf.font(path.join(__dirname,'../files/ubuntu.ttf')).text(txtRight, rightPosition, topPosition, alignRight ? { align: 'right', underline: true } : { underline: true });
}
  
 function fileRead(filePath) {  
  return  new Promise((resolve, reject) => { 
    fs.readFile(path.join(__dirname,`${ filePath }`), async (err, data) => { 
      if(!err) { 
      let data_string = data.toString();  
      resolve(data_string);
      } else { reject(err)}});  
  }) 
}
 
async function botBlankStart() {
  const bot = new Telegraf(process.env.TGBOT_API_KEY); // Токен бота
  
  // async function sendtest(bot,ctx,chatId, command) {
  //   try {

  //     const update = {
  //       message: {
  //         // text: `/${command}`,
  //         text: `/start`,
  //         from: {
  //           id: chatId,
  //           is_bot: false,   
  //           first_name: name(ctx),
  //           language_code: 'ru'
  //         },
  //         chat: {
  //           id: chatId,
  //           type: 'private'
  //         }, 
  //         date: Date.now()
  //       }
  //     }

  //     await bot.handleUpdate(update);
  //     // await bot.telegram.sendMessage(chatId, text,{ reply_parameters:{ allow_sending_without_reply: true }}); 
  //     // await bot.telegram.forwardMessage(chatId, text,{ reply_parameters:{ allow_sending_without_reply: true }}); 
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const calendar = new Calendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'ru',
    close_calendar: true,   
    bot_api: 'telegraf'
  }); // Конектим календарь

  bot.use(session()); // Конектим сессии
  // bot.use(Telegraf.log()); // Консолим входящие сообщение
   
  bot.use ( async (ctx,next) => { // Длительность ответа
    const start = new Date ();
    await next ();
    const ms = new Date () - start;
    // console.log ( 'Время ответа: %sms' , ms ) ;   
  })
 
  bot.command('start', async (ctx) => {  //после репита и сброса сессии команда .Стар определяется как квестион айди поэтому нужно сбросить его на ноль после репита !!!
    const { msgId, from: { id } } = ctx;  
    
    await clearSession(ctx);   
    if(!await checkLockChat(ctx)) {  
      await addIdMsg(ctx,`${msgId}_s`);  
      await checkProfile(ctx); 
      await helloMsgEnter(ctx, name(ctx)); 
      await questionNext(ctx);   
    } 

//  console.log(ctx)
 

// open all yes
// let test  =  [{"id":7505728426,"questions":[[{"question":"Номер по каталогу","answer":[]},{"question":"Количество умерших?","answer":[{"text":"Один","action":"Один"},{"text":"Несколько","action":"Несколько"}]},{"question":"Выберите размер стеллы или введите размер вручную в формате: д/ш/в","answer":[{"text":"100/50/8","action":"100/50/8"},{"text":"120/60/8","action":"120/60/8"}]},{"question":"Добавьте фото памятника","answer":[]},{"question":"Вид цветника","answer":[{"text":"Открытый","action":"Открытый"},{"text":"Закрытый","action":"Закрытый"}],"sideQuestion":"Введите размер плиты"},{"question":"Цветы на памятник","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид цветов?"},{"question":"Эпитафия","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши текст Эпитафии"},{"question":"Требуется установка?","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид установки?"},{"question":"Доставка","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши адрес доставки"},{"question":"Цена изделия","answer":[]},{"question":"Сумма задатка","answer":[]},{"question":"Сумма установки","answer":[]},{"question":"ФИО заказчика","answer":[]},{"question":"Телефон заказчика","answer":[{"text":"Пропустить","action":"Пропустить"}],"sideQuestion":"Введите телефон"}],[{"question":"ФИО умершего","answer":[]},{"question":"Добавьте фото умершего","answer":[{"text":"Пропустить","action":"Пропустить"}]},{"question":"Дата рождения в формате дд.мм.гггг","answer":[]},{"question":"Дата смерти в формате дд.мм.гггг","answer":[]}]],"lock":true,"doublephoto":false,"repeat":false,"individualQuestions":false,"questionId":14,"deadcount":0,"answer":[["554к","Один","1","120/60/8","monument_7505728426.jpg","Открытый","",{"need":"Да","description":"Цветы"},{"need":"Да","description":"Эпит"},{"need":"Да","description":"Уста5овка"},{"need":"Нет","description":""},"12","13","14","Куц","89990009900"],[{"0":"Фио","1":"*","2":"12.12.12","3":"12.12.12"},]],"msgIds":["26370_s"],"photoPath":[{"filename":"*","path":"/Users/aleksandrgolovin/Documents/TEST/server/photos/*"}],"sideQuestion":false}]
// open all no 
// let test  = [{"id":7505728426,"questions":[[{"question":"Номер по каталогу","answer":[]},{"question":"Количество умерших?","answer":[{"text":"Один","action":"Один"},{"text":"Несколько","action":"Несколько"}]},{"question":"Выберите размер стеллы или введите размер вручную в формате: д/ш/в","answer":[{"text":"100/50/8","action":"100/50/8"},{"text":"120/60/8","action":"120/60/8"}]},{"question":"Добавьте фото памятника","answer":[]},{"question":"Вид цветника","answer":[{"text":"Открытый","action":"Открытый"},{"text":"Закрытый","action":"Закрытый"}],"sideQuestion":"Введите размер плиты"},{"question":"Цветы на памятник","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид цветов?"},{"question":"Эпитафия","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши текст Эпитафии"},{"question":"Требуется установка?","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид установки?"},{"question":"Доставка","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши адрес доставки"},{"question":"Цена изделия","answer":[]},{"question":"Сумма задатка","answer":[]},{"question":"Сумма установки","answer":[]},{"question":"ФИО заказчика","answer":[]},{"question":"Телефон заказчика","answer":[{"text":"Пропустить","action":"Пропустить"}],"sideQuestion":"Введите телефон"}],[{"question":"ФИО умершего","answer":[]},{"question":"Добавьте фото умершего","answer":[{"text":"Пропустить","action":"Пропустить"}]},{"question":"Дата рождения в формате дд.мм.гггг","answer":[]},{"question":"Дата смерти в формате дд.мм.гггг","answer":[]}]],"lock":true,"doublephoto":false,"repeat":false,"individualQuestions":false,"questionId":14,"deadcount":0,"answer":[["54к","Один","1","100/50/8","monument_7505728426.jpg","Открытый","",{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Нет","description":""},"12","13","Куц","8999009900"],[{"0":"Фио","1":"*","2":"12.12.12","3":"12.12.12"}]],"msgIds":["26407_s"],"photoPath":[{"filename":"*","path":"/Users/aleksandrgolovin/Documents/TEST/server/photos/*"}],"sideQuestion":false}]
// open ustanovka  
// let test  = [{"id":7505728426,"questions":[[{"question":"Номер по каталогу","answer":[]},{"question":"Количество умерших?","answer":[{"text":"Один","action":"Один"},{"text":"Несколько","action":"Несколько"}]},{"question":"Выберите размер стеллы или введите размер вручную в формате: д/ш/в","answer":[{"text":"100/50/8","action":"100/50/8"},{"text":"120/60/8","action":"120/60/8"}]},{"question":"Добавьте фото памятника","answer":[]},{"question":"Вид цветника","answer":[{"text":"Открытый","action":"Открытый"},{"text":"Закрытый","action":"Закрытый"}],"sideQuestion":"Введите размер плиты"},{"question":"Цветы на памятник","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид цветов?"},{"question":"Эпитафия","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши текст Эпитафии"},{"question":"Требуется установка?","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид установки?"},{"question":"Доставка","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши адрес доставки"},{"question":"Цена изделия","answer":[]},{"question":"Сумма задатка","answer":[]},{"question":"Сумма установки","answer":[]},{"question":"ФИО заказчика","answer":[]},{"question":"Телефон заказчика","answer":[{"text":"Пропустить","action":"Пропустить"}],"sideQuestion":"Введите телефон"}],[{"question":"ФИО умершего","answer":[]},{"question":"Добавьте фото умершего","answer":[{"text":"Пропустить","action":"Пропустить"}]},{"question":"Дата рождения в формате дд.мм.гггг","answer":[]},{"question":"Дата смерти в формате дд.мм.гггг","answer":[]}]],"lock":true,"doublephoto":false,"repeat":false,"individualQuestions":false,"questionId":14,"deadcount":0,"answer":[["34","Один","1","100/50/8","monument_7505728426.jpg","Открытый","",{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Да","description":"Устов"},{"need":"Нет","description":""},"12","13","14","Куц","89990009900"],[{"0":"Фио","1":"*","2":"12.12.12","3":"12.12.12"}]],"msgIds":["26437_s"],"photoPath":[{"filename":"*","path":"/Users/aleksandrgolovin/Documents/TEST/server/photos/*"}],"sideQuestion":false}]
// open dostavka
// let test  = [{"id":7505728426,"questions":[[{"question":"Номер по каталогу","answer":[]},{"question":"Количество умерших?","answer":[{"text":"Один","action":"Один"},{"text":"Несколько","action":"Несколько"}]},{"question":"Выберите размер стеллы или введите размер вручную в формате: д/ш/в","answer":[{"text":"100/50/8","action":"100/50/8"},{"text":"120/60/8","action":"120/60/8"}]},{"question":"Добавьте фото памятника","answer":[]},{"question":"Вид цветника","answer":[{"text":"Открытый","action":"Открытый"},{"text":"Закрытый","action":"Закрытый"}],"sideQuestion":"Введите размер плиты"},{"question":"Цветы на памятник","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид цветов?"},{"question":"Эпитафия","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши текст Эпитафии"},{"question":"Требуется установка?","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид установки?"},{"question":"Доставка","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши адрес доставки"},{"question":"Цена изделия","answer":[]},{"question":"Сумма задатка","answer":[]},{"question":"Сумма доставки","answer":[]},{"question":"ФИО заказчика","answer":[]},{"question":"Телефон заказчика","answer":[{"text":"Пропустить","action":"Пропустить"}],"sideQuestion":"Введите телефон"}],[{"question":"ФИО умершего","answer":[]},{"question":"Добавьте фото умершего","answer":[{"text":"Пропустить","action":"Пропустить"}]},{"question":"Дата рождения в формате дд.мм.гггг","answer":[]},{"question":"Дата смерти в формате дд.мм.гггг","answer":[]}]],"lock":true,"doublephoto":false,"repeat":false,"individualQuestions":false,"questionId":14,"deadcount":0,"answer":[["67к","Один","1","100/50/8","monument_7505728426.jpg","Открытый","",{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Да","description":"Доставка"},"12","13","14","Куц","89990009900"],[{"0":"Фио","1":"*","2":"12.12.12","3":"12.12.12"}]],"msgIds":["26472_s"],"photoPath":[{"filename":"*","path":"/Users/aleksandrgolovin/Documents/TEST/server/photos/*"}],"sideQuestion":false}]


// close all yes
// let test  = [{"id":7505728426,"questions":[[{"question":"Номер по каталогу","answer":[]},{"question":"Количество умерших?","answer":[{"text":"Один","action":"Один"},{"text":"Несколько","action":"Несколько"}]},{"question":"Выберите размер стеллы или введите размер вручную в формате: д/ш/в","answer":[{"text":"100/50/8","action":"100/50/8"},{"text":"120/60/8","action":"120/60/8"}]},{"question":"Добавьте фото памятника","answer":[]},{"question":"Вид цветника","answer":[{"text":"Открытый","action":"Открытый"},{"text":"Закрытый","action":"Закрытый"}],"sideQuestion":"Введите размер плиты"},{"question":"Цветы на памятник","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид цветов?"},{"question":"Эпитафия","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши текст Эпитафии"},{"question":"Требуется установка?","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид установки?"},{"question":"Доставка","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши адрес доставки"},{"question":"Цена изделия","answer":[]},{"question":"Сумма задатка","answer":[]},{"question":"Сумма установки","answer":[]},{"question":"ФИО заказчика","answer":[]},{"question":"Телефон заказчика","answer":[{"text":"Пропустить","action":"Пропустить"}],"sideQuestion":"Введите телефон"}],[{"question":"ФИО умершего","answer":[]},{"question":"Добавьте фото умершего","answer":[{"text":"Пропустить","action":"Пропустить"}]},{"question":"Дата рождения в формате дд.мм.гггг","answer":[]},{"question":"Дата смерти в формате дд.мм.гггг","answer":[]}]],"lock":true,"doublephoto":false,"repeat":false,"individualQuestions":false,"questionId":14,"deadcount":0,"answer":[["65","Один","1","100/50/8","monument_7505728426.jpg","Закрытый","1на4",{"need":"Да","description":"Цветы"},{"need":"Да","description":"Эпитаф"},{"need":"Да","description":"Устанк"},{"need":"Нет","description":""},"12","13","14","Куц","89990009900"],[{"0":"Фио","1":"*","2":"12.12.12","3":"12.12.12"}]],"msgIds":["26506_s"],"photoPath":[{"filename":"*","path":"/Users/aleksandrgolovin/Documents/TEST/server/photos/*"}],"sideQuestion":false}]
// close all no
// let test  = [{"id":7505728426,"questions":[[{"question":"Номер по каталогу","answer":[]},{"question":"Количество умерших?","answer":[{"text":"Один","action":"Один"},{"text":"Несколько","action":"Несколько"}]},{"question":"Выберите размер стеллы или введите размер вручную в формате: д/ш/в","answer":[{"text":"100/50/8","action":"100/50/8"},{"text":"120/60/8","action":"120/60/8"}]},{"question":"Добавьте фото памятника","answer":[]},{"question":"Вид цветника","answer":[{"text":"Открытый","action":"Открытый"},{"text":"Закрытый","action":"Закрытый"}],"sideQuestion":"Введите размер плиты"},{"question":"Цветы на памятник","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид цветов?"},{"question":"Эпитафия","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши текст Эпитафии"},{"question":"Требуется установка?","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид установки?"},{"question":"Доставка","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши адрес доставки"},{"question":"Цена изделия","answer":[]},{"question":"Сумма задатка","answer":[]},{"question":"Сумма установки","answer":[]},{"question":"ФИО заказчика","answer":[]},{"question":"Телефон заказчика","answer":[{"text":"Пропустить","action":"Пропустить"}],"sideQuestion":"Введите телефон"}],[{"question":"ФИО умершего","answer":[]},{"question":"Добавьте фото умершего","answer":[{"text":"Пропустить","action":"Пропустить"}]},{"question":"Дата рождения в формате дд.мм.гггг","answer":[]},{"question":"Дата смерти в формате дд.мм.гггг","answer":[]}]],"lock":true,"doublephoto":false,"repeat":false,"individualQuestions":false,"questionId":14,"deadcount":0,"answer":[["38к","Один","1","100/50/8","monument_7505728426.jpg","Закрытый","1на4",{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Нет","description":""},"12","12","Куц","89990009900"],[{"0":"Фио","1":"*","2":"12.12.12","3":"12.12.12"}]],"msgIds":["26545_s"],"photoPath":[{"filename":"*","path":"/Users/aleksandrgolovin/Documents/TEST/server/photos/*"}],"sideQuestion":false}]
// close ustanovka
// let test  = [{"id":7505728426,"questions":[[{"question":"Номер по каталогу","answer":[]},{"question":"Количество умерших?","answer":[{"text":"Один","action":"Один"},{"text":"Несколько","action":"Несколько"}]},{"question":"Выберите размер стеллы или введите размер вручную в формате: д/ш/в","answer":[{"text":"100/50/8","action":"100/50/8"},{"text":"120/60/8","action":"120/60/8"}]},{"question":"Добавьте фото памятника","answer":[]},{"question":"Вид цветника","answer":[{"text":"Открытый","action":"Открытый"},{"text":"Закрытый","action":"Закрытый"}],"sideQuestion":"Введите размер плиты"},{"question":"Цветы на памятник","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид цветов?"},{"question":"Эпитафия","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши текст Эпитафии"},{"question":"Требуется установка?","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид установки?"},{"question":"Доставка","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши адрес доставки"},{"question":"Цена изделия","answer":[]},{"question":"Сумма задатка","answer":[]},{"question":"Сумма установки","answer":[]},{"question":"ФИО заказчика","answer":[]},{"question":"Телефон заказчика","answer":[{"text":"Пропустить","action":"Пропустить"}],"sideQuestion":"Введите телефон"}],[{"question":"ФИО умершего","answer":[]},{"question":"Добавьте фото умершего","answer":[{"text":"Пропустить","action":"Пропустить"}]},{"question":"Дата рождения в формате дд.мм.гггг","answer":[]},{"question":"Дата смерти в формате дд.мм.гггг","answer":[]}]],"lock":true,"doublephoto":false,"repeat":false,"individualQuestions":false,"questionId":14,"deadcount":0,"answer":[["76н","Один","1","100/50/8","monument_7505728426.jpg","Закрытый","1на6",{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Да","description":"Установ"},{"need":"Нет","description":""},"12","13","14","Куц","89990009900"],[{"0":"Фио","1":"*","2":"12.12.12","3":"12.12.12"}]],"msgIds":["26577_s"],"photoPath":[{"filename":"*","path":"/Users/aleksandrgolovin/Documents/TEST/server/photos/*"}],"sideQuestion":false}]
// close dostavka
// let test  = [{"id":7505728426,"questions":[[{"question":"Номер по каталогу","answer":[]},{"question":"Количество умерших?","answer":[{"text":"Один","action":"Один"},{"text":"Несколько","action":"Несколько"}]},{"question":"Выберите размер стеллы или введите размер вручную в формате: д/ш/в","answer":[{"text":"100/50/8","action":"100/50/8"},{"text":"120/60/8","action":"120/60/8"}]},{"question":"Добавьте фото памятника","answer":[]},{"question":"Вид цветника","answer":[{"text":"Открытый","action":"Открытый"},{"text":"Закрытый","action":"Закрытый"}],"sideQuestion":"Введите размер плиты"},{"question":"Цветы на памятник","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид цветов?"},{"question":"Эпитафия","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши текст Эпитафии"},{"question":"Требуется установка?","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Какой вид установки?"},{"question":"Доставка","answer":[{"text":"Да","action":"Да"},{"text":"Нет","action":"Нет"}],"sideQuestion":"Напиши адрес доставки"},{"question":"Цена изделия","answer":[]},{"question":"Сумма задатка","answer":[]},{"question":"Сумма доставки","answer":[]},{"question":"ФИО заказчика","answer":[]},{"question":"Телефон заказчика","answer":[{"text":"Пропустить","action":"Пропустить"}],"sideQuestion":"Введите телефон"}],[{"question":"ФИО умершего","answer":[]},{"question":"Добавьте фото умершего","answer":[{"text":"Пропустить","action":"Пропустить"}]},{"question":"Дата рождения в формате дд.мм.гггг","answer":[]},{"question":"Дата смерти в формате дд.мм.гггг","answer":[]}]],"lock":true,"doublephoto":false,"repeat":false,"individualQuestions":false,"questionId":14,"deadcount":0,"answer":[["18оа","Один","1","100/50/8","monument_7505728426.jpg","Закрытый","1на5",{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Нет","description":""},{"need":"Да","description":"Доаставка"},"12","13","14","Куц","89990009900"],[{"0":"Костамаров Игорь Калиаскарович","1":"*","2":"12.12.12","3":"12.12.12"}]],"msgIds":["26612_s"],"photoPath":[{"filename":"*","path":"/Users/aleksandrgolovin/Documents/TEST/server/photos/*"}],"sideQuestion":false}]
 
// await generationBlankDocx(ctx);
// await generationBlankDocx(test, ctx);

    // await generationBlankPdf(test);
    // await generationBlankPdf(ctx);
  })
   
  bot.action("restart", async (ctx, next) => {
    const { msgId, from: { id } } = ctx; 
    await deleteMessage(ctx,[ctx.session.msgIds.at(-1),ctx.session.msgIds.at(-2)])  
    await clearSession(ctx);  
    if(!await checkLockChat(ctx)) {  
      await addIdMsg(ctx,msgId);  
      await checkProfile(ctx); 
      await helloMsgEnter(ctx, name(ctx)); 
      await questionNext(ctx);   
    }  
  });

  bot.on('callback_query',async (ctx) => {   
    var {
      msgId, update: { callback_query: { data }},
      session: { questionId, individualQuestions, deadcount, answer ,sideQuestion},
      callbackQuery: { message: { message_id, chat: { id }} }
    } = ctx; 

 
    await clearSession(ctx);  
    await checkProfile(ctx);  

    if(!individualQuestions) {

      await deleteMessage(ctx,[msgId]);  

      if(data == 'Несколько' && questionId == 1) {  // работает
        ctx.session.individualQuestions = true;  
        ctx.session.answer[0].push(data);   
        await ctx.reply(`Какое количество умерших?`,
        Markup.inlineKeyboard(
          [{ text: "2",action:"2" },{ text : "3",action:"3"},{ text : "4",action:"4"}].map(({ text, action }) => (Markup.button.callback(text, action)))
        )).then(({ message_id }) => { 
          addIdMsg(ctx, message_id);
        }); 
      } 

      if(data == 'Один' && questionId == 1) {   // работает
        ctx.session.deadcount = 1;     
        ctx.session.individualQuestions = true; 
        ctx.session.answer[0].push(data); 
        ctx.session.answer[0].push('1'); 
        ctx.session.questionId = 0; 
        ctx.session.answer[1].push({});  
        await questionNextAfterUP(ctx);
      }
      
      if(questionId == 4) { 
        ctx.session.sideQuestion = true;
        ctx.session.questionId--;   
        if(data == "Открытый") { ctx.session.sideQuestion = false; ctx.session.questionId++; } 
      }

      if(questionId > 4 && questionId < 9) {  
        await checkSideQuestion(ctx, data);  
        ctx.session.questionId--;      
        await registrationAnswer(ctx, { need: data, description: ''});   
        if(data == "Нет") ctx.session.questionId++;  
      }
      
      if(questionId == 13) {   
        await updateProfile(ctx); 
        if(data == "Пропустить") { ctx.session.answer[0].push('Нет'); await updateProfile(ctx); await generationBlankDocx(ctx); }  
      }

      if(questionId == 2 || questionId == 4) {
        await registrationAnswer(ctx, data);  
      }
  
      if(questionId != 1) { 
        if(data != "Пропустить") { 
          if(data == "Открытый") { ctx.session.answer[0].push(''); }
          await questionNext(ctx); 
        } 
      }
        
    } else {
    
      await deleteMessage(ctx,[msgId]); 
   
      if(questionId == 1 ) {     // количество умерших
        ctx.session.questions[1][0].question = 'ФИО умершего слева'
        switch (data) {
          case '2':
            ctx.session.deadcount = 2;     
            ctx.session.answer[1].push({},{});   
            break;
          case '3': 
            ctx.session.deadcount = 3;       
            ctx.session.answer[1].push({},{},{});    
            break;
          case '4':
            ctx.session.deadcount = 4;   
            ctx.session.answer[1].push({},{},{},{});  
            break;
        
          default:
            break;
        } 

        if(data != 'Пропустить') {
          await updateProfile(ctx); 
          ctx.session.answer[0].push(data); 
          ctx.session.questionId = 0;   
        } 
      }

      if(data != '2' && data != '3' && data != '4') { 
        if(data == 'Пропустить') {
          data = "*"    // фото умершего
        }  
        await registrationAnswer(ctx, data);    
      }
 
      await questionNext(ctx);  
    }  
     
  });
 
  bot.on(message("text"), async (ctx) => {  

    const { msgId,update:{ message:{ text }}, session: { questionId, repeat,msgIds, individualQuestions, sideQuestion, deadcount, lock, answer }} = ctx; 
     
    if(!await onRepeatBot(ctx) && !await checkLockChat(ctx)) {   
      if(!individualQuestions) { 

        await deleteMessage(ctx,[msgId]);   // работает

        if((questionId > 3 && questionId < 9) && !sideQuestion || questionId == 1) {  // работает
          await errorMsgEnter(ctx, "А кнопки выше то для кого!?"); 
        }
    
        if(questionId == 0) {    // Первый вопрос про католог
          await addIdMsg(ctx, msgId);  
          await minorDeletedMsg(ctx); 
          await registrationAnswer(ctx);
          await questionNext(ctx);  
        }
     
        if(questionId == 4 && sideQuestion) {
          await addIdMsg(ctx, msgId);  
          await minorDeletedMsg(ctx); 
          ctx.session.sideQuestion = false;  
          await registrationAnswer(ctx);
          await questionNext(ctx); 
        }
 
        let regexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/ 
        
        if(questionId == 2) {    // работает 
          let regexp = /^\d{1,4}\/\d{1,4}\/\d{1,4}$/g; 
          if(regexp.test(text)) { 
            await addIdMsg(ctx, msgId);  
            await minorDeletedMsg(ctx); 
            ctx.session.sideQuestion = false;  
            await registrationAnswer(ctx);
            await questionNext(ctx); 
          } else await errorMsgEnter(ctx, "Я же попросил в формате 100/100/100! Или выбери кнопками!"); 
        }
       
        console.log(sideQuestion,'sideQuestion') //5 
        console.log(questionId,'TEXTquestionId') //5 

        if((questionId > 4 && sideQuestion) && (questionId < 9 && sideQuestion)) {   // работает 
          await addIdMsg(ctx, msgId); 
          // await minorDeletedMsg(ctx)
          ctx.session.sideQuestion = false;  
  
          let test = ctx.session.answer[0][5] == "Открытый" ? 2 : 2

          ctx.session.answer[0][questionId + test].description = text; // плюс один но это из-за доп 1 в массиве на ответ сколько умерших    
 
          console.log(ctx.session.answer[0].length,'ctx.session.answer[0].length',questionId)
 
          // if(ctx.session.answer[0].length == 9) {
            if(ctx.session.answer[0][9]?.need == "Да" && questionId == 7) {
              // console.log('ctx.session.answer[0][9]?.need == "Да"')//5 
              ctx.session.answer[0].push({ need: "Нет", description: ''})
              ctx.session.questionId = 9;
              ctx.session.sideQuestion = false;
            } else {
              ctx.session.questionId++;   
            } 
          // } 

          // if(ctx.session.answer[0].length == 10) {
          //   if(ctx.session.answer[0][9]?.need == "Да" && questionId == 7) {
          //     console.log('ctx.session.answer[0][8]?.need == "Да"')//5 
          //     ctx.session.answer[0].push({ need: "Нет", description: ''})
          //     ctx.session.questionId = 9;
          //     ctx.session.sideQuestion = false;
          //   } else {
          //     ctx.session.questionId += 2;   
          //   } 
          // }

          if(ctx.session.answer[0][10]?.need == "Да" && questionId == 8) {
            console.log('ctx.session.answer[0][9]?.need == "Да"') // 5 
             ctx.session.questions[0][11].question = "Сумма доставки"
          } 
 
          await minorDeletedMsg(ctx);  
          await questionNextAfterUP(ctx);
          // await removeIdMsg(ctx, msgIds[msgIds.length - 1]);
        }
    
        if(questionId > 8 && questionId < 12) {   // работает
          let regexp = /^\d{1,8}$/g;
          await addIdMsg(ctx, msgId);  
    
          if(regexp.test(text)) { 
            
            await minorDeletedMsg(ctx); 
            await registrationAnswer(ctx);
            if(questionId == 10) {
              if(ctx.session.answer[0][9]?.need == "Нет" && ctx.session.answer[0][10]?.need == "Нет") {
                // ctx.session.answer[0].push("");  
                ctx.session.questionId = 12; 
              }
            }  
            await questionNext(ctx);
 
          } else {
            if(text.length > 8) {
              await errorMsgEnter(ctx, "Ну уж не преувеличивай А! Столько точно не дадут)))))");  
            } else await errorMsgEnter(ctx, "На клавиатуре есть цифры! Используй их!");   
          } 
        }
      
        if(questionId == 13) {  // работает
    
          let regexp = /^((8|\+375|\+7|\+996|\+998)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/g;
    
          if(regexp.test(text)) {
            await addIdMsg(ctx, msgId); 
            await minorDeletedMsg(ctx);
            await registrationAnswer(ctx);  
            ctx.session.sideQuestion = false; 
            await updateProfile(ctx); 
            await generationBlankDocx(ctx);  
          } else await errorMsgEnter(ctx, "Ты что цифры не знаешь? Внимательнее пиши номер.");  
      
        }
      
        if(questionId == 12) {     // работает
          await addIdMsg(ctx, msgId);  
          await minorDeletedMsg(ctx); 
          // await handlePhotoUserName(ctx, text)
          await registrationAnswer(ctx);
          await questionNext(ctx); 
        }
    
        if(questionId == 3) {   // работает
          await errorMsgEnter(ctx, "Я же фото прошу!!!");  
        }
      
      } else {    // работает
        if(questionId == 1) await errorMsgEnter(ctx, "Я же фото прошу!!!");    
        if(questionId == 13) await errorMsgEnter(ctx, "Кнопками!!!");  

        if(questionId == 0) {  // фио умершего

          await addIdMsg(ctx, msgId); 
          await minorDeletedMsg(ctx);

          ctx.session.answer[1][Math.abs(deadcount - answer[1].length)][`${0}`] = text;  
          await updateProfile(ctx); 
          ctx.session.questionId++;   
          await questionNext(ctx);  
        } 
 
        if(questionId == 2) {  // работает 
          let regexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
          if(regexp.test(text)) { 
            await addIdMsg(ctx, msgId); 
            await minorDeletedMsg(ctx);
            await registrationAnswer(ctx, text); 
            // await changeTextCalendar(calendar,'Дата смерти умершего: '); 
            await questionNext(ctx);   
          } else await errorMsgEnter(ctx, "Неверный формат даты");   
        }

        if(questionId == 3) {  // работает 
          let regexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
    
          if(regexp.test(text)) {
            await addIdMsg(ctx, msgId); 
            await minorDeletedMsg(ctx);
            await registrationAnswer(ctx, text);  
            ctx.session.deadcount--; 
            ctx.session.questionId = 0;  

            if(ctx.session.deadcount == 0) { 
              ctx.session.questionId = 2; 
              ctx.session.individualQuestions = false; 
              await questionNext(ctx);  
            } else {      // работает 


              if(ctx.session.answer[1].length == 2) {
                ctx.session.questions[1][0].question = `ФИО умершего справа.`
              }

              
              if(ctx.session.answer[1].length == 3) {
                console.log(deadcount,'deadcount')
                
                if(deadcount == 3) {
                  ctx.session.questions[1][0].question = `ФИО умершего по середине.` 
                }
                
                if(deadcount == 2) {
                  ctx.session.questions[1][0].question = `ФИО умершего справа.` 
                }
                
              }

              if(ctx.session.answer[1].length == 4) {
                ctx.session.questions[1][0].question = `ФИО ${Math.abs(deadcount - answer[1].length) + 2}-го умершего.`
              }
        
              await questionNext(ctx);  
            } 
          } else await errorMsgEnter(ctx, "Неверный формат даты");  
        }
      }  
    }  

  });

  bot.on(message("contact"), async (ctx, next)=> {
    const { msgId, update: { message: { contact: { phone_number } } }, session: { questionId, individualQuestions }} = ctx; 
    if(!await checkLockChat(ctx)) {    
      if(questionId == 13 && !individualQuestions) {
        await addIdMsg(ctx, msgId);
        await minorDeletedMsg(ctx); 
        ctx.session.answer[+individualQuestions].push(phone_number);  
        ctx.session.sideQuestion = false; 
        await updateProfile(ctx); 
        await generationBlankDocx(ctx);  
      } else await errorMsgEnter(ctx,'Зачем он мне нужен сейчас? Как понадобиться я тебя попрошу!');  
    }   
  });

  bot.on(message("photo"), async (ctx) => {
    const { msgId,from: { id }, update: { message }, session: { questionId, answer, deadcount, individualQuestions, doublephoto }} = ctx;
    if(!await checkLockChat(ctx)) {     
      if(!doublephoto)  {   
        const { file_id } = message.photo.pop();  

        if(questionId == 1 && individualQuestions) {   
          const pathForPhoto = path.join(__dirname,`../photos/${answer[1][Math.abs(deadcount - answer[1].length)][0]}_${Math.abs(deadcount - answer[1].length) + 1}.jpg`);  
          await addIdMsg(ctx, msgId);  
          await saveFileToServer(file_id, pathForPhoto, ctx, bot);  
          await updateProfile(ctx);  
          await questionNext(ctx, calendar);  

        } else if(questionId == 3 && !individualQuestions) {   
          const pathForPhoto = path.join(__dirname,`../photos/monument_${id}.jpg`); 
          await addIdMsg(ctx, msgId);  
          await saveFileToServer(file_id, pathForPhoto, ctx, bot);  
          await questionNextAfterUP(ctx);   
        } else await errorMsgEnter(ctx,'Зачетное фото! Но именно сейчас оно мне не нужно! Я позже тебя попрошу сбросить!');   
      } else await errorMsgEnter(ctx,`${ name(ctx) }!Фото нужно ОДНО!`,2000);   
    }  
  });

  bot.on(message('sticker'), async (ctx)=> await errorMsgEnter(ctx,'Прикольная картинка, но давай к делу!'));

  bot.on(message("voice"), async (ctx) => await errorMsgEnter(ctx,'У тебя приятный голос, но давай к делу!'));
    
  bot.launch({
    allowedUpdates: ['message', 'callback_query'],
  });  // Запуск бота
 
  process.once('SIGINT', () => bot.stop('SIGINT')); 
  process.once('SIGTERM', () => bot.stop('SIGTERM'));  // Enable graceful stop
}


///////////////////////////////////////// BOT SHOPING //////////////////////////////////////////////////////////////


async function botShopingStart() { 
  const botShop = new Telegraf(process.env.TGSHOP_API_KEY); // Токен бота
 
  botShop.use(session()); // Конектим сессии
  botShop.use(Telegraf.log()); // Консолим входящие сообщение
   
  botShop.use ( async (ctx,next) => { // Длительность ответа
    const start = new Date ();
    await next ();
    const ms = new Date () - start;
    // console.log ( 'Время ответа: %sms' , ms ) ;   
  })
 
  botShop.command('start', async (ctx) => {  //после репита и сброса сессии команда .Стар определяется как квестион айди поэтому нужно сбросить его на ноль после репита !!!
  console.log('start',ctx);
  const { msgId, from: { id } } = ctx;  
  await clearSessionShop(ctx);   
  await addIdMsg(ctx,`${msgId}_s`);  
  await helloMsgEnter(ctx, name(ctx)); 
  await ctx.replyWithHTML('Добро пожаловать в Наш Бот / Магазин! Перейти в каталог продукции: ', Markup.inlineKeyboard([
    [    Markup.button.url(
      "Каталог продукции",
      WebAppUrl
    ), ]
    ]))  
  })
   
  botShop.on(message("text"), async (ctx) => {  
    console.log('start',ctx);
  });
 
 

  botShop.launch({
    allowedUpdates: ['message', 'callback_query'],
  });  // Запуск бота
  
}

 
process.once('SIGINT', () => {
  botShop.stop('SIGINT');
});  // Enable graceful stop
 
process.once('SIGTERM', () => {
  botShop.stop('SIGTERM'); 
});  // Enable graceful stop
  
module.exports = TGAPI;
  
// const stage = new Stage([require('./scenes/giftCreate.js')(bot), require('./scenes/priceEdit.js')(bot), require('./scenes/giftUse.js')(bot)]);
// bot.use(stage.middleware());
/*
function isAdmin(idOfChat, IdOfUser, ctx) {
  return new Promise((resolve, reject) => {
      //Get user information first
      ctx.telegram.getChatMember(idOfChat, IdOfUser).then((user) => {
          //Then check if user is admin (or creator)
          resolve(user.status == "administrator" || user.status == "creator");
      })
      .catch((error) => {
            //Reject if it's an error
            reject(error);
      });
  });
}
Затем, чтобы использовать его в вашей основной функции, вам придется обработать его следующим образом:

bot.command("test", ctx => {
  isAdmin(ctx.message.chat.id, ctx.message.from.id, ctx).then((result) => {
      if (result) {
          ctx.reply("Admin");
      } else {
          ctx.reply("._.");
      }
  })
  .catch((error) => {
    ctx.reply("An error has ocurred trying to get user rank: " + JSON.stringify(error));
  });
});
*/
 
  // bot.on("chat_join_request", ctx => {
  // 	// Use ctx.chatJoinRequest
  // });

  // bot.on('inline_query', async (ctx) => {
  //   const result = [] 
  //   // Using context shortcut
  //   await ctx.answerInlineQuery(result)
  // })

  // bot.command("onetime", ctx =>
  // 	ctx.reply(
  // 		"One time keyboard",
  // 		Markup.keyboard(["/simple", "/inline", "/pyramid"]).oneTime().resize(),
  // 	),
  // ); // Три кнопки в один столбик на весь экран

  // bot.command("custom", async ctx => {
  // 	return await ctx.reply(
  // 		"Custom buttons keyboard",
  // 		Markup.keyboard([
  // 			["🔍 Search", "😎 Popular"], // Первая строка кнопок
  // 			["☸ Setting", "📞 Feedback"], // Вторая строка кнопок
  // 			["📢 Ads", "⭐️ Rate us", "👥 Share"]])  
  // 			.oneTime()
  // 			.resize(),
  // 	);// третья строка кнопок
  // });  
  
  // bot.command("special", ctx => {
  // 	return ctx.reply(
  // 		"Special buttons keyboard",
  // 		Markup.keyboard([
  // 			Markup.button.contactRequest("Send contact"),
  // 			Markup.button.locationRequest("Send location"),
  // 		]).resize(),
  // 	);
  // }); // Кнопки для спец задач

  // bot.command("pyramid", ctx => {
  // 	return ctx.reply(
  // 		"Keyboard wrap",
  // 		Markup.keyboard(["one", "two", "three", "four", "five", "six"], {
  // 			wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 2,
  // 		}),
  // 	);
  // }); // Расположение пирамида

  // bot.command("simple", ctx => {
  // 	return ctx.replyWithHTML(
  // 		"<b>Coke</b> or <i>Pepsi?</i>",
  // 		Markup.keyboard(["Coke", "Pepsi"]),
  // 	);
  // }); // Разметка текста сообьщения ХТМЛ для клавиатуры

  // bot.command("inline", ctx => {
  // 	return ctx.reply("<b>Coke</b> or <i>Pepsi?</i>", {
  // 		parse_mode: "HTML",
  // 		...Markup.inlineKeyboard([
  // 			Markup.button.callback("Coke", "Coke"),
  // 			Markup.button.callback("Pepsi", "Pepsi"),
  // 		]),
  // 	});
  // }); // Разметка текста сообьщения ХТМЛ для ИНЛАЙНклавиатуры

  // bot.command("random", ctx => {
  // 	return ctx.reply(
  // 		"random example",
  // 		Markup.inlineKeyboard([
  // 			Markup.button.callback("Coke", "Coke"),
  // 			Markup.button.callback("Dr Pepper", "Dr Pepper", Math.random() > 0.5),
  // 			Markup.button.callback("Pepsi", "Pepsi"),
  // 		]),
  // 	);
  // });  // Рандомное появление кнопки

  // bot.command("caption", ctx => {
  // 	return ctx.replyWithPhoto(
  // 		{ url: "https://picsum.photos/200/300/?random" },
  // 		{
  // 			caption: "Caption",
  // 			parse_mode: "Markdown",
  // 			...Markup.inlineKeyboard([
  // 				Markup.button.callback("Plain", "plain"),
  // 				Markup.button.callback("Italic", "italic"),
  // 			]),
  // 		},
  // 	);
  // });

  // bot.hears(/\/wrap (\d+)/, ctx => {
  // 	return ctx.reply(
  // 		"Keyboard wrap",
  // 		Markup.keyboard(["one", "two", "three", "four", "five", "six"], {
  // 			columns: parseInt(ctx.match[1]),
  // 		}),
  // 	);
  // });  // Расположение кнопопк по колонкам

  // bot.action("Dr Pepper", (ctx, next) => {
  // 	return ctx.reply("👍").then(() => next());
  // });

  // bot.action("plain", async ctx => {
  // 	await ctx.answerCbQuery();
  // 	await ctx.editMessageCaption(
  // 		"Caption",
  // 		Markup.inlineKeyboard([
  // 			Markup.button.callback("Plain", "plain"),
  // 			Markup.button.callback("Italic", "italic"),
  // 		]),
  // 	);
  // });  // Обработчик действия инлайн кнопок

  // bot.action("italic", async ctx => {
  // 	await ctx.answerCbQuery();
  // 	await ctx.editMessageCaption("_Caption_", {
  // 		parse_mode: "Markdown",
  // 		...Markup.inlineKeyboard([
  // 			Markup.button.callback("Plain", "plain"),
  // 			Markup.button.callback("* Italic *", "italic"),
  // 		]),
  // 	});
  // });
  /*
  bot.action(/.+/, ctx => {
    return ctx.answerCbQuery(`Oh, ${ctx.match[0]}! Great choice`);
  }); 
  const sayYoMiddleware = fork(ctx => ctx.reply("yo"));
  bot.command("answer", ctx => {
    console.log(ctx.message);
    return ctx.replyWithMarkdownV2("*42*");
  }); // разметка текста маркдовн
  bot.command("foo", reply("http://coub.com/view/9cjmt"));
  bot.hears(/reverse (.+)/, ctx =>
    ctx.reply(ctx.match[1].split("").reverse().join("")),
  ); // Реверс текста
  bot.on("text", (ctx, next) => {
    if (Math.random() > 0.2) {
      return next();
    }
    return Promise.all([
      ctx.replyWithLocation(Math.random() * 180 - 90, Math.random() * 180 - 90),
      next(),
    ]);
  }); // Рандомная локация
  small helper
  */
   