var number = 10;

function add5(){
  return number += 5;
}

function divideBy3(){
  return number /= 3;
}

divideBy3();
console.log(number);
add5();
console.log(number);

number = 10;

add5();
console.log(number);

divideBy3();
console.log(number)

function add(a,b){
  return a + b;
}

function subtract(a, b){
  return b-a;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return b/a;
}

function inc(n){
  return n++;
}

function dec(n){
  return n--;
}

function makeInt(n){
  return parseInt(n, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
}