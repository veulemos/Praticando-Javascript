/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if((s.length >= 1)|| (s.length <= 15)){
      return callbackInt(s);
    }
   else{
      return "digite novamente";
  }
}

function callbackInt(roman){
      if((roman === "I")||(roman === "i")){
            return 1;
      } 
      else if ((roman === "V")||(roman === "v")){
            return 5;
      } 
      else if ((roman === "X")||(roman === "x")){
            return 10;
      } 
      else if ((roman === "L")||(roman === "l")){
            return 50;
      } 
      else if ((roman === "C")||(roman === "c")){
            return 100;
      } 
      else if ((roman === "D")||(roman === "d")){
            return 500;
      } 
      else if ((roman === "M")||(roman === "m")){
            return 1000;
      }
      else if(roman === "") {
            return "Error: Is Empty!;"
      }
      else if (((roman === "VV")||(roman === "vv"))||((roman === "LL")||(roman === "ll"))||((roman === "DD")||(roman === "dd"))){
            return "Error Sintaxe Roman";
      } 
      else if (((roman === "VVV")||(roman === "vvv"))||((roman === "LLL")||(roman === "lll"))||((roman === "DDD")||(roman === "ddd"))){
          return "Error Sintaxe Roman";
      } 
      else {
        const numberInt = calcInt(roman);
        return numberInt; 
      }
}

function splitTwoThreeRomanEquals(roman){
  const r = roman.split("");
  return r;
}

function changeRomanToInt(arr){
  return arr.map(function (item){
    return callbackInt(item);
  });
}

function calcInt(roman){
  const arr = splitTwoThreeRomanEquals(roman);
  const arrNumber = changeRomanToInt(arr);
  let lnt = roman.length;
  var rslt = arrNumber[lnt - 1];
  for(let i = lnt - 1; i > 0; i--){
    if(arrNumber[i] > arrNumber[i - 1]){
      rslt = rslt - arrNumber[i - 1];
    }
    if(arrNumber[i] <= arrNumber[i - 1]){
      rslt = rslt + arrNumber[i - 1];
    }
  }
  return rslt;
} 