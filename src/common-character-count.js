const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arrayOfs2=s2.split("");
  let count=0,index=0;
  for(chr of s1){
    index=arrayOfs2.findIndex(elem=>elem===chr);
    if (index>=0){
      count++;
      arrayOfs2.splice(index,1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
