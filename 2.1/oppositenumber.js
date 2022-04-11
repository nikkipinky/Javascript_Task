function opposite(number) {
  //your code here
  if(number<0){
    number=Math.abs(number);
  }
  else if(number>0){
    number=-number;
  }
  return number;
}