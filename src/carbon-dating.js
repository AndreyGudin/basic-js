const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  let k=0;
  if (((typeof sampleActivity)==='string')&&((typeof +sampleActivity)==='number')&&!(Number.isNaN(+sampleActivity))&&(+sampleActivity!=0)&&(+sampleActivity>0)&&(+sampleActivity<=15)){
    k=0.693/HALF_LIFE_PERIOD;
    return t=Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/k);
  }
  else return false;
  
}

module.exports = {
  dateSample
};
