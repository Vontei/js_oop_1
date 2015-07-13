function Animal(name, age, kind){
  this.name = name;
  this.kind = kind;
  this.age = age;
  this.awake = false
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
  return 'oink'
} else {
  return 'I am not a pig'
}

},

Animal.prototype.growUp = function(){
    var newAge = this.age + 1;
    return newAge
},


Animal.prototype.wakeUp = function(){
  this.awake = true;
  return this.awake
},

Animal.prototype.sleep = function(){
  return this.awake = false;
}


Animal.prototype.feed = function() {
  if(this.awake === true){
    var fed = 'NOM NOM NOM'
    return fed
  } else if(this.awake === false){
    return 'DONT FEED'
  }


}

module.exports=Animal;
