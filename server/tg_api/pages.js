const { keyboard_main, inline_keyboard_main } = require('./keyboard')
 
const main = {
  text :``,
  buttons: keyboard_main
};
 
const inline_main = {
  text :``,
  buttons: inline_keyboard_main
};
 
 
 
module.exports = {
  main,
  inline_main, 
}
