function add(n){
  // Let the currying begin!
  var x=function(n1){
    return add(n+n1);
  }
  x.toString=function(){
    return n;
  }
  return x;
}