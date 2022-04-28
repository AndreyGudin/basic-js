const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let nlength=n.toString().length;
  let arr=[];
  let arr2=[];
  for(let i=0;i<nlength;i++){
    arr=n.toString().split('');
    arr.splice(i,1);
    arr2.push(+arr.join(""));
}
  return Math.max(...arr2);
}

module.exports = {
  deleteDigit
};
