const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    const error = new Error('You can\'t remove incorrect link!');
    if (
      typeof position === "number" &&
      position > 0 &&
      position < this.chain.length &&
      !isNaN(position)
    ) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {this.chain=[];throw error;}
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainTemp=this.chain.join("~~");
    this.chain=[];
    return chainTemp;
  },
};

module.exports = {
  chainMaker,
};
