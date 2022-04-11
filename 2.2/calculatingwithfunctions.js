function calculate(expr,num){
  if(!expr){
    return num;
  }
  return expr(num);
}
function zero(expr) {
  return calculate(expr,0);
}
function one(expr) {
  return calculate(expr,1);
}
function two(expr) {
  return calculate(expr,2);
}
function three(expr) {
  return calculate(expr,3);
}
function four(expr) {
  return calculate(expr,4)
}
function five(expr) {
  return calculate(expr,5)
}
function six(expr) {
  return calculate(expr,6)
}
function seven(expr) {
  return calculate(expr,7)
}
function eight(expr) {
  return calculate(expr,8)
}
function nine(expr) {
  return calculate(expr,9)
}

function plus(second) {
  return function(first){
    return first+second;
  }
}
function minus(second) {
  return function(first){
    return first-second;
  }
}
function times(second) {
  return function(first){
    return first*second;
  }
}
function dividedBy(second) {
  return function(first){
    return parseInt(first/second);
  }
}