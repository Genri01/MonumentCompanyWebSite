const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();   
const config = require('config');  
const cookieParser = require('cookie-parser');  
const PORT = config.get('Server.port') || 4000;
const router = require('./routers/router'); 
const SESSION = require('./db/index');
const TGAPI = require ('./tg_api/index'); 
const errorMiddleware = require('./middelwares/error-middleware');
const bodyParser = require('body-parser'); 
const v8 = require('v8');          
const fs = require('fs');
const docx = require("docx"); 

app.use(bodyParser.urlencoded({ limit: "500mb", extended: true, parameterLimit: 100000 }));
app.use(bodyParser.json({limit: '500mb'}));

app.use(cors({
    credentials: true,  
    origin: process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://monumentcompany.ru' ,
    methods: "GET, POST, PATCH, DELETE, OPTIONS",
  },
  {
    headers: {
      'access-control-allow-credentials': true,
      'access-control-allow-headers': "Origin, X-Requested-With, Content-Type, Accept",
      'access-control-allow-methods': "GET, POST, PATCH, DELETE, OPTIONS",
      'access-control-allow-origin': '*'
    }
  }
));
 
app.use(express.json());
app.use(cookieParser()); 

app.use('/api',router);
app.use(errorMiddleware);

if (process.env.NODE_ENV === 'production') {
  app.use('/',express.static(path.join(__dirname,'..','client','build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'..','client','build','index.html'))
  })
}

app.use('/shared/images',express.static(path.join(__dirname,'..','shared','images'),{maxAge: '365d'}))

app.listen(PORT,async()=>{ 
  
  TGAPI.initialBotBlank();  
  TGAPI.initialBotShoping();  
 
  // const totalHeapSize = v8.getHeapStatistics().total_available_size;
  // const totalHeapSizeGb = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2); 

  // console.log('TOTAL HEAP SIZE Gb: ', totalHeapSizeGb);
  console.log(`Start server ${PORT} on port`);
  console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);  
   
});
