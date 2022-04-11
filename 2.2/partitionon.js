// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var even=items.filter(i=>pred(i));
  var odd=items.filter(i=>!pred(i));
  items.length=0;
  var l=odd.length;
  items.push.apply(items,odd.concat(even));
  return l;
}