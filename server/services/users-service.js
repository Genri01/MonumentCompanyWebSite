 
const uuid = require('uuid'); 
const DB = require('../db/index'); 
const UserDto = require('../dtos/user-dto'); 
const ApiErr = require('../exeptions/api-error'); 
const serviceFunction = require("../service_functions") 
const moment = require('moment') 
 
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
 class UserService {
  
 
}

module.exports = new UserService();
