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
function getDNSStats(domains) { 
  let obj={};
  let arr=[];
  let arr2=[];
  let c='',c1='';
  let count=0;
  arr=domains.map(item=>item.split('.').reverse());
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      arr[i][j]=`.${arr[i][j]}${c}`;
      c=arr[i][j];
    }
    c='';
  }
  arr2=arr[0];
  for(let i=1;i<arr.length;i++){
    if (arr[i].length>2) arr2.push(arr[i][2]);
  }

  for(let i=1;i<arr2.length;i++){
    arr2[i]=arr2[i].substring(1);
  }

  for(let i=0;i<arr2.length;i++){
    for(let j=0;j<domains.length;j++){
      if (domains[j].includes(arr2[i])) count++;
    }
    c1=arr2[i];
    c1=c1.split('.').reverse().map((item)=>{
      if (item) item='.'+item;
      return item
    }).join("");
    obj[c1]=count;
    count=0;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
