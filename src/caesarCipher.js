function caesarCipher(string="",num){
let newString = "";
  let reg = /[a-z]/gi;
  function isUpper(string){
  return string === string.toUpperCase();
  }
  function changeNum(num){
    let newNum = num;
    while(newNum < 0){
      newNum += 26;
    }
    while(newNum > 26){
      newNum -= 26;
    }
    return newNum;
  }
  num = changeNum(num);
  for(let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i);
    if(string[i].match(reg)) {
      let newCode;
      if(isUpper(string[i])) newCode = ((code + num) - 65) % 26 + 65;
      else newCode = ((code + num) - 97) % 26 + 97;
      newString += String.fromCharCode(newCode);
    }
    else{
      newString += String.fromCharCode(code);
    }
  }
  return newString;
}

module.exports = caesarCipher;