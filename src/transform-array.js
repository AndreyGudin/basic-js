const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let res = {
    arrTrans: [...arr],
    discardNext() {
      if (
        this.arrTrans.indexOf("--discard-next") + 1 >= this.arrTrans.length &&
        typeof this.arrTrans[this.arrTrans.indexOf("--discard-next") + 1] !=
          "number"
      ){
        return this;
        }
      this.arrTrans.splice(this.arrTrans.indexOf("--discard-next") + 1, 1);
      return this;
    },
    discardPrev() {
      if (
        this.arrTrans.indexOf("--discard-prev") - 1 < 0 &&
        typeof this.arrTrans[this.arrTrans.indexOf("--discard-prev") - 1] !=
          "number"
      ){
        return this;
        }
      this.arrTrans.splice(this.arrTrans.indexOf("--discard-prev") - 1, 1);
      return this;
    },
    doubleNext() {
      if (
        this.arrTrans.indexOf("--double-next") + 1 >= this.arrTrans.length &&
        typeof this.arrTrans[this.arrTrans.indexOf("--double-next") + 1] !=
          "number"
      ){
        return this;
        }
      this.arrTrans.splice(
        this.arrTrans.indexOf("--double-next") + 1,
        0,
        this.arrTrans[this.arrTrans.indexOf("--double-next") + 1]
      );
      return this;
    },
    doublePrev() {
      if (
        this.arrTrans.indexOf("--double-next") - 1 < 0 &&
        typeof this.arrTrans[this.arrTrans.indexOf("--double-next") - 1] !=
          "number"
      ){
        return this;
        }
      this.arrTrans.splice(
        this.arrTrans.indexOf("--double-prev") - 1,
        0,
        this.arrTrans[this.arrTrans.indexOf("--double-prev") - 1]
      );
      return this;
    },
    result() {
      return this.arrTrans.reduce((res, curr) => {
        curr
        if (
          curr != "--double-next" &&
          curr != "--double-prev" &&
          curr != "--discard-next" &&
          curr != "--discard-prev"
        ){
          res.push(curr);
          }
        return res;
      }, []);
    },
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--double-next") res.doubleNext();
    if (arr[i] === "--double-prev") res.doublePrev();
    if (arr[i] === "--discard-next") res.discardNext();
    if (arr[i] === "--discard-prev") res.discardPrev();
  }
  return res.result();
}

module.exports = {
  transform,
};
