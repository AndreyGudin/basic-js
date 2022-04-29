const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let res='';
  let acc=1;
  let arr=str.split("");
  for(let i=0;i<arr.length;i++){
    if (arr[i]===arr[i+1]) acc=acc+1;
    else if (acc>1) {res+=`${acc}${arr[i]}`;acc=1}
          else {res+=`${arr[i]}`;acc=1;} 
  }
  return res
}     

module.exports = {
  encodeLine
};
