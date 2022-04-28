function getDNSStats(domains) { 
  let obj={};
  let arr=[];
  let c='';
  arr=domains.map(item=>item.split('.').reverse());
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      arr[i][j]=`${c}.${arr[i][j]}`;
      c=arr[i][j];
    }
    c='';
  }
  console.log(arr);

}

console.log(getDNSStats(['code.yandex.ru','music.yandex.ru','yandex.ru']))