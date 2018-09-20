module.exports = function getZerosCount(number, base) {
  let simpleNumber = [],simple=0;
  for(let i=2;i<2000;i++){
    for(j=2;j<i;j++){
      if(i%j==0){
        simple++;
        continue;
      }
    } if(simple==0)simpleNumber.push(i);
    simple=0;
  }

  let i=0;
  let simpleMul = {};

  do{
    if(base%simpleNumber[i]==0){
      base/=simpleNumber[i];
      if(!simpleMul[simpleNumber[i]]) simpleMul[simpleNumber[i]]=0;
      simpleMul[simpleNumber[i]]++;
    }else i++;
  }
  while(base!=1);

  let zer = {};

  for(let key in simpleMul){
    let i=1;
    zer[key]=0;
    do{
      zer[key] += (number - (number%Math.pow(key,i)))/Math.pow(key,i);
      i++;
    }
    while (number>Math.pow(key,i));
  }

  let zeros;
  let min;

  for (let key in zer){
    if(!zeros || zeros>zer[key]/simpleMul[key]){
      zeros=zer[key]/simpleMul[key];
      min=key;
    }
  }

  return Math.trunc(zeros);
};