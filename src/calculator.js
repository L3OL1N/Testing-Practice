const add = (a,b) => {
    if(vaild(a,b)) return a + b;
    return new Error("not number");
}
const subtract = (a,b) => {
    if(vaild(a,b)) return a - b;
    return new Error("not number");
}
const divide = (a,b) => {
    if(vaild(a,b)) return a/b;
    return new Error("not number");
}
const multiply = (a,b) => {
    if(vaild(a,b)) return a*b;
    return new Error("not number");
}
function vaild(a,b){
    if(typeof a != "number" || typeof b != "number" ) return false;
    return true;
}
const calculator = {
    add,
    subtract,
    divide,
    multiply
}
module.exports = calculator;