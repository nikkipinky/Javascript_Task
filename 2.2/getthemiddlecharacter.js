function getMiddle(s)
{
  //Code goes here!
  var a=s.length/2;
  if(Number.isInteger(a)){
    return s[a-1]+s[a];
  }
  else{
    a=parseInt(a);
    return s[a];
  }
}