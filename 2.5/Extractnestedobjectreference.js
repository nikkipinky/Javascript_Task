// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  var strarr=string.split('.');
  return strarr.reduce(function(name,value){
    return name?name[value]:name;
  },this);
}