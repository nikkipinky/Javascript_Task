// Let's make a Cat constructor!
var Cat = (function () {
 // ... your code here.
  var arr={
    tot:0,
    avg:0,
    c:0
  }
  function Cat(name,weight){
    if(!name || !weight){
      throw Error('invalid parameters');
    }
    arr.c+=1;
    this.name=name;
    Object.defineProperty(this,'weight',{get: function(){
      return this._weight || 0;
      }, 
     set: function(value){
       arr.tot=arr.tot+value-this.weight;
       arr.avg=arr.tot/arr.c;
       return this._weight=value
       }
     });
    this.weight=weight;
  }
  Cat.averageWeight=() =>arr.avg;
  return Cat;
}());