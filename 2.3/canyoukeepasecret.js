function createSecretHolder(secret) {
return{
  setSecret: function(v){
    secret=v;
  },
  getSecret: function(){
    return secret;
  }
}
}