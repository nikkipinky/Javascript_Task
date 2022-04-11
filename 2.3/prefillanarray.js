function prefill(n, v) {
  if(n===0 || n==='0'){
    return [];
  }
  if(!Number.isInteger(Number(n)) || Number(n)<0 || typeof n==='boolean'){
    throw new TypeError(n+' is invalid');
  }
  return new Array(n).fill(v);
}