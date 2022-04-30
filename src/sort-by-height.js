const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrWithResult = arr.map((curr) => {
    if (curr > 0) curr = 0;
    return curr;
  });
  let j = 0;
  let arrSorted = arr
    .reduce((array, curr) => {
      if (curr > 0) array.push(curr);
      return array;
    }, [])
    .sort((a, b) => a - b);
  for (let i = 0; i < arrWithResult.length; i++) {
    if (arrWithResult[i] === -1) continue;
    else {
      arrWithResult[i] = arrSorted[j];
      j++;
    }
  }
  return arrWithResult;
}

module.exports = {
  sortByHeight,
};
