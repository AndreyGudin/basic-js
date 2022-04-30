const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains){ 
  let arr=[...new Set(domains.map(item=>item.split('.').reverse()).reduce((res,curr)=>{
    curr.forEach((i)=> res.push(i));
     return res;
   },[]))];
  let obj={};
  let counter=0;
  let maindomain=`.${arr[0]}.${arr[1]}`;
  let key='';
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<domains.length;j++){
      if (domains[j].includes(arr[i])) counter++;
    }
    key+=`.${arr[i]}`;
    if (i>1) obj[`${maindomain}.${arr[i]}`]=counter;
    else obj[key]=counter;
    counter=0;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
