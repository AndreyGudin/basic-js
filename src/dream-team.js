const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let arr=[];
  let res=[];
  if (Array.isArray(members)){
    arr=members.map((item)=>{
      if (((typeof item)==='string')&&(item)){
        item=item.replace(/\s/g,'');
      }
      return item;
    });
    for(let i=0;i<arr.length;i++){
      if (((typeof arr[i])==='string')&&(arr[i])){
        res.push(arr[i].substring(0,1).toUpperCase())
      }
    }
  }
  else return false;
  return res.sort().join('');
}

module.exports = {
  createDreamTeam
};
