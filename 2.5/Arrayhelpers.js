// TODO
Array.prototype.square=function(){
  var num=[];
  for(let i=0;i<this.length;i++){
    num[i]=this[i]*this[i];
  }
  return num;
}
Array.prototype.cube=function(){
  var num1=[];
  for(let i=0;i<this.length;i++){
    num1[i]=this[i]*this[i]*this[i];
  }
  return num1;
}
Array.prototype.average=function(){
  var tot=0;
  for(let i=0;i<this.length;i++){
    tot+=this[i];
  }
  var avg=tot/this.length;
  return avg;
}
Array.prototype.sum=function(){
  var total=0;
  for(let i=0;i<this.length;i++){
    total+=this[i];
  }
  return total;
}
Array.prototype.even=function(){
  var newarr=[];
  for(let i=0;i<this.length;i++){
    if(this[i]%2==0){
      newarr.push(this[i]);
    }
  }
  return newarr;
}
Array.prototype.odd=function(){
  var newarrodd=[];
  for(let i=0;i<this.length;i++){
    if(this[i]%2!=0){
      newarrodd.push(this[i]);
    }
  }
  return newarrodd;
}