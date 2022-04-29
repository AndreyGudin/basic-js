const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  options=options || {};
  options.repeatTimes=options.repeatTimes|| 1;
  options.addition=options.addition===null ? 'null' :  options.addition ?? '' ;
  options.separator=options.separator|| '+';
  options.additionRepeatTimes=options.additionRepeatTimes|| 1;
  options.additionSeparator=options.additionSeparator || '|';
  let arrOfStr=[];
  let addArrOfStr=[];
  console.log(options.addition)
  function createArrOfStr(string,repeat){
    let arr=[];
    console.log(String(string))
    for (let i=0;i<repeat;i++){
      arr.push(String(string));
    }
    return arr;
  }
  arrOfStr=createArrOfStr(str,options.repeatTimes);
  addArrOfStr=createArrOfStr(options.addition,options.additionRepeatTimes);
  arrOfStr
  addArrOfStr
  return arrOfStr.join(addArrOfStr.join(options.additionSeparator)+options.separator)+addArrOfStr.join(options.additionSeparator);
}

module.exports = {
  repeater
};
